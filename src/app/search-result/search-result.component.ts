import { Component, Input } from '@angular/core';
import { GithubIssue } from '../github.models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent {
  @Input() issue: GithubIssue;
}
