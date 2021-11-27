import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { scan, takeWhile } from 'rxjs/operators';
import { WeeklyReservation } from 'src/app/models/Week';

import * as ReservationReducer from '../../reservations/state/reservation.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() externalInput: string | null;
  @Input() isEditMode: boolean = false;

  reservation$ : Observable<WeeklyReservation>;
  deadlineSubscription: Subscription;
  deadline: Date;

  constructor(private store: Store<ReservationReducer.State>) { }

  ngOnInit(): void {
    const nowInS = new Date().getTime();
    this.deadlineSubscription = this.store.select(ReservationReducer.getDeadline).subscribe(
      deadline => {
        console.log(JSON.stringify(deadline));
        this.deadline = deadline;
      }
    );

    this.store.select(ReservationReducer.getWeeklyReservation).pipe (
      weeklyReservation => this.reservation$ = weeklyReservation
    );
  }

  ngOnDestroy(): void {
    this.deadlineSubscription.unsubscribe();
  }
}
