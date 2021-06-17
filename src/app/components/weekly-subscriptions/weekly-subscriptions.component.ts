import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { ApolloService } from 'src/app/service/apollo.service';
import { ChildsPerState, InsertOneParticipant, InsertOneParticipantData, ReservationState } from '../subscription/Subscriptor';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

@Component({
  selector: 'app-weekly-subscriptions',
  templateUrl: './weekly-subscriptions.component.html',
  styleUrls: ['./weekly-subscriptions.component.scss']
})
export class WeeklySubscriptionsComponent implements OnInit {

  @Input()week: number = 0;

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
      numOfChilds: [0, [Validators.required, Validators.min(1)]],
    });

    this.childsPerStates$ =  this.apolloService.GetReservationsPerWeek(this.week)
      .pipe(
          map( childsPerStates =>  {
            return childsPerStates;
          }
        )
      )
    }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

   // const week = this.signupForm.get('weekNr');
    const numOfChildren = this.signupForm.get('numOfChilds');

    this.apolloService.InsertParticipant(this.week, numOfChildren?.value)
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
