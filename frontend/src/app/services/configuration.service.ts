import { Injectable } from '@angular/core';
import { StorageType } from '../models/common-model';
import { VocabularyService } from '../interfaces/vocaburary-service';
import { MemoryStorage } from './memory-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public storageType: StorageType = 'memory';

  private storageServices: VocabularyService[] = [];

  public constructor() {

    this.storageServices.push(MemoryStorage.getInstance());
  }

  public getStorage(): VocabularyService {
    
    for (let service of this.storageServices) {
      if (service.canHandle(this.storageType)) {
        return service;
      }  
    }

    throw Error('Can\'t find a storage service');

  }

}
