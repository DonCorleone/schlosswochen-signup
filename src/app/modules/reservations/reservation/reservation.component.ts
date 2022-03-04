import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import * as InscriptionActions from '../../inscription/state/inscription.actions';
import { WeeklyReservation, WeekVM } from 'src/app/models/Week';
import { ReservationService } from 'src/app/service/reservation.service';
import {
  Subscription as Inscription,
  SubscriptionInsertInput,
  Week,
} from '../../../models/Graphqlx';
import { environment } from '../../../../environments/environment.custom';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit, OnDestroy {
  title = 'RESERVATION';

  // maxWeeks: number = 1;
  weekVMs$: Observable<WeekVM[]>;
  maxNumberOfReservations: number = 1;

  reservationSubscription: Subscription;
  submitted = false;
  signupForm = this.fb.group({
    numOfChilds: [0, [Validators.required, Validators.min(1)]],
  });
  reservationsPerWeekCtlr = this.signupForm.get('numOfChilds');

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private store: Store<InscriptionReducer.InscriptionState>
  ) {
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
  }

  ngOnInit(): void {
    this.weekVMs$ = this.reservationService.getWeekVMs(2022);
  }

  createWeeklyReservation(week: Week, reservations: number): WeeklyReservation {
    return {
      week: week,
      numberOfReservations: reservations,
    };
  }

  goToNextStep(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

    if (this.signupForm.invalid) {
      this.submitted = true;
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
        state: 'temporary',
      };

      this.reservationSubscription = this.reservationService
        .insertOneSubscription(subscriptionInsertInput)
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
            .subscribe((sumChildsPerState) => {
              sumChildsPerState.map(
                (p) => (sumParticipants += p.sumPerStateAndWeek)
              );

              let places: number[] = [];
              for (
                let i =
                  sumParticipants - weeklyReservation.numberOfReservations + 1;
                i <= sumParticipants;
                i++
              ) {
                places.push(i);
              }

              this.store.dispatch(
                InscriptionActions.setPlaces({ places: places })
              );
            });

          this.router
            .navigate(['/inscriptions/inscription', inscription._id])
            .then((x) => {
              this.reservationSubscription?.unsubscribe();
            });
        });
    }
  }

  goToPreviousStep() {
    this.router.navigate(['/welcome']).then((x) => {
      this.reservationSubscription?.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    this.reservationSubscription?.unsubscribe();
  }
}
