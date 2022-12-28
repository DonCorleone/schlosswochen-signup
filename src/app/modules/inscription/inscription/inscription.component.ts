import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  combineLatest,
  debounceTime,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { InscriptionsService } from '../../../service/inscriptions.service';
import { Subscription as Inscription } from 'netlify/models/Graphqlx';
import * as AuthSelector from '../../user/state/auth.selectors';
import { ReservationService } from '../../../service/reservation.service';
import { LoadingIndicatorService } from '../../../service/loading-indicator.service';
import { WeeksService } from '../../../service/weeks.service';
import { AppState } from '../../../shared/store/appState';
import { selectAppState } from '../../../shared/store/app.selector';
import { setAPIStatus } from '../../../shared/store/app.action';
import {
  increaseCurrentParticipantNumber,
  invokeInscriptionAPI,
  invokeUpdateInscriptionAPI,
  resetCurrentParticipantNumber,
} from '../../reservations/state/reservation.action';
import { selectWeeks } from '../../reservations/state/reservation.selector';

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
  year: number;
  firstNameRequired = 'CONTACT.FIRSTNAMEREQUIRED';
  lastNameRequired = 'CONTACT.LASTNAMEREQUIRED';
  streetRequired = 'CONTACT.STREETREQUIRED';
  streetTwo = 'CONTACT.STREETTWO';
  zipRequired = 'CONTACT.ZIPREQUIRED';
  cityRequired = 'CONTACT.CITYREQUIRED';
  emailRequired = 'CONTACT.EMAILREQUIRED';
  phoneRequired = 'CONTACT.PHONEREQUIRED';
  countryRequired = 'CONTACT.COUNTRYREQUIRED';

  signupForm!: UntypedFormGroup;
  emailMessage: string = '';
  confirmEmailMessage: string = '';
  isEditMode = false;
  errorMessage = '';

  inscription$ = this.store.pipe(select(selectWeeks));

  private validationMessages = {
    email: 'Please enter a valid email address.',
  };

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private fb: UntypedFormBuilder,
    private inscriptionService: InscriptionsService,
    private weekService: WeeksService,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private appStore: Store<AppState>,
    private loadingIndicatorService: LoadingIndicatorService
  ) {
    this.year = process?.env?.UPCOMING_YEAR ? +process?.env?.UPCOMING_YEAR : 0;
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      _id: '',
      numOfChildren: 0,
      reservationDate: new Date(),
      deadline: new Date(),
      week: 0,
      salutation: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
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
      children: [],
      externalUserId: '',
    });

    const emailControl = this.signupForm.get('email');
    emailControl?.valueChanges
      .pipe(debounceTime(1000), takeUntil(this._ngDestroy$))
      .subscribe((_) => (this.emailMessage = this.setMessage(emailControl)));

    this.store.dispatch(resetCurrentParticipantNumber());
    this.store.dispatch(invokeInscriptionAPI());

    combineLatest([
      this.store.pipe(select(AuthSelector.selectCurrentUserProfile)),
      this.inscription$,
    ])
      .pipe(
        takeUntil(this._ngDestroy$),
        tap(([externalUser, inscription]) => {
          /*          if (externalUser?.sub?.length > 0 || inscription) {
            this.inscriptionService
              .getInscription$(
                externalUser?.sub,
                inscription.inscription,
                inscription.inscription.state
                  ? (<any>ReservationState)[inscription.inscription.state!]
                  : ReservationState.TEMPORARY
              )
              .pipe(take(1))
              .subscribe({
                next: (inscription: Inscription) => {
                  if (!inscription) {
                    this.inscriptionService
                      .getInscription$(
                        '',
                        inscription,
                        ReservationState.TEMPORARY
                      )
                      .pipe(take(1))
                      .subscribe((x) => (inscription = x));
                  }*/

          /*                  if (externalUser) {
                    this.weekService
                      .getWeeks(this.year)
                      .pipe(
                        map((weeks) => {
                          const inscriptionsWeek = weeks.find(
                            (week) => week.week === inscription?.week
                          );
                          if (inscriptionsWeek) {
                            this.store.dispatch(
                              InscriptionActions.setWeek({
                                week: inscriptionsWeek,
                              })
                            );
                          }

                          this.store.dispatch(
                            InscriptionActions.setInscription({ inscription })
                          );
                        }),
                        take(1)
                      )
                      .subscribe(),
                      take(1);
                  }*/

          this.displayInscription(inscription.inscription);
          /*                },
                error: (err) => (this.errorMessage = err),
              });
          }*/
        })
      )
      .subscribe();
  }

  goToPreviousStep() {
    console.log('InscriptionComponent goToPreviousStep');
  }

  goToNextStep(): void {
    if (this.signupForm.invalid) {
      this.displayValidations();
      return;
    }

    if (!this.signupForm.dirty) {
      this.goToParticipantsView();
      return;
    }

    this.update();

    return;

    /*    this.inscriptionService
      .updateOneSubscription(subscriptionQueryInput, inscriptionUpdateInput)
      .pipe(take(1))
      .subscribe((inscription: Inscription) => {
        this.store.dispatch(
          InscriptionActions.setInscription({
            inscription: inscription,
          })
        );
        this.store.dispatch(
          InscriptionActions.increaseCurrentParticipantNumber()
        );
        this.router.navigate(['/inscriptions/participant']).then((x) => {
          console.log('InscriptionComponent goToNextStep');
        });
      });*/
  }

  update() {
    this.store.dispatch(
      invokeUpdateInscriptionAPI({
        updateInscription: { ...this.signupForm.value },
      })
    );

    this.appStore
      .pipe(select(selectAppState), takeUntil(this._ngDestroy$))
      .subscribe((apState) => {
        if (apState.apiStatus == 'success') {
          this.appStore.dispatch(
            setAPIStatus({
              apiStatus: { apiResponseMessage: '', apiStatus: '' },
            })
          );

          this.goToParticipantsView();
        }
      });
  }

  private goToParticipantsView() {
    this.loadingIndicatorService.stop();
    this.store.dispatch(increaseCurrentParticipantNumber());
    this.router.navigate(['/inscriptions/participant']).then((x) => {
      console.log(`InscriptionComponent goToNextStep: ${x}`);
    });
  }

  private displayValidations() {
    this.loadingIndicatorService.stop();
    Object.keys(this.signupForm.controls).forEach((field) => {
      // {1}
      const control = this.signupForm.get(field); // {2}
      control?.markAsTouched({ onlySelf: true }); // {3}
    });
    return;
  }

  setMessage(c: AbstractControl): string {
    let messageString = '';
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

  ngOnDestroy(): void {
    console.log('InscriptionComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
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
      children: inscription.children,
    });
  }
}
