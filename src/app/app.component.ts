import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      {{ title }}
    </div>
    <div>
      {{ num1 + num2 }}
    </div>
    <div>
      {{ isHappy ? ':)' : ':(' }}
    </div>
    <div>
      <h1>Property binding</h1>
      <h2 [innerHTML]="title"></h2>
      <input type="text" [value]="title" />
    </div>
  `,
})
export class AppComponent {
  title: String;
  num1: number = 1;
  num2: number = 2;
  isHappy: boolean = false;
  //
  constructor() {
    this.title = 'Ultimate course';
  }
}
