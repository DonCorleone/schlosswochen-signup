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
import { ParticipantService } from 'src/app/service/participant.service';
import {
  Subscription as Inscription,
  SubscriptionChild,
} from 'netlify/models/Graphqlx';
import { InscriptionsService } from 'src/app/service/inscriptions.service';
import {
  combineLatest,
  Observable,
  scan,
  Subject,
  takeUntil,
  takeWhile,
  timer,
} from 'rxjs';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ReservationState } from '../../../models/Interfaces';
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
  reservationSelector,
} from '../../reservations/state/reservation.selector';

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
  inscription$ = this.store.pipe(select(reservationSelector));

  timer$: Observable<number> | undefined;
  signupForm!: UntypedFormGroup;
  currentParticipantNumber = 0;
  emailMessage: string = '';
  confirmEmailMessage: string = '';
  errorMessage = '';
  FIRSTNAMEREQUIRED = 'PARTICIPANT.FIRSTNAMEREQUIRED';
  private _ngDestroy$ = new Subject<void>();
  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.',
  };
  private initDate = new Date();

  constructor(
    private fb: UntypedFormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private store: Store,
    private appStore: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef,
    private participantService: ParticipantService,
    private inscriptionsService: InscriptionsService,
    private loadingIndicatorService: LoadingIndicatorService
  ) {}

  ngOnInit(): void {
    const nowInS = new Date().getTime();

    combineLatest([this.inscription$, this.activeRoute.params])
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe(([inscription, routeParams]) => {
        if (!inscription) {
          return;
        }
        if (inscription?.inscription.numOfChildren) {
          this.numOfChilds = inscription.inscription.numOfChildren;
        }
        const deadline = new Date(inscription.inscription.deadline);
        this.timer$ = timer(0, 60000).pipe(
          scan(
            (acc) => --acc,
            Math.trunc((deadline.getTime() - nowInS) / 1000 / 60)
          ),
          takeWhile((x) => x >= 0)
        );

        this.inscription = inscription.inscription;

        this.loadParticipantDetail(inscription.inscription._id);
        this.changeDetectorRef.markForCheck();
      });
  }

  loadParticipantDetail(inscriptionId: string) {
    this.store
      .pipe(select(getCurrentParticipantNumber), takeUntil(this._ngDestroy$))
      .subscribe((currentParticipantNr) => {
        this.loadingIndicatorService.stop();
        this.currentParticipantNumber = currentParticipantNr;

        const participantId: string = `${inscriptionId}-${+currentParticipantNr}`;

        this.signupForm = this.fb.group({
          salutation: ['', [Validators.required]],
          firstNameParticipant: ['', [Validators.required]],
          lastNameParticipant: ['', [Validators.required]],
          birthday: [this.initDate, [Validators.required]],
          participant_id: participantId,
          externalUserId: '',
          fotoAllowed: [true, [Validators.required]],
          comment: '',
        });

        if (this.inscription?.children) {
          const participant = this.inscription?.children?.find(
            (p) => p?.participant_id === participantId
          );
          if (participant) {
            this.displayParticipant(participant);
          }
        }
      });
  }

  goToPreviousStep() {
    const birthday = new Date(this.signupForm.value.birthday);
    let child = {
      ...this.signupForm.value,
      birthday: birthday,
    };

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
    return;
  }

  goToNextStep(): void {
    if (this.manageValidity() == false) {
      return;
    }

    if (this.manageDirtiness() == false) {
      return;
    }

    const birthday = new Date(this.signupForm.value.birthday);

    if (birthday.toDateString() == this.initDate.toDateString()) {
      this.signupForm.controls['birthday'].setErrors({ required: true });
      this.loadingIndicatorService.stop();
      return;
    }

    let child = {
      ...this.signupForm.value,
      birthday: birthday,
    };

    this.saveParticipant(child, false);
  }

  saveParticipant(
    subscriptionChild: SubscriptionChild,
    isSaveStep: boolean
  ): void {
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

    const birthday = new Date(this.signupForm.value.birthday);

    if (birthday.toDateString() == this.initDate.toDateString()) {
      this.signupForm.controls['birthday'].setErrors({ required: true });
      this.loadingIndicatorService.stop();
      return;
    }

    if (this.signupForm.dirty) {
      let subscriptionChild: SubscriptionChild = {
        ...this.signupForm.value,
        birthday: birthday,
      };
      this.saveParticipant(subscriptionChild, true);
    } else {
      this.saveInscription();
    }
  }

  saveInscription() {
    this.store.dispatch(
      invokeUpdateInscriptionAPI({
        updateInscription: {
          ...this.inscription,
          state:
            this.inscription.state === ReservationState.TEMPORARY
              ? ReservationState.DEFINITIVE
              : ReservationState.DEFINITIVE_WAITINGLIST,
        },
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

          this.goToFinnishView();
        }
      });
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
    console.log('ParticipantComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
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
