import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LOCAL_STORAGE_PROVIDER } from './storage.provider';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultsComponent,
    SearchResultComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [LOCAL_STORAGE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
