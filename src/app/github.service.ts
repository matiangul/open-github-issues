import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, debounceTime } from 'rxjs/operators';

@Injectable()
export class GithubService {
  getOpenIssuesByTitle(searchValue: Observable<string>): Observable<any[]> {
    return searchValue.pipe(
      debounceTime(1000),
      tap(it => console.log('getOpenIssuesByTitle', it)),
      map(it => [it])
    );
  }

  constructor() {}
}
