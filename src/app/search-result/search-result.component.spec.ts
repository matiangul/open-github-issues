import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubIssue } from '../github.models';
import { LOCAL_STORAGE_PROVIDER } from '../storage.provider';
import { SearchResultComponent } from './search-result.component';
import { StarringService } from '../starring.service';

const dummyGithubIssue: GithubIssue = {
  title: 'title',
  html_url: 'url',
  user: {
    login: 'login',
    avatar_url: 'avatar_url',
    html_url: 'html_url',
  },
  labels: [{ name: 'label1' }],
  body: 'body',
  created_at: '2019-03-19T11:10:30Z',
};

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    LOCAL_STORAGE_PROVIDER.useFactory().clear();
    TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      providers: [StarringService, LOCAL_STORAGE_PROVIDER],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    component.issue = dummyGithubIssue;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
