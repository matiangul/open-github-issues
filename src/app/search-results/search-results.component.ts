import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  providers: [GithubService],
})
export class SearchResultsComponent implements OnChanges, OnInit {
  @Input() input = '';

  private observableInput = new BehaviorSubject<string>(this.input);

  issues = [];

  isLoading = false;

  get isInputTooShort(): boolean {
    return this.github.isTooShort(this.input);
  }

  constructor(private readonly github: GithubService) {}

  ngOnInit() {
    this.github
      .getOpenIssuesByTitle(this.observableInput)
      .subscribe(issues => (this.issues = issues));
    this.github.isLoading.subscribe(isLoading => (this.isLoading = isLoading));
  }

  ngOnChanges() {
    this.observableInput.next(this.input);
  }
}
