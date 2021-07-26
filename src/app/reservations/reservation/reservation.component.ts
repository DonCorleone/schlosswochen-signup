import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { week } from 'src/app/models/Week';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  public weeks: Observable<week[]> = of([
    {weeknr: 1, numOfDefReservations: 0, numOfProvReservations: 0},
    {weeknr: 2, numOfDefReservations: 0, numOfProvReservations: 0},
    {weeknr: 3, numOfDefReservations: 0, numOfProvReservations: 0}
  ]);
}
