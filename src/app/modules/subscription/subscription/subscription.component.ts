import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

import { debounceTime } from 'rxjs/operators';

import { SubscriptionService } from '../../../service/subscription.service';
import * as SubscriptionReducer from '../state/subscription.reducer'
import * as SubscriptionActions from '../state/subscription.actions'
import { insertOneSubscription } from 'src/app/models/Subscriptor';

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

  title = 'Contact';
  id: string | null = '0';
  addresses: string | undefined;
  signupForm!: FormGroup;
  emailMessage: string = '';
  confirmEmailMessage: string = '';

  private validationMessages = {
    email: 'Please enter a valid email address.'
  };

  // model = { email: 'email@gmail.com' };
  // options: FormlyFormOptions = {};
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'email',
  //     type: 'input',
  //     wrappers: ['row'],
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   }
  // ];

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<SubscriptionReducer.State>) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      salutation: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      street1: '',
      street2: '',
      city: ['', [Validators.required]],
      state: 'temporary',
      zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]],
      country: ['Switzerland', [Validators.required]],
      participants:[],
      externalUserId: ''
    });


    const emailControl = this.signupForm.get('email');
    emailControl?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.emailMessage = this.setMessage(emailControl)
    );

    this.id = this.route.snapshot.paramMap.get('id');
  }
 // goToNextStep() {
    // if (this.addressForm.invalid) {
    //   this.submitted = true;
    //   return;
    // }

   // this.router.navigate(['experience']);
 // }

  goToPreviousStep() {
  //  this.router.navigate(['personal']);
  }
  goToNextStep(): void {

    if (this.signupForm.invalid) {
     // this.submitted = true;
      return;
    }

    if (this.id) {

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
