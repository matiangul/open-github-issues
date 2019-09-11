import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  input = '';

  onInputChange(value) {
    this.input = value;
  }
}
