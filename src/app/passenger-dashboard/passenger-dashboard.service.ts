import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${PASSENGER_API}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'ngdemo',
    });
    return this.http
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || 'error');
  }
}
