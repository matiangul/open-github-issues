import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultsComponent } from './search-results/search-results.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchInputComponent,
        SearchResultsComponent,
        SearchResultComponent,
      ],
      providers: [GithubService],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container h1').textContent).toContain(
      'Open GitHub Issues'
    );
  });
});
