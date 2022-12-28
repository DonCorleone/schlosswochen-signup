import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ReservationService } from 'src/app/service/reservation.service';
import { SubscriptionInsertInput, Week } from 'netlify/models/Graphqlx';
import { environment } from '../../../../environments/environment';
import {
  ReservationState,
  WeeklyReservation,
} from '../../../models/Interfaces';
import { LoadingIndicatorService } from '../../../service/loading-indicator.service';
import { WeeksService } from '../../../service/weeks.service';
import {
  invokeSaveNewInscriptionAPI,
  invokeWeeksAPI,
} from '../state/reservation.action';
import { reservationSelector } from '../state/reservation.selector';
import { AppState } from '../../../shared/store/appState';
import { selectAppState } from '../../../shared/store/app.selector';
import { setAPIStatus } from '../../../shared/store/app.action';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit, OnDestroy {
  title = 'RESERVATION';
  reservationStateEnum = ReservationState;
  // maxWeeks: number = 1;
  year: number;
  maxNumberOfReservations: number = 1;
  submitted = false;
  signupForm = this.fb.group({
    numOfChilds: [0, [Validators.required, Validators.min(1)]],
  });
  reservationsPerWeekCtlr = this.signupForm.get('numOfChilds');
  weeks$ = this.store.pipe(select(reservationSelector)).pipe((p) => {
    return this.weekService.mapWeekCapacity(p);
  });
  private _ngDestroy$ = new Subject<void>();
  constructor(
    private fb: UntypedFormBuilder,
    private reservationService: ReservationService,
    private weekService: WeeksService,
    private router: Router,
    private loadingIndicatorService: LoadingIndicatorService,
    private store: Store,
    private appStore: Store<AppState>
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
    if (this.manageInvalidity()) {
      return;
    }

    let weeklyReservation: WeeklyReservation =
      this.signupForm.get('numOfChilds')?.value;

    if (!weeklyReservation) {
      return;
    }
    const subscriptionInsertInput =
      this.createSubscriptionInsertInput(weeklyReservation);
    this.save(subscriptionInsertInput);
  }

  private manageInvalidity(): boolean {
    if (this.signupForm.invalid) {
      this.submitted = true;
      this.loadingIndicatorService.stop();
      return true;
    }
    return false;
  }

  private createSubscriptionInsertInput(weeklyReservation: WeeklyReservation) {
    const deadline = this.calcDeadline(weeklyReservation);
    let subscriptionInsertInput: Partial<SubscriptionInsertInput> = {
      numOfChildren: weeklyReservation.numberOfReservations,
      week: weeklyReservation.week.week,
      year: weeklyReservation.year,
      deadline: deadline,
      reservationDate: new Date(),
      state: weeklyReservation.state,
      children: [],
    };
    return subscriptionInsertInput;
  }

  save(subscriptionInsertInput: Partial<SubscriptionInsertInput>) {
    this.store.dispatch(
      invokeSaveNewInscriptionAPI({ newInscription: subscriptionInsertInput })
    );
    this.appStore
      .pipe(select(selectAppState), takeUntil(this._ngDestroy$))
      .subscribe((apState) => {
        if (apState.apiStatus == 'success') {
          this.appStore.dispatch(
            setAPIStatus({
              apiStatus: { apiResponseMessage: '', apiStatus: '' },
            })
          );
          this.router.navigate(['/inscriptions/inscription']).then((p) => {
            console.log(`ReservationComponent save: ${p}`);
          });
        }
      });
  }

  private calcDeadline(weeklyReservation: WeeklyReservation) {
    let deadlineMs =
      (5 + weeklyReservation.numberOfReservations * 3) * 60 * 1000;
    return new Date(new Date().getTime() + deadlineMs);
  }

  goToPreviousStep() {
    this.router.navigate(['/welcome']).then((x) => {
      console.log(`ReservationComponent goToPreviousStep: ${x}`);
    });
  }

  ngOnDestroy(): void {
    console.log('ReservationComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
