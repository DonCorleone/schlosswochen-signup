import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Week, WeeklyReservation } from 'src/app/models/Week';
import { ApolloService } from 'src/app/service/apollo.service';
import { ChildsPerState, insertOneSubscription } from '../../models/Subscriptor';
import { reservationReducer, ReservationState } from '../state/reservation.reducer';
import * as ReservationActions from '../state/reservation.action';
import * as ReservationSelectors from '../state/reservation.selector';

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

  weeklyReservations$?: Observable<WeeklyReservation[]>;

  signupForm!: FormGroup;

  numberOfChildren$?: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private apolloService: ApolloService,
    private router: Router,
    private store: Store<ReservationState>) { }

  ngOnInit(): void {

    // filling up Observable array dynamically
    var weeklyReservations: WeeklyReservation[] = [];

    for (var w = 1; w <= this.maxWeeks; w++) {
      for (var r = 1; r <= this.maxReservations; r++) {
        weeklyReservations.push({
          weeknr:w,
          numberOfReservations:r
        });

        this.weeklyReservations$ = of(weeklyReservations);
      }
    }

    this.numberOfChildren$ =
      this.store.select(ReservationSelectors.getNumberOfChildren).
        pipe(numberOfChildren => this.numberOfChildren$ = numberOfChildren);

    this.signupForm = this.fb.group({
      numOfChilds: [0, [Validators.required, Validators.min(1)]],
    });


  }

  changeNumberOfChildren (weeklyReservation: WeeklyReservation):void{
    this.store.dispatch(
      ReservationActions.setNumberOfChildren(
        {numberOfChildren: weeklyReservation.numberOfReservations}
      )
    );
  }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

    // const week = this.signupForm.get('weekNr');
    const weeklyReservationControl = this.signupForm.get('numOfChilds');

    if (weeklyReservationControl) {

      // week: week,
      let weeklyReservation:WeeklyReservation= weeklyReservationControl?.value;
      // reservationDate: new Date(),
      // deadline: new Date(new Date().getTime() + ((10 + (numChildren*5))) * 60 * 1000),

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
          this.router.navigate(['/inscription', res._id, weeklyReservation.weeknr, weeklyReservation.numberOfReservations, deadlineMs]);
        });
    }
  }
}
