import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Vocabulary } from '../../models/vocabulary';

@Component({
  selector: 'app-vocabulary-card',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './vocabulary-card.component.html',
  styleUrl: './vocabulary-card.component.scss',
})
export class VocabularyCardComponent {

  @Input({required: true})
  public vocabulary!: Vocabulary;

  @Output()
  public deleteEvent = new EventEmitter<Vocabulary>();

  protected onDelete(): void {
    this.deleteEvent.emit(this.vocabulary);
  }

}
