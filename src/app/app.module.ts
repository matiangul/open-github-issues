import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
