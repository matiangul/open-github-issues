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
    console.log(`on input change: ${value}`);
    this.input = value;
  }
}
