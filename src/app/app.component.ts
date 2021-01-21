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
      <passenger-dashboard></passenger-dashboard>
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
