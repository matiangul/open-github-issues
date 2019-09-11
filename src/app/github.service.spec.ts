import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { CONFIG_PROVIDER } from './config.provider';

describe('GithubService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GithubService, CONFIG_PROVIDER],
      imports: [HttpClientModule],
    })
  );

  it('should be created', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });
});
