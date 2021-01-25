import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [ngStyle]="{
          backgroundColor: detail.checkedIn ? 'green' : 'red'
        }"
      ></span>
      <h2>{{ detail.fullname }}</h2>
      <!-- <span
            class="status"
            [style.backgroundColor]="detail.checkedIn ? 'green' : 'red'"
          ></span> -->
      <!-- <span class="status" [ngClass]="{ 'checked-in': detail.checkedIn }"></span> -->
      <!-- <span class="status" [class.checked-in]="detail.checkedIn"></span> -->
      <!-- children -->
      <div class="date">
        Check In Date:
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: 'dd-MMMM-yyyy' | uppercase)
            : 'Not Checked In'
        }}
      </div>
      <div class="children">Children: {{ detail.children?.length || 0 }}</div>
      <!-- <p>
            {{ detail | json }}
          </p> -->
    </div>
  `,
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;
}
