import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>List of passengers</h1>
      <ul>
        <li *ngFor="let p of passengers; let i = index">
          <span
            class="status"
            [ngStyle]="{
              backgroundColor: p.checkedIn ? 'green' : 'red'
            }"
          ></span>
          <!-- <span
            class="status"
            [style.backgroundColor]="p.checkedIn ? 'green' : 'red'"
          ></span> -->
          <!-- <span class="status" [ngClass]="{ 'checked-in': p.checkedIn }"></span> -->
          <!-- <span class="status" [class.checked-in]="p.checkedIn"></span> -->
          {{ i }} {{ p.fullName }}
          <p>
            {{ p | json }}
          </p>
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'John',
      checkedIn: true,
    },
    {
      id: 2,
      fullName: 'Jane',
      checkedIn: true,
    },
    {
      id: 1,
      fullName: 'Jacob',
      checkedIn: false,
    },
    {
      id: 2,
      fullName: 'Dun',
      checkedIn: false,
    },
  ];
}
