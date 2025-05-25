import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Vocabulary, VocabularyType } from '../../models/vocabulary';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { VocabularyCardComponent } from "../vocabulary-card/vocabulary-card.component";

@Component({
  selector: 'app-note',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    VocabularyCardComponent
],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {

  protected defaultVocabulary: Vocabulary = {
    word: '',
    context: {
      type: {
        displayName: 'Noun',
        value: 'noun'
      },
      meaning: ''
    }
  }

  protected filterText = '';

  private vocabularies: Vocabulary[] = [];

  protected vocabulariesFiltered: Vocabulary[] = [];

  protected types: VocabularyType[] = [
    {
      displayName: 'Noun',
      value: 'noun'
    },
    {
      displayName: 'Verb',
      value: 'verb'
    }
  ];

  // public constructor() {
  //   const form = new FormControl();
  //   form.
  // }

  protected addNewVocabulary(vocabulary: Vocabulary): void {

    // this.vocabularies.

    this.vocabularies.push(vocabulary);

    this.vocabulariesFiltered = this.vocabularies;

    this.defaultVocabulary = {
      word: '',
      context: {
        type: {
          displayName: 'Noun',
          value: 'noun'
        },
        meaning: ''
      }
    }
  }

  protected search(text: string): void {

    if (text === '') {
      this.vocabulariesFiltered = this.vocabularies;
      return;
    }

    this.vocabulariesFiltered = this.vocabularies.filter( vocabulary => {
      return vocabulary.word.startsWith(text);
    });

  }

}
