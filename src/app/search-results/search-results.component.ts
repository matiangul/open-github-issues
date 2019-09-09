import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { GithubService } from '../github.service';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'minimatch';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [GithubService],
})
export class SearchResultsComponent implements OnChanges, OnInit {
  @Input() input = '';

  private githubInput = new BehaviorSubject<string>(this.input);

  issues = [];

  isLoading = false;

  get isInputTooShort(): boolean {
    return GithubService.isTooShort(this.input);
  }

  constructor(private readonly github: GithubService) {}

  ngOnInit() {
    this.github
      .getOpenIssuesByTitle(this.githubInput)
      .subscribe(issues => (this.issues = issues));
    this.github
      .isLoading
      .subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnChanges() {
    this.githubInput.next(this.input);
  }
}
