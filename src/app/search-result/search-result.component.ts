import { Component, Input, OnInit } from '@angular/core';
import { GithubIssue } from '../github.models';
import { StarringService } from '../starring.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {
  @Input() issue: GithubIssue;

  isStarred = false;

  constructor(private readonly starringService: StarringService) {}

  ngOnInit() {
    this.refreshStarredState();
  }

  private refreshStarredState() {
    this.isStarred = this.starringService.isStarred(this.issue.html_url);
  }

  toggleIssueStar() {
    this.starringService.toggle(this.issue.html_url);
    this.refreshStarredState();
  }
}
