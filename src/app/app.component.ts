import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>Event binding</h1>
      <input
        type="text"
        [value]="title"
        (blur)="handleBlur($event)"
        (input)="handleInput($event)"
      />
      <button (click)="handleClick()">Change Input value</button>
      <h2 [innerHTML]="title"></h2>
    </div>
  `,
})
export class AppComponent {
  title: String = 'ultimate course';
  //
  handleBlur(event) {
    this.title = event.target.value;
  }

  handleInput(event) {
    this.title = event.target.value;
  }

  handleClick() {
    this.title = 'Ultimate course';
  }
}
