import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as ReservationActions from '../state/reservation.action';
import * as ReservationReducer from '../state/reservation.reducer';
import { WeeklyReservation } from 'src/app/models/Week';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnDestroy {
  title = 'RESERVATION';

  maxWeeks: number = 1;
  maxReservations: number = 1;

  reservationSubscription: Subscription;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private store: Store<ReservationReducer.State>
  ) {
    this.maxWeeks = +process.env.MAX_NUMBER_OF_WEEKS!;
    this.maxReservations = +process.env.MAX_NUMBER_OF_RESERVATIONS!;
  }

  signupForm = this.fb.group({
    numOfChilds: [0, [Validators.required, Validators.min(1)]],
  });

  reservationsPerWeekCtlr = this.signupForm.get('numOfChilds');

  createWeeklyReservation(
    week: number,
    reservations: number
  ): WeeklyReservation {
    return {
      weekNr: week,
      numberOfReservations: reservations,
    };
  }

  changeReservation(weekNumber: number, numberOfChildren: number): void {
    const weeklyReservation: WeeklyReservation = {
      weekNr: weekNumber,
      numberOfReservations: numberOfChildren,
    };
    this.store.dispatch(
      ReservationActions.setWeeklyReservation({ weeklyReservation })
    );
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

      let param: Record<string, any> = {
        subscriptionInsertInput: {
          deadline,
          numOfChildren: weeklyReservation.numberOfReservations,
          reservationDate: new Date(),
          state: 'temporary',
          week: weeklyReservation.weekNr,
        },
      };

      this.reservationSubscription = this.reservationService
        .createWeeklyReservation(param)
        .subscribe((inscriptionId: string) => {
          this.store.dispatch(ReservationActions.setDeadline({ deadline }));
          this.router
            .navigate(['/inscriptions/inscription', inscriptionId])
            .then((x) => {
              this.reservationSubscription.unsubscribe();
            });
        });
    }
  }

  goToPreviousStep() {
    this.router.navigate(['welcome']).then((x) => {
      this.reservationSubscription.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    this.reservationSubscription.unsubscribe();
  }
}
