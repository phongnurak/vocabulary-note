import { Component, Inject } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Vocabulary, VocabularyType } from '../../models/vocabulary';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { VocabularyCardComponent } from "../vocabulary-card/vocabulary-card.component";
import { SearchComponent } from "../search/search.component";
import { ConfigurationService } from '../../services/configuration.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-note',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    VocabularyCardComponent,
    SearchComponent
],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {

  private changeEvent: Subscription;

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

  public constructor(private configurationService: ConfigurationService) {
    const storage = configurationService.getStorage();
    const vocabs = storage.getAllVocaburary();
    
    this.vocabularies.push(...vocabs);
    this.vocabulariesFiltered.push(...vocabs);

    this.changeEvent = storage.onValueChange().subscribe( updatedVocaburarys => {
      this.vocabularies = updatedVocaburarys;
      this.vocabulariesFiltered = updatedVocaburarys;
    });
  }

  protected addNewVocabulary(vocabulary: Vocabulary): void {

    this.configurationService.getStorage().addVocaburary(vocabulary);

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

  protected removeVocabulary(vocabulary: Vocabulary): void {
    this.configurationService.getStorage().deleteVocaburary(vocabulary.word);
  }

}
