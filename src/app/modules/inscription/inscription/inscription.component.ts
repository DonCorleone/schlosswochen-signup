import { Component, OnInit } from '@angular/core';
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
import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import * as ReservationActions from '../../reservations/state/reservation.action';
import { WeeklyReservation } from '../../../models/Week';
import {
  Subscription as Inscription,
  Participant,
  SubscriptionParticipantsRelationInput,
  SubscriptionUpdateInput,
} from 'src/app/models/Graphqlx';
import * as AuthSelector from '../../user/state/auth.selectors';
import { combineLatest } from 'rxjs';

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
export class InscriptionComponent implements OnInit {
  title = 'CONTACT';

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
    private inscriptionService: InscriptionsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<InscriptionReducer.InscriptionState>
  ) {}

  ngOnInit(): void {

    this.store.dispatch(InscriptionActions.resetCurrentParticipantNumber());

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


    combineLatest([
      this.store.select(AuthSelector.selectCurrentUserProfile),
      this.route.params,
    ])
      .pipe(
        tap(([externalUser, params]) =>
          {
            let id = params['id'];

            if (externalUser?.sub?.length > 0 || id?.length > 0) {
              this.inscriptionService
                .getInscription$(externalUser?.sub, id)
                .subscribe({
                  next: (inscription: Inscription) => {
                    if (externalUser) {
                      const weeklyReservation: WeeklyReservation = {
                        weekNr: inscription.week!,
                        numberOfReservations: inscription.numOfChildren!,
                      };

                      this.store.dispatch(
                        ReservationActions.setWeeklyReservation({
                          weeklyReservation,
                        })
                      );

                      this.store.dispatch(
                        InscriptionActions.setInscription({ inscription })
                      );
                    }

                    this.displayInscription(inscription);
                  },
                  error: (err) => (this.errorMessage = err),
                });
            }

          }
        )
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
      this.store.dispatch(InscriptionActions.increaseCurrentParticipantNumber());
      this.router.navigate(['/inscriptions/participant']).then();
      return;
    }
    const inscription = { inscription: this.signupForm.value };
    let inscriptionUpdateObj: SubscriptionUpdateInput = {
      ...inscription.inscription,
    };

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
    inscriptionUpdateObj.participants = participantsUpdateObj;

    this.inscriptionService
      .updateInscription(inscription.inscription._id, inscriptionUpdateObj)
      .subscribe((res: string) => {
        this.store.dispatch(
          InscriptionActions.setInscription({
            inscription: inscription.inscription,
          })
        );
        this.store.dispatch(InscriptionActions.increaseCurrentParticipantNumber());
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
}
