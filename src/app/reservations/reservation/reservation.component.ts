import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { week } from 'src/app/models/Week';
import { getShowCheatSheet } from '../state/reservation-selector';
import { State } from '../state/reservation.reducer';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  showCheatSheet: boolean = false;

  public weeks: Observable<week[]> = of([
    {weeknr: 1, numOfDefReservations: 0, numOfProvReservations: 0},
    {weeknr: 2, numOfDefReservations: 0, numOfProvReservations: 0},
    {weeknr: 3, numOfDefReservations: 0, numOfProvReservations: 0}
  ]);

  constructor(private store: Store<State>){
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.store.select(getShowCheatSheet).subscribe(
      showCheatSheet => this.showCheatSheet = showCheatSheet
    );
  }

  checkChanged(): void {
    this.store.dispatch(
      {type:'[Reservations] Toggle Show Cheat Sheet'}
    )
  }
}
