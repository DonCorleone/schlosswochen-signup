import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Week } from 'src/app/models/Week';
import { State } from 'src/app/state/app.state';

import * as ReservationAction from '../state/reservation.action';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  showCheatSheet: boolean = false;

  constructor(private store: Store<State>){
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    // this.store.select(getShowCheatSheet).subscribe(
    //   showCheatSheet => this.showCheatSheet = showCheatSheet
    // );
  }

  checkChanged(): void {
  //  this.store.dispatch(ReservationAction.showCheatSheetAction());
  }
}
