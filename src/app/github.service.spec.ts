import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { CONFIG_PROVIDER, TEST_CONFIG_PROVIDER } from './config.provider';
import { GithubService } from './github.service';
import { fail, ok } from 'assert';

describe('GithubService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubService,
        TEST_CONFIG_PROVIDER({
          ...CONFIG_PROVIDER.useValue,
          DEBOUNCE_TIME_MS: 0,
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

  it('should be created', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });

  it('should not load when noone asked', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service.isLoading.value).toBe(false);
  });

  it('should know what texts are to short for searching', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service.isTooShort('ab')).toBe(false);
    expect(service.isTooShort('a')).toBe(true);
  });

  it('should search for open github issues for query "test"', () => {
    const stubbedIssuesResponse = { items: [] };
    const service: GithubService = TestBed.get(GithubService);

    service
      .getOpenIssuesByTitle(of('test'))
      .subscribe(issues => expect(issues).toEqual(stubbedIssuesResponse.items));

    const req = httpTestingController.expectOne(
      request =>
        request.url ===
        'https://api.github.com/search/issues?q=test+in:title,body,comments+state:open+order:desc'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(stubbedIssuesResponse);
  });
});
