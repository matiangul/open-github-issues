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

const MIN_TEXT_LENGHT = 2;
const DEBOUNCE_TIME_MS = 1000;

@Injectable()
export class GithubService {
  isLoading = new BehaviorSubject<boolean>(false);

  static isTooShort(text: string): boolean {
    return text.trim().length < MIN_TEXT_LENGHT;
  }

  getOpenIssuesByTitle(
    searchValue: Observable<string>
  ): Observable<GithubIssue[]> {
    return searchValue.pipe(
      filter(val => !GithubService.isTooShort(val)),
      debounceTime(DEBOUNCE_TIME_MS),
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
          `https://api.github.com/search/issues?q=${searchQuery}+in:title,body,comments+state:open+type:issue+order:desc`
        )
      ),
      tap(() => this.isLoading.next(false)),
      map(res => res.items)
    );
  }

  constructor(
    private readonly http: HttpClient,
    @Inject(CONFIG) private readonly config: Config
  ) {}
}
