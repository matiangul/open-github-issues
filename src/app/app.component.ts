import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-github-issues';
  input = '';

  onInputChange(value) {
    this.input = value;
  }
}
