import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Passenger[] {
    return [
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
