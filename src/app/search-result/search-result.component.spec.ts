import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubIssue } from '../github.models';
import { SearchResultComponent } from './search-result.component';

const dummyGithubIssue: GithubIssue = {
  title: 'title',
  url: 'url',
  user: {
    login: 'login',
    avatar_url: 'avatar_url',
    html_url: 'html_url',
  },
  labels: [{ name: 'label1' }],
  body: 'body',
  created_at: 'created_at',
};

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
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
