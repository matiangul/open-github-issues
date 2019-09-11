import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { CONFIG_PROVIDER, TEST_CONFIG_PROVIDER } from './config.provider';
import { GithubService } from './github.service';

describe('GithubService timing tests', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubService,
        TEST_CONFIG_PROVIDER({
          ...CONFIG_PROVIDER.useValue,
          DEBOUNCE_TIME_MS: 200,
        }),
      ],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should search for open github issues ony for query "ttt"', fakeAsync(() => {
    const stubbedIssuesResponse = { items: [] };
    const service: GithubService = TestBed.get(GithubService);
    const searchValObservable = new Subject<string>();

    service
      .getOpenIssuesByTitle(searchValObservable)
      .subscribe(issues => expect(issues).toEqual(stubbedIssuesResponse.items));

    searchValObservable.next('t');
    tick(100);
    searchValObservable.next('tt');
    tick(100);
    searchValObservable.next('ttt t');
    tick(200);

    const req = httpTestingController.expectOne(
      request =>
        request.url ===
        'https://api.github.com/search/issues?q=ttt+t+in:title,body,comments+state:open+type:issue+order:desc'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(stubbedIssuesResponse);
  }));
});
