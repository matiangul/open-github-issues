import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  input = '';

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
