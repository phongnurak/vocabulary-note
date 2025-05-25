import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {

  @Output()
  public searchEvent = new EventEmitter<string>();

  protected searchText = '';

  protected onSearchChange(text: string): void {
    this.searchText = text;
    this.searchEvent.emit(this.searchText);
  }

}
