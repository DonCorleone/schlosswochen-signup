import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import {scan, takeUntil, takeWhile} from 'rxjs/operators';
import { WeeklyReservation } from 'src/app/models/Week';

import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import {selectIsLoggedIn} from "../../user/state/auth.selectors";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() externalInput: string | null;

  reservation$ : Observable<WeeklyReservation>;
  loggedIn$ : Observable<boolean>;

  deadlineSubscription: Subscription;
  deadline: Date;

  constructor(
    private store: Store<ReservationReducer.State>,
    public translate: TranslateService) { }

  ngOnInit(): void {

    this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));

    this.deadlineSubscription = this.store.select(ReservationReducer.getDeadline).subscribe(
      deadline => {
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
