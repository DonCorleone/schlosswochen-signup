import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { week } from 'src/app/models/Week';
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

  @Input() week: week | undefined;

  signupForm!: FormGroup;

  numberOfChildren$?: Observable<Number>;

  constructor(
    private fb: FormBuilder,
    private apolloService: ApolloService,
    private router: Router,
    private store: Store<ReservationState>) { }

  ngOnInit(): void {

    this.numberOfChildren$ =
      this.store.select(ReservationSelectors.getNumberOfChildren).
        pipe(numberOfChildren => this.numberOfChildren$ = numberOfChildren);

    this.signupForm = this.fb.group({
      numOfChilds: [0, [Validators.required, Validators.min(1)]],
    });


  }

  changeNumberOfChildren (numberOfChildren: number):void{
    this.store.dispatch(ReservationActions.setNumberOfChildren({numberOfChildren}));
  }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

    // const week = this.signupForm.get('weekNr');
    const numOfChilds = this.signupForm.get('numOfChilds');

    if (this.week) {

      // week: week,
      let numOfChildren = numOfChilds?.value;
      // reservationDate: new Date(),
      // deadline: new Date(new Date().getTime() + ((10 + (numChildren*5))) * 60 * 1000),

      let deadlineMs = ((5 + (numOfChildren * 3))) * 60 * 1000;
      let param: Record<string, any> = {
        subscriptionInsertInput: {
          deadline: new Date(new Date().getTime() + deadlineMs),
          numOfChildren: numOfChildren,
          reservationDate: new Date(),
          state: "Reservation",
          week: this.week.weeknr
        }
      };


      this.apolloService.InsertParticipant(param)
        .subscribe((res: insertOneSubscription) => {
          this.router.navigate(['/inscription', res._id, this.week?.weeknr, numOfChildren, deadlineMs]);
        });
    }
  }
}
