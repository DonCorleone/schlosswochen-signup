import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import {debounceTime, map, tap} from 'rxjs/operators';

import { SubscriptionService } from '../../../service/subscription.service';
import * as UserReducer from '../../user/state/user.reducer';
import * as SubscriptionReducer from '../state/subscription.reducer';
import * as SubscriptionActions from '../state/subscription.actions';
import * as graphqlModels from '../../../models/Graphqlx';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just :  raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit, OnDestroy {
  title = 'Contact';

  inscription: graphqlModels.Subscription;
  addresses: string | undefined;
  signupForm!: FormGroup;
  emailMessage: string = '';
  confirmEmailMessage: string = '';
  isEditMode = false;
  errorMessage = '';

  private validationMessages = {
    email: 'Please enter a valid email address.',
  };

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<SubscriptionReducer.State>
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      _id: '',
      salutation: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      street1: '',
      street2: '',
      city: ['', [Validators.required]],
      state: 'temporary',
      zip: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(5)],
      ],
      country: ['Switzerland', [Validators.required]],
      participants: [],
      externalUserId: '',
    });

    const emailControl = this.signupForm.get('email');
    emailControl?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(
        (value) => (this.emailMessage = this.setMessage(emailControl))
      );

    this.store.select(UserReducer.getCurrentUser).subscribe((externalUser) => {
      let externalUserId = '';
      let id = '';

      this.route.url.subscribe((urlSegment) => {

        this.isEditMode = urlSegment.length == 0;

        if (this.isEditMode) {
          externalUserId = externalUser?.profile?.sub;
        }

        this.route.params.subscribe((params) => {
          id = params['id'];

          if (externalUserId?.length > 0 || id?.length > 0)
          this.subscriptionService
            .getInscription(externalUserId, id)
            .subscribe({
              next: (subscription: graphqlModels.Subscription) =>
                this.displaySubscription(subscription),
              error: (err) => (this.errorMessage = err),
            });
        });
      });
    });
  }

  goToPreviousStep() {
    //  this.router.navigate(['personal']);
  }

  goToNextStep(): void {
    if (this.signupForm.invalid) {
      // this.submitted = true;
      return;
    }

    const subscription = { subscription: this.signupForm.value };
    this.subscriptionService
      .updateSubscription(subscription.subscription._id, subscription.subscription)
      .subscribe((res: string) => {
        this.store.dispatch(
          SubscriptionActions.setSubscription(subscription)
        );
        this.router.navigate(['/participant', 1]);
      });
  }

  setMessage(c: AbstractControl): string {
    var messageString = '';
    if ((c.touched || c.dirty) && c.errors) {
      messageString = Object.keys(c.errors)
        .map((key) =>
          hasKey(this.validationMessages, key)
            ? this.validationMessages[key]
            : 'unknown error'
        )
        .join(' ');
    }
    return messageString;
  }

  ngOnDestroy(): void {}

  private displaySubscription(inscription: graphqlModels.Subscription) {
    if (this.signupForm) {
      this.signupForm.reset();
    }

    this.inscription = inscription;

    this.signupForm.patchValue({
      _id: inscription._id,
      salutation: inscription.salutation,
      firstName: inscription.firstName,
      lastName: inscription.lastName,
      email: inscription.email,
      phone: inscription.phone,
      street1: inscription.street1,
      street2: inscription.street2,
      city: inscription.city,
      state: inscription.state,
      zip: inscription.zip,
      country: inscription.country,
      externalUserId: inscription.externalUserId,
    });
  }
}
