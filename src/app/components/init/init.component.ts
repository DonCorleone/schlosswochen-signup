import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface week {
  weeknr: number,
  numOfDefReservations: number,
  numOfProvReservations: number
}

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent {
  public weeks: Observable<week[]> = of([
    {weeknr: 1, numOfDefReservations: 0, numOfProvReservations: 0},
    {weeknr: 2, numOfDefReservations: 0, numOfProvReservations: 0},
    {weeknr: 3, numOfDefReservations: 0, numOfProvReservations: 0}
  ]);
}
