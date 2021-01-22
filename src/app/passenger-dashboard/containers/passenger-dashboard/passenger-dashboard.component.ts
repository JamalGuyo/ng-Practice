import { Component, OnInit } from '@angular/core';

// interfaces
import { Passenger } from '../../models/passenger.interface';
//
@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count></passenger-count>
      <passenger-detail></passenger-detail>
      <h1>List of passengers</h1>
      <ul>
        <li *ngFor="let p of passengers; let i = index">
          <span
            class="status"
            [ngStyle]="{
              backgroundColor: p.checkedIn ? 'green' : 'red'
            }"
          ></span>
          <h2>{{ i }} {{ p.fullname }}</h2>
          <!-- <span
            class="status"
            [style.backgroundColor]="p.checkedIn ? 'green' : 'red'"
          ></span> -->
          <!-- <span class="status" [ngClass]="{ 'checked-in': p.checkedIn }"></span> -->
          <!-- <span class="status" [class.checked-in]="p.checkedIn"></span> -->
          <!-- children -->
          <div class="date">
            Check In Date:
            {{
              p.checkInDate
                ? (p.checkInDate | date: 'dd-MMMM-yyyy' | uppercase)
                : 'Not Checked In'
            }}
          </div>
          <div class="children">Children: {{ p.children?.length || 0 }}</div>
          <!-- <p>
            {{ p | json }}
          </p> -->
        </li>
      </ul>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() {}

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullname: 'Loise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [
          { name: 'Jessice', age: 12 },
          { name: 'Paul', age: 18 },
        ],
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
    ];
  }
}
