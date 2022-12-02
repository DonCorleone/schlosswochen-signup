import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

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
  Place,
  ReservationState,
  WeeklyReservation,
  WeekVM,
} from '../../../models/Interfaces';
import { LoadingIndicatorService } from '../../../service/loading-indicator.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit, OnDestroy {
  title = 'RESERVATION';

  reservationStateEnum = ReservationState;
  // maxWeeks: number = 1;
  weekVMs$: Observable<WeekVM[]>;
  maxNumberOfReservations: number = 1;
  submitted = false;
  signupForm = this.fb.group({
    numOfChilds: [0, [Validators.required, Validators.min(1)]],
  });
  reservationsPerWeekCtlr = this.signupForm.get('numOfChilds');

  constructor(
    private fb: UntypedFormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private store: Store<InscriptionReducer.InscriptionState>,
    private loadingIndicatorService: LoadingIndicatorService
  ) {
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
  }

  ngOnInit(): void {

    this.weekVMs$ = this.reservationService.getWeekVMs(2023);
    this.weekVMs$.subscribe(p => console.log(JSON.stringify(p)));
  }

  createWeeklyReservation(
    week: Week,
    reservations: number,
    state: ReservationState
  ): WeeklyReservation {
    return {
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

    const weeklyReservationControl = this.signupForm.get('numOfChilds');

    if (weeklyReservationControl) {
      let weeklyReservation: WeeklyReservation =
        weeklyReservationControl?.value;
      let deadlineMs =
        (5 + weeklyReservation.numberOfReservations * 3) * 60 * 1000;
      let deadline = new Date(new Date().getTime() + deadlineMs);

      let subscriptionInsertInput: Partial<SubscriptionInsertInput> = {
        numOfChildren: weeklyReservation.numberOfReservations,
        week: weeklyReservation.week.week,
        year: new Date().getFullYear(),
        deadline: deadline,
        reservationDate: new Date(),
        state: weeklyReservation.state,
      };

      this.reservationService
        .insertOneSubscription(subscriptionInsertInput)
        .pipe(take(1))
        .subscribe((inscription: Inscription) => {
          this.store.dispatch(
            InscriptionActions.setWeek({ week: weeklyReservation.week })
          );
          this.store.dispatch(
            InscriptionActions.setInscription({ inscription })
          );

          let sumParticipants = 0;
          this.reservationService
            .getReservationsPerWeek(weeklyReservation.week?.week!)
            .pipe(take(1))
            .subscribe((sumChildsPerState) => {
              sumChildsPerState.map((p) => {
                if (
                  p.state === ReservationState.DEFINITIVE ||
                  p.state === ReservationState.TEMPORARY
                ) {
                  sumParticipants += p.sumPerStateAndWeek;
                }
              });

              let places: Place[] = [];
              for (
                let i =
                  sumParticipants - weeklyReservation.numberOfReservations + 1;
                i <= sumParticipants;
                i++
              ) {
                places.push({
                  placeNumber: i,
                  reservationState: weeklyReservation.state,
                });
              }

              this.store.dispatch(
                InscriptionActions.setPlaces({ places: places })
              );
            });

          this.router
            .navigate(['/inscriptions/inscription', inscription._id])
            .then((x) => {
              console.log('ReservationComponent goToNextStep');
            });
        });
    }
  }

  goToPreviousStep() {
    this.router.navigate(['/welcome']).then((x) => {
      console.log('ReservationComponent goToPreviousStep');
    });
  }

  ngOnDestroy(): void {
    console.log('ReservationComponent destroyed');
  }
}
