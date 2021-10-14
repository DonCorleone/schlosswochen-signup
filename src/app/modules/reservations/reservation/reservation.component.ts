import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';

import * as ReservationActions from '../state/reservation.action';
import * as ReservationReducer from '../state/reservation.reducer';
import { WeeklyReservation } from 'src/app/models/Week';
import { ReservationService } from 'src/app/service/reservation.service';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  title = 'Reservation';

  maxWeeks: number = 1;
  maxReservations: number = 1;

  reservations$?: Observable<number[]>;
  weeks$?: Observable<number[]>;
  weeklyReservation$?: Observable<WeeklyReservation>;
  reservationSubscription: Subscription = new Subscription;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private store: Store<ReservationReducer.State>) {

      this.maxWeeks = +process.env.MAX_NUMBER_OF_WEEKS!;
      this.maxReservations = +process.env.MAX_NUMBER_OF_RESERVATIONS!;

    }

  signupForm = this.fb.group({
      numOfChilds: [0, [Validators.required, Validators.min(1)]],
  });

  reservationsPerWeekCtlr = this.signupForm.get('numOfChilds');

  ngOnInit(): void {

    var reservations: number[] = [];
    for (var r = 1; r <= this.maxReservations; r++) {
      reservations.push(r);
    }
    this.reservations$ = of(reservations);

    var weeks: number[] = [];
    for (var r = 1; r <= this.maxWeeks; r++) {
      weeks.push(r);
    }
    this.weeks$ = of(weeks);

    this.weeklyReservation$ = this.store.select(ReservationReducer.getWeeklyReservation).pipe(
      weeklyReservation => {
        return weeklyReservation;
      }
    );
  }

  createWeeklyReservation(week:number, reservations:number): WeeklyReservation{
    return {
      weeknr:week,
      numberOfReservations:reservations
    }
  }

  changeReservation (weekNumber:number, numberOfChildren:number):void{

    var weeklyReservation: WeeklyReservation = {
      weeknr: weekNumber,
      numberOfReservations: numberOfChildren
    };
    this.store.dispatch(
      ReservationActions.setWeeklyReservation(
        {weeklyReservation}
      )
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

      let weeklyReservation: WeeklyReservation = weeklyReservationControl?.value;
      let deadlineMs = ((5 + (weeklyReservation.numberOfReservations * 3))) * 60 * 1000;
      let deadline = new Date(new Date().getTime() + deadlineMs);

      let param: Record<string, any> = {
        subscriptionInsertInput: {
          deadline,
          numOfChildren: weeklyReservation.numberOfReservations,
          reservationDate: new Date(),
          state: "temporary",
          week: weeklyReservation.weeknr
        }
      };

      this.reservationSubscription = this.reservationService.createWeeklyReservation(param)
        .subscribe((subscriptionId: string) => {
          this.store.dispatch(ReservationActions.setSubscriptionId({ subscriptionId }));
          this.store.dispatch(ReservationActions.setDeadline({ deadline }));
          this.router.navigate(['/subscriptions', subscriptionId, weeklyReservation.weeknr, weeklyReservation.numberOfReservations, deadlineMs]);
        });
    }
  }

  // goToNextStep() {
    // if (this.addressForm.invalid) {
    //   this.submitted = true;
    //   return;
    // }

   // this.router.navigate(['experience']);
 // }

  goToPreviousStep() {
    this.router.navigate(['welcome']);
  }

  ngOnDestroy(): void {
    this.reservationSubscription.unsubscribe();
  }
}
