import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, scan, takeWhile } from 'rxjs/operators';
import { SubscriptionService } from '../../../service/subscription.service';

import * as SubscriptionReducer from '../state/subscription.reducer'
import * as ReservationReducer from '../../reservations/state/reservation.reducer';

import * as SubscriptionActions from '../state/subscription.actions'
import { insertOneSubscription } from 'src/app/models/Subscriptor';
import { Observable, timer } from 'rxjs';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (emailControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  id: string | null = '0';
  week: string | null = '0';
  numOfChilds: number | null = 0;
  timer$: Observable<number> | undefined;

  addresses: string | undefined;

  signupForm!: FormGroup;
  yes = true;
  emailMessage: string = '';
  confirmEmailMessage: string = '';

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.'
  };

  get childs(): FormArray {
    return <FormArray>(this.signupForm.get('childs'));
  }

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<SubscriptionReducer.State>) { }

  ngOnInit(): void {
    const nowInS = new Date().getTime();
    this.store.select(ReservationReducer.getDeadline).subscribe( // ToDo LIW : unsubscribe
      deadline => {
       // this.deadlineM = (deadline.getMinutes()- new Date().getMinutes());
        this.timer$ = timer(0, 60000).pipe(
          scan(acc => --acc, Math.trunc((deadline.getTime() - nowInS) / 1000 / 60)),
          takeWhile(x => x >= 0)
        );
      }
    );

    this.signupForm = this.fb.group({
      salutation: '',
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      street1: '',
      street2: '',
      city: '',
      state: 'temporary',
      zip: '',
      participants:[],
      externalUserId: ''
    });

    const emailControl = this.signupForm.get('emailGroup.email');
    emailControl?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.emailMessage = this.setMessage(emailControl)
    );

    this.id = this.route.snapshot.paramMap.get('id');
    this.week = this.route.snapshot.paramMap.get('week');
    let numOfChildsStr = this.route.snapshot.paramMap.get('numOfChilds');
  }

  next(): void {
    if (this.week && this.id) {

      const subscription = { subscription: this.signupForm.value };

      this.subscriptionService.updateSubscription(this.id, subscription.subscription)
        .subscribe((res: insertOneSubscription) => {
          this.store.dispatch(SubscriptionActions.setSubscription(subscription));
          this.router.navigate(['/participant', 1]);
      });
    }
  }

  setMessage(c: AbstractControl): string {
    var messageString = '';
    if ((c.touched || c.dirty) && c.errors) {
      messageString = Object.keys(c.errors).map(
        key => hasKey(this.validationMessages, key)
          ? this.validationMessages[key]
          : 'unknown error').join(' ');
    }
    return messageString;
  }
}
