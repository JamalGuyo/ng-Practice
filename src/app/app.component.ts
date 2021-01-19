import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>Event binding</h1>
      <input
        type="text"
        [ngModel]="title"
        (ngModelChange)="handleChange($event)"
      />
      <input type="text" [(ngModel)]="title" />
      <h2 [innerHTML]="title"></h2>
    </div>
  `,
})
export class AppComponent {
  title: String = 'ultimate course';
  //
  handleChange(value: string) {
    this.title = value;
  }
}
