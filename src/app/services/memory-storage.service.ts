import { Injectable } from '@angular/core';
import { Vocabulary } from '../models/vocabulary';import { VocabularyService } from '../interfaces/vocaburary-service';
import { Observable, Subject } from 'rxjs';
import { StorageType } from '../models/common-model';

export class MemoryStorage implements VocabularyService {

  private static instance: MemoryStorage | undefined = undefined;

  private vocabularies: Vocabulary[] = [];

  private changeEvent = new Subject<Vocabulary[]>();
  private changeEventObsevable = this.changeEvent.asObservable();

  private constructor() {}

  public static getInstance(): MemoryStorage {
    if (this.instance === undefined) {
      this.instance = new MemoryStorage();
    }

    return this.instance;

  }

  public canHandle(type: StorageType): boolean {
    return type === 'memory';
  }
  
  public onValueChange(): Observable<Vocabulary[]> {
    return this.changeEvent.asObservable();
  }

  public getAllVocaburary(): Vocabulary[] {
    return this.vocabularies;
  }

  public addVocaburary(newVocaburary: Vocabulary): void {
    this.vocabularies.push(newVocaburary);
    this.changeEvent.next(this.vocabularies);
  }

  public deleteVocaburary(word: String): void {
    const removeItemIdex = this.vocabularies.findIndex( item => {
      return item.word === word;
    });

    if (removeItemIdex < 0) {
      return;
    }

    //Remove item
    this.vocabularies.splice(removeItemIdex, 1);
    this.changeEvent.next(this.vocabularies);
  }

}
