import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { ApolloService } from 'src/app/service/apollo.service';
import { ChildsPerState, InsertOneParticipant, InsertOneParticipantData, ReservationState } from '../subscription/Subscriptor';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  signupForm!: FormGroup;
  childsPerStates$: Observable<ChildsPerState[]> | undefined

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.'
  };

  constructor(private fb: FormBuilder, private apolloService: ApolloService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      weekNr: [0, [Validators.required, Validators.min(1)]],
      numOfChilds: [0, [Validators.required, Validators.min(1)]],
    });

    var weeklyBookings: {[week: number]: ReservationState[] } = {};

    this.apolloService.GetReservationsPerWeek()
      .subscribe(childsPerStates => childsPerStates.map(
        childsPerState => {

          // const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
          const regexp = /\[\[\{state ([a-z]*)\}\] \[\{week ([1-3])\}\]\]/;
          console.log(childsPerState._id);
          const match = childsPerState._id.match(regexp);
          if (match) {
            var week:number = +match[2];
            var reservationState = { state: match[1], numOfChildren: +childsPerState.sumPerStateAndWeek };
            if (weeklyBookings){
              if (!weeklyBookings[week]){
                weeklyBookings[week] = [];
              } else {
                weeklyBookings[week].push(reservationState);
              }
            }
          }
          console.log(JSON.stringify(weeklyBookings));
        }
      )
      )
  }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

    const week = this.signupForm.get('weekNr');
    const numOfChildren = this.signupForm.get('numOfChilds');

    this.apolloService.InsertParticipant(week?.value, numOfChildren?.value)
      .subscribe((res: InsertOneParticipant) => {
        this.router.navigate(['/subscription/' + res._id]);
      });
  }

  setMessage(c: AbstractControl): string {
    var messageString = '';
    if ((c.touched || c.dirty) && c.errors) {
      messageString = Object.keys(c.errors).map(
        key => hasKey(this.validationMessages, key) ? this.validationMessages[key] : 'unknown error').join(' ');
    }
    return messageString;
  }
}
