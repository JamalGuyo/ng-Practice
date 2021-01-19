import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>Using template ref variable</h1>
      <button (click)="handleClick(username.value)">save value</button>
      <input type="text" #username />
      <h2 [innerHTML]="title"></h2>
    </div>
  `,
})
export class AppComponent {
  title: String = 'ultimate course';
  //
  handleClick(value: string) {
    this.title = value;
  }
}
