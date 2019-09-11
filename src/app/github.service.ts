import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Config, CONFIG } from './config.provider';
import { GithubIssue, GithubIssuesResponse } from './github.models';

@Injectable()
export class GithubService {
  isLoading = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly http: HttpClient,
    @Inject(CONFIG) private readonly config: Config
  ) {}

  isTooShort(text: string): boolean {
    return text.trim().length < this.config.MIN_TEXT_LENGHT;
  }

  getOpenIssuesByTitle(
    searchValue: Observable<string>
  ): Observable<GithubIssue[]> {
    return searchValue.pipe(
      filter(val => !this.isTooShort(val)),
      debounceTime(this.config.DEBOUNCE_TIME_MS),
      distinctUntilChanged(),
      tap(() => this.isLoading.next(true)),
      map(val =>
        val
          .replace(/\s+/, ' ')
          .split(' ')
          .join('+')
      ),
      switchMap(searchQuery =>
        this.http.get<GithubIssuesResponse>(
          this.config.GITHUB_SEARCH_URL_FUN(searchQuery)
        )
      ),
      tap(() => this.isLoading.next(false)),
      map(res => res.items)
    );
  }
}
