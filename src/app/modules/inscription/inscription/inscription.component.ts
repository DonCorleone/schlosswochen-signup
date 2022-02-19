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

import { debounceTime, filter, map, tap } from 'rxjs/operators';

import { InscriptionsService } from '../../../service/inscriptions.service';
import * as InscriptionReducer from '../state/inscription.reducer';
import * as InscriptionActions from '../state/inscription.actions';
import { WeeklyReservation } from '../../../models/Week';
import {
  Subscription as Inscription,
  Participant,
  SubscriptionParticipantsRelationInput,
  SubscriptionUpdateInput,
  SubscriptionInsertInput,
  SubscriptionQueryInput,
} from 'src/app/models/Graphqlx';
import * as AuthSelector from '../../user/state/auth.selectors';
import { combineLatest, Subscription } from 'rxjs';
import { ReservationService } from '../../../service/reservation.service';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just :  raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit, OnDestroy {
  title = 'CONTACT.TITLE';
  firstNameRequired = 'CONTACT.FIRSTNAMEREQUIRED';
  lastNameRequired = 'CONTACT.LASTNAMEREQUIRED';
  streetRequired = 'CONTACT.STREETREQUIRED';
  streetTwo = 'CONTACT.STREETTWO'
  zipRequired = 'CONTACT.ZIPREQUIRED';
  cityRequired = 'CONTACT.CITYREQUIRED';
  emailRequired = 'CONTACT.EMAILREQUIRED';
  phoneRequired = 'CONTACT.PHONEREQUIRED';
  countryRequired = 'CONTACT.COUNTRYREQUIRED';

  signupForm!: FormGroup;
  emailMessage: string = '';
  confirmEmailMessage: string = '';
  isEditMode = false;
  errorMessage = '';

  private validationMessages = {
    email: 'Please enter a valid email address.',
  };
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private inscriptionService: InscriptionsService,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<InscriptionReducer.InscriptionState>
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      _id: '',
      numOfChildren: 0,
      reservationDate: new Date(),
      deadline: new Date(),
      week: 0,
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

    this.store.dispatch(InscriptionActions.resetCurrentParticipantNumber());
    combineLatest([
      this.store.select(AuthSelector.selectCurrentUserProfile),
      this.store.select(InscriptionReducer.getInscription),
      this.route.params,
    ])
      .pipe(
        tap(([externalUser, inscription, params]) => {
          if (externalUser?.sub?.length > 0 || inscription) {
            this.inscriptionService
              .getInscription$(externalUser?.sub, inscription)
              .subscribe({
                next: (inscription: Inscription) => {
                  if (!inscription) {
                    this.inscriptionService
                      .getInscription$('', inscription)
                      .subscribe((x) => (inscription = x));
                  }

                  if (externalUser) {
                    const weeklyReservation: WeeklyReservation = {
                      weekNr: inscription?.week!,
                      numberOfReservations: inscription?.numOfChildren!,
                    };

                    this.store.dispatch(
                      InscriptionActions.setInscription({ inscription })
                    );
                  }

                  this.displayInscription(inscription);
                },
                error: (err) => (this.errorMessage = err),
              });
          }
        })
      )
      .subscribe();
  }

  goToPreviousStep() {
    //  this.router.navigate(['personal']);
  }

  goToNextStep(): void {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach((field) => {
        // {1}
        const control = this.signupForm.get(field); // {2}
        control?.markAsTouched({ onlySelf: true }); // {3}
      });
      return;
    }

    if (!this.signupForm.dirty) {
      this.store.dispatch(
        InscriptionActions.increaseCurrentParticipantNumber()
      );
      this.router.navigate(['/inscriptions/participant']).then();
      return;
    }

    let subscriptioUpdateInput: Partial<SubscriptionUpdateInput> = {
      ...this.signupForm.value,
    };

    let subscriptionQueryInput: Partial<SubscriptionQueryInput> = {
      _id: subscriptioUpdateInput._id,
    };
    const inscription = { inscription: this.signupForm.value };
    let participants: Participant[] = inscription.inscription.participants;
    let links: string[] = [];

    if (participants?.length > 0) {
      participants.forEach((x) => {
        links.push(x.participant_id!);
      });
    }
    let participantsUpdateObj: SubscriptionParticipantsRelationInput = {
      link: links,
    };
    subscriptioUpdateInput.participants = participantsUpdateObj;

    this.inscriptionService
      .updateOneSubscription(subscriptionQueryInput, subscriptioUpdateInput)
      .subscribe((inscription: Inscription) => {
        this.store.dispatch(
          InscriptionActions.setInscription({
            inscription: inscription,
          })
        );
        this.store.dispatch(
          InscriptionActions.increaseCurrentParticipantNumber()
        );
        this.router.navigate(['/inscriptions/participant']).then();
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

  private displayInscription(inscription: Inscription) {
    if (this.signupForm) {
      this.signupForm.reset();
    }

    this.signupForm.patchValue({
      _id: inscription._id,
      week: inscription.week,
      numOfChildren: inscription.numOfChildren,
      deadline: inscription.deadline,
      reservationDate: inscription.reservationDate,
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
      participants: inscription.participants,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
