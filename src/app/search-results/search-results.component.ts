import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  @Input() input = '';

  get isInputEmpty(): boolean {
    return this.input.replace(/\s/, '').length === 0;
  }

  constructor() { }

}
