import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { select, Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import * as InscriptionActions from '../../inscription/state/inscription.actions';
import { ReservationService } from 'src/app/service/reservation.service';
import {
  Subscription as Inscription,
  SubscriptionInsertInput,
  Week,
} from 'netlify/models/Graphqlx';
import { environment } from '../../../../environments/environment';
import {
  ReservationState,
  WeeklyReservation
} from '../../../models/Interfaces';
import { LoadingIndicatorService } from '../../../service/loading-indicator.service';
import { WeeksService } from "../../../service/weeks.service";
import { WeekCapacity } from "../../../models/week-capacity";
import { invokeWeeksAPI } from "../state/weeks.action";
import { selectWeeks } from "../state/weeks.selector";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit, OnDestroy {
  title = 'RESERVATION';

  reservationStateEnum = ReservationState;
  // maxWeeks: number = 1;
  weekVMs$: Observable<WeekCapacity[]>;
  year: number;
  maxNumberOfReservations: number = 1;
  submitted = false;
  signupForm = this.fb.group({
    numOfChilds: [0, [Validators.required, Validators.min(1)]],
  });
  reservationsPerWeekCtlr = this.signupForm.get('numOfChilds');

  weeks$ = this.superStore.pipe(select(selectWeeks)).pipe((p) => {
    return this.weekService.mapWeekCapacity(p);
  });

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private fb: UntypedFormBuilder,
    private reservationService: ReservationService,
    private weekService: WeeksService,
    private router: Router,
    private store: Store<InscriptionReducer.InscriptionState>,
    private loadingIndicatorService: LoadingIndicatorService,
    private superStore: Store
  ) {
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
    this.year = +environment.UPCOMING_YEAR;
  }

  ngOnInit(): void {
    this.store.dispatch(invokeWeeksAPI());
  }

  createWeeklyReservation(
    year: number,
    week: Week,
    reservations: number,
    state: ReservationState
  ): WeeklyReservation {
    return {
      year: year,
      week: week,
      numberOfReservations: reservations,
      state: state,
    };
  }

  goToNextStep(): void {
    if (this.signupForm.invalid) {
      this.submitted = true;
      this.loadingIndicatorService.stop();
      return;
    }

    let weeklyReservation: WeeklyReservation = this.signupForm.get('numOfChilds')?.value;

    if (weeklyReservation) {

      this.store.dispatch(
        InscriptionActions.setWeek({ week: weeklyReservation.week })
      );

      let deadline = this.calcDeadline(weeklyReservation);

      let subscriptionInsertInput: Partial<SubscriptionInsertInput> = {
        numOfChildren: weeklyReservation.numberOfReservations,
        week: weeklyReservation.week.week,
        year: weeklyReservation.year,
        deadline: deadline,
        reservationDate: new Date(),
        state: weeklyReservation.state,
      };

      this.reservationService
        .insertOneSubscription(subscriptionInsertInput)
        .pipe(
          takeUntil(this._ngDestroy$)
        ).subscribe((inscription: Inscription) => {

        this.store.dispatch(
          InscriptionActions.setInscription({ inscription })
        );

        this.weekService.setPlaces(weeklyReservation);

        this.router
            .navigate(['/inscriptions/inscription', inscription._id])
            .then((x) => {
              console.log('ReservationComponent goToNextStep');
            });
        });
    }
  }

  private calcDeadline(weeklyReservation: WeeklyReservation) {
    let deadlineMs =
      (5 + weeklyReservation.numberOfReservations * 3) * 60 * 1000;
    return new Date(new Date().getTime() + deadlineMs);
  }

  goToPreviousStep() {
    this.router.navigate(['/welcome']).then((x) => {
      console.log('ReservationComponent goToPreviousStep');
    });
  }

  ngOnDestroy(): void {
    console.log('ReservationComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
