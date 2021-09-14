import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ApolloService } from 'src/app/service/apollo.service';
import { insertOneSubscription } from '../../models/Subscriptor';
import { ReservationState } from '../state/reservation.reducer';
import * as ReservationActions from '../state/reservation.action';
import * as ReservationSelectors from '../state/reservation.selector';
import { WeeklyReservation } from 'src/app/models/Week';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

@Component({
  selector: 'app-weekly-reservation',
  templateUrl: './weekly-reservation.component.html',
  styleUrls: ['./weekly-reservation.component.scss']
})
export class WeeklyReservationComponent implements OnInit {

  @Input() maxWeeks: number = 1;
  @Input() maxReservations: number = 1;

  signupForm!: FormGroup;

  // numberOfChildren$?: Observable<number>;
  reservations$?: Observable<number[]>;
  weeks$?: Observable<number[]>;
  weeklyReservation$?: Observable<WeeklyReservation>;

  constructor(
    private fb: FormBuilder,
    private apolloService: ApolloService,
    private router: Router,
    private store: Store<ReservationState>) { }

  ngOnInit(): void {

    // filling up Observable array dynamically


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

    // this.numberOfChildren$ =
    //   this.store.select(getNumberOfChildren).
    //     pipe(numberOfChildren => this.numberOfChildren$ = numberOfChildren);

    this.signupForm = this.fb.group({
      numOfChilds: [0, [Validators.required, Validators.min(1)]],
    });

    this.weeklyReservation$ = this.store.select(ReservationSelectors.getWeeklyReservation).pipe(
      weeklyReservation => {
        return weeklyReservation;
      }
    );

    this.weeklyReservation$.subscribe(
      weeklyReservation => {
        if (weeklyReservation.numberOfReservations > 0 && weeklyReservation.weeknr > 0) {
         // this.signupForm.controls.numOfChilds.setValue(weeklyReservation);
        }
      }
    );

  //
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

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

    const weeklyReservationControl = this.signupForm.get('numOfChilds');

    if (weeklyReservationControl) {

      let weeklyReservation: WeeklyReservation = weeklyReservationControl?.value;
      let deadlineMs = ((5 + (weeklyReservation.numberOfReservations * 3))) * 60 * 1000;
      let param: Record<string, any> = {
        subscriptionInsertInput: {
          deadline: new Date(new Date().getTime() + deadlineMs),
          numOfChildren: weeklyReservation.numberOfReservations,
          reservationDate: new Date(),
          state: "Reservation",
          week: weeklyReservation.weeknr
        }
      };

      this.apolloService.InsertParticipant(param)
        .subscribe((res: insertOneSubscription) => {
          this.store.dispatch(ReservationActions.setSubscriptionId({ subscriptionId: res._id}));
          this.router.navigate(['/inscriptions', res._id, weeklyReservation.weeknr, weeklyReservation.numberOfReservations, deadlineMs]);
        });
    }
  }
}
