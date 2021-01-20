import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>Using *ngIf directive</h1>
      <input type="text" [(ngModel)]="title" />
      <ng-template [ngIf]="title.length">
        <div>
          <h2>searching for : {{ title }}</h2>
        </div>
      </ng-template>
      <div *ngIf="title.length">
        <h2>searching for : {{ title }}</h2>
      </div>
    </div>
  `,
})
export class AppComponent {
  title: String = 'ultimate course';
}
