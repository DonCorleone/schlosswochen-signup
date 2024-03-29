import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  Subscription,
  Subscription as Inscription,
  SubscriptionChild,
  Week, Week_Capacity
} from "netlify/models/Graphqlx";
import { InscriptionsService } from 'src/app/service/inscriptions.service';
import { combineLatestWith, map, Observable, Subject, takeUntil } from 'rxjs';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ReservationState } from '../../../models/reservation-state';
import { LoadingIndicatorService } from '../../../service/loading-indicator.service';
import {
  decreaseCurrentParticipantNumber,
  increaseCurrentParticipantNumber,
  invokeUpdateInscriptionAPI,
  resetCurrentParticipantNumber,
  upsertChild,
} from '../../reservations/state/reservation.action';
import { selectAppState } from '../../../shared/store/app.selector';
import { setAPIStatus } from '../../../shared/store/app.action';
import { AppState } from '../../../shared/store/appState';
import {
  getCurrentParticipantNumber,
  getInscription,
  reservationSelector,
} from '../../reservations/state/reservation.selector';
import { EmailService } from '../../../service/email.service';
// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantComponent implements OnInit, OnDestroy {
  title = 'PARTICIPANT.TITLE';
  firstNameRequired = 'PARTICIPANT.FIRSTNAMEREQUIRED';
  lastNameRequired = 'PARTICIPANT.LASTNAMEREQUIRED';
  birthdayRequired = 'PARTICIPANT.BIRTHDAYREQUIRED';
  commentPh = 'PARTICIPANT.COMMENTPH';

  numOfChilds: number = 0;
  inscription!: Inscription;
  inscription$ = this.store.pipe(select(getInscription));
  signupForm!: UntypedFormGroup;
  currentParticipantNumber = 0;
  emailMessage: string = '';
  confirmEmailMessage: string = '';
  errorMessage = '';

  isSafari: boolean;
  FIRSTNAMEREQUIRED = 'PARTICIPANT.FIRSTNAMEREQUIRED';
  private _ngDestroy$ = new Subject<void>();
  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.',
  };
  private initDate = new Date();


  constructor(
    private untypedFormBuilder: UntypedFormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private store: Store,
    private appStore: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef,
    private inscriptionsService: InscriptionsService,
    private loadingIndicatorService: LoadingIndicatorService,

    private emailService: EmailService
  ) {
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  ngOnInit(): void {
    this.inscription$
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((inscriptionFromState) => {
        if (!inscriptionFromState) {
          return;
        }
        if (inscriptionFromState.numOfChildren) {
          this.numOfChilds = inscriptionFromState.numOfChildren;
        }

        this.inscription = inscriptionFromState;
        this.loadParticipantDetail(inscriptionFromState);
        this.changeDetectorRef.markForCheck();
      });
  }

  loadParticipantDetail(inscription: Subscription) {
    this.store
      .pipe(select(getCurrentParticipantNumber), takeUntil(this._ngDestroy$))
      .subscribe((currentParticipantNr) => {
        this.loadingIndicatorService.stop();
        this.currentParticipantNumber = currentParticipantNr;

        const participantId: string = `${inscription._id}-${+currentParticipantNr}`;

        this.signupForm = this.untypedFormBuilder.group({
          salutation: ['', [Validators.required]],
          firstNameParticipant: ['', [Validators.required]],
          lastNameParticipant: ['', [Validators.required]],
          birthday: [this.initDate, [Validators.required]],
          participant_id: participantId,
          externalUserId: '',
          fotoAllowed: [true, [Validators.required]],
          comment: '',
        });

        if (inscription?.children) {
          const participant = inscription?.children?.find(
            (p) => p?.participant_id === participantId
          );
          if (participant) {
            this.displayParticipant(participant);
          }
        }
      });
  }

  goToPreviousStep() {
    let child = this.getChild(false);
    if (child) {
      this.store.dispatch(upsertChild({ child }));

      if (this.currentParticipantNumber <= 1) {
        this.router.navigate(['/inscriptions/inscription']).then((x) => {
          console.log(
            `ParticipantComponent navigate /inscriptions/inscription: ${x}`
          );
        });
      } else {
        this.store.dispatch(decreaseCurrentParticipantNumber());
        this.router.navigate(['/inscriptions/participant']).then((x) => {
          console.log(
            `ParticipantComponent navigate /inscriptions/participant: ${x}`
          );
        });
      }
    }
    return;
  }

  goToNextStep(): void {
    if (this.manageValidity() == false) {
      return;
    }

    if (this.manageDirtiness() == false) {
      return;
    }

    const child = this.getChild(true);
    if (child) {
      this.saveChild(child, false);
    }
  }

  goToSaveStep(): void {
    if (this.signupForm.invalid || !this.signupForm.valid) {
      Object.keys(this.signupForm.controls).forEach((field) => {
        // {1}
        const control = this.signupForm.get(field); // {2}
        control?.markAsTouched({ onlySelf: true }); // {3}
      });
      this.loadingIndicatorService.stop();
      return;
    }

    if (this.signupForm.dirty) {
      const child = this.getChild(true);

      if (child) {
        this.saveChild(child, true);
      }
    } else {
      this.saveInscription();
    }
  }
  saveChild(subscriptionChild: SubscriptionChild, isSaveStep: boolean): void {
    this.store.dispatch(upsertChild({ child: subscriptionChild }));

    if (isSaveStep) {
      this.saveInscription();
    } else {
      this.store.dispatch(increaseCurrentParticipantNumber());
      this.router.navigate(['/inscriptions/participant']).then((x) => {
        console.log(
          `ParticipantComponent navigate /inscriptions/participant: ${x}`
        );
      });
    }
  }

  saveInscription() {
    const updateInscription: Inscription = {
      ...(this.inscription),
      state:
        this.inscription.state === ReservationState.TEMPORARY
          ? ReservationState.DEFINITIVE
          : ReservationState.DEFINITIVE_WAITINGLIST,
    };
    this.store.dispatch(
      invokeUpdateInscriptionAPI({
        updateInscription,
      })
    );

    const appState$ = this.appStore.pipe(select(selectAppState));

    const weekState$ = this.getWeek();

    // Combine the changes by adding them together
    appState$
      .pipe(
        takeUntil(this._ngDestroy$),
        combineLatestWith(weekState$),
        map(([appState, weekState]) => {
          if (appState.apiStatus == 'success') {

            const savedInscription = appState.data as Inscription;
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: '', data: undefined },
              })
            );

            if (!weekState?.week) {
              // Error!
              return;
            }
            this.emailService.writeMail(savedInscription, weekState);

            this.goToFinnishView();
          }
        })
      )
      .subscribe((x) => console.log(x));
  }
  getWeek(): Observable<Week_Capacity | undefined> {
    return this.store.pipe(select(reservationSelector)).pipe(
      map((state) => {
        return state.weeks.find((p) => p.week == state.inscription.week);
      })
    );
  }

  ngOnDestroy(): void {
    console.log('ParticipantComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
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
  private getChild(checkBirthday: boolean): SubscriptionChild | undefined {
    const birthday = new Date(this.signupForm.value.birthday);

    if (checkBirthday) {
      if (birthday.toDateString() == this.initDate.toDateString()) {
        this.signupForm.controls['birthday'].setErrors({ required: true });
        this.loadingIndicatorService.stop();
        return undefined;
      }
    }

    let child = {
      ...this.signupForm.value,
      birthday: birthday,
    };
    return child;
  }

  private displayParticipant(participant: SubscriptionChild) {
    if (this.signupForm) {
      this.signupForm.reset();
    }

    this.signupForm.patchValue({
      salutation: participant.salutation,
      firstNameParticipant: participant.firstNameParticipant,
      lastNameParticipant: participant.lastNameParticipant,
      participant_id: participant.participant_id,
      externalUserId: participant.externalUserId,
      fotoAllowed: participant.fotoAllowed,
      comment: participant.comment,
    });
    this.signupForm.controls['birthday'].setValue(
      formatDate(participant.birthday, 'yyyy-MM-dd', 'en')
    );
  }

  private goToFinnishView() {
    this.store.dispatch(resetCurrentParticipantNumber());
    this.router.navigate(['/inscriptions/finnish']).then();
  }

  private manageValidity(): boolean {
    if (this.signupForm.invalid || !this.signupForm.valid) {
      Object.keys(this.signupForm.controls).forEach((field) => {
        // {1}
        const control = this.signupForm.get(field); // {2}
        control?.markAsTouched({ onlySelf: true }); // {3}
      });
      this.loadingIndicatorService.stop();
      return false;
    }
    return true;
  }

  private manageDirtiness(): boolean {
    if (!this.signupForm.dirty) {
      this.store.dispatch(increaseCurrentParticipantNumber());
      this.router.navigate(['/inscriptions/participant']).then((x) => {
        console.log(
          `ParticipantComponent navigate /inscriptions/participant: ${x}`
        );
      });
      return false;
    }
    return true;
  }
}
