import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      {{ title }}
    </div>
  `,
})
export class AppComponent {
  title = 'Ultimate Course';
}
