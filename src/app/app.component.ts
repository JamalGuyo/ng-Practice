import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
})
export class AppComponent {
  title = 'Ultimate Course';
}
