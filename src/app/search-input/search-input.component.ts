import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent {
  @Output() inputChange = new EventEmitter<string>();
}
