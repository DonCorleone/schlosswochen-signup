import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApolloService } from 'src/app/service/apollo.service';
import { week } from '../init/init.component';
import { ChildsPerState, insertOneSubscription } from '../subscription/Subscriptor';

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

  @Input()week: week | undefined;

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

    if (this.week) {
      this.childsPerStates$ =  this.apolloService.GetReservationsPerWeek(this.week?.weeknr)
      .pipe(
          tap( returnz => { console.log(JSON.stringify(returnz)) }),
          map( returnz =>  {
            return returnz;
          }
        )
      )
    }
  }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));

   // const week = this.signupForm.get('weekNr');
    const numOfChildren = this.signupForm.get('numOfChilds');

    if (this.week) {
      this.apolloService.InsertParticipant(this.week.weeknr, numOfChildren?.value)
      .subscribe((res: insertOneSubscription) => {
        this.router.navigate(['/subscription', res._id, this.week?.weeknr, numOfChildren?.value]);
      });
    }
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
