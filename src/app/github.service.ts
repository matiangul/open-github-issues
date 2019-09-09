import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map, debounceTime, delay, filter } from 'rxjs/operators';

const MIN_TEXT_LENGHT = 2;
const DEBOUNCE_TIME_MS = 1000;

@Injectable()
export class GithubService {
  isLoading = new BehaviorSubject<boolean>(false);

  static isTooShort(text: string): boolean {
    return text.trim().length < MIN_TEXT_LENGHT;
  }

  getOpenIssuesByTitle(searchValue: Observable<string>): Observable<any[]> {
    return searchValue.pipe(
      filter(val => !GithubService.isTooShort(val)),
      tap(() => this.isLoading.next(true)),
      delay(300),
      debounceTime(DEBOUNCE_TIME_MS),
      tap(() => this.isLoading.next(false)),
      map(it => it.split(''))
    );
  }

  constructor() {}
}
