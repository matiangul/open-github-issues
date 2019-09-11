import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubService } from '../github.service';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsComponent, SearchResultComponent],
      providers: [GithubService],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have property saying whether input is too empty', () => {
    expect(component.isInputTooShort).toBe(true);
  });

  it('should display empty info when input is empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('[data-test="empty-info"]')).not.toBeNull();
  });

  it('should not display empty info when input is not empty', () => {
    component.input = 'test';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('[data-test="empty-info"]')).toBeNull();
  });
});
