import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { GithubService } from '../github.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnChanges, OnInit {
  @Input() input = '';

  private githubInput = new BehaviorSubject<string>(this.input);

  issues = [];

  get isInputEmpty(): boolean {
    return this.input.replace(/\s/, '').length === 0;
  }

  constructor(private readonly github: GithubService) {}

  ngOnInit() {
    this.github
      .getOpenIssuesByTitle(this.githubInput)
      .subscribe(issues => (this.issues = issues));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.githubInput.next(this.input);
  }
}
