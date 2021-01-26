import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
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
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <h2 *ngIf="!editing">{{ detail.fullname }}</h2>
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
      <!--  -->
      <div>
        <button (click)="toggleEdit()">
          {{ editing ? 'Done' : 'Edit' }}
        </button>
      </div>
      <div>
        <button (click)="onRemove()">remove</button>
      </div>
      <!-- <p>
            {{ detail | json }}
          </p> -->
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  ngOnChanges(changes) {
    // if (changes.detail) {
    //   this.detail = Object.assign({}, changes.detail.currentValue);
    // }
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
