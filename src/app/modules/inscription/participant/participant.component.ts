import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as InscriptionActions from '../state/inscription.actions';

import * as AuthSelector from '../../user/state/auth.selectors';
import * as InscriptionsReducer from '../../inscription/state/inscription.reducer';
import { ParticipantService } from 'src/app/service/participant.service';
import {
  Participant,
  ParticipantInsertInput,
  Subscription as Inscription,
  SubscriptionParticipantsRelationInput,
  SubscriptionUpdateInput,
} from 'src/app/models/Graphqlx';
import { InscriptionsService } from 'src/app/service/inscriptions.service';
import {
  combineLatest,
  Observable,
  scan,
  Subject,
  take,
  takeUntil,
  takeWhile,
  timer,
} from 'rxjs';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ReservationState } from '../../../models/Interfaces';

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

  timer$: Observable<number> | undefined;
  signupForm!: FormGroup;
  currentParticipantNumber = 0;
  currentParticipantNumber$: Observable<number>;
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

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private store: Store<InscriptionsReducer.InscriptionState>,
    private changeDetectorRef: ChangeDetectorRef,
    private participantService: ParticipantService,
    private inscriptionsService: InscriptionsService
  ) {}

  ngOnInit(): void {
    const nowInS = new Date().getTime();

    combineLatest([
      this.store.select(InscriptionsReducer.getInscription),
      this.activeRoute.params,
    ])
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe(([inscription, routeParams]) => {
        if (inscription?.numOfChildren) {
          this.numOfChilds = inscription.numOfChildren;
        }
        const deadline = new Date(inscription.deadline);
        this.timer$ = timer(0, 60000).pipe(
          scan(
            (acc) => --acc,
            Math.trunc((deadline.getTime() - nowInS) / 1000 / 60)
          ),
          takeWhile((x) => x >= 0)
        );

        this.inscription = inscription;

        this.loadParticipantDetail(inscription._id);
        this.changeDetectorRef.markForCheck();
      });
  }

  loadParticipantDetail(inscriptionId: string) {
    this.currentParticipantNumber$ = this.store.select(
      InscriptionsReducer.getCurrentParticipantNumber
    );

    this.store
      .select(InscriptionsReducer.getCurrentParticipantNumber)
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((currentParticipantNr) => {
        this.currentParticipantNumber = currentParticipantNr;

        const participantId: string = `${inscriptionId}-${+currentParticipantNr}`;

        this.signupForm = this.fb.group({
          salutation: ['', [Validators.required]],
          firstNameParticipant: ['', [Validators.required]],
          lastNameParticipant: ['', [Validators.required]],
          birthday: [new Date(), [Validators.required]],
          participant_id: participantId,
          externalUserId: '',
          fotoAllowed: [true, [Validators.required]],
          comment: '',
        });

        this.store
          .select(InscriptionsReducer.getInscription)
          .pipe(takeUntil(this._ngDestroy$))
          .subscribe((inscription) => {
            if (
              inscription &&
              inscription.participants &&
              inscription.participants.length > 0
            ) {
              const participant = inscription?.participants?.find(
                (p) => p?.participant_id === participantId
              );
              if (participant) {
                this.displayParticipant(participant);
              }
            }
          });
      });
  }

  goToPreviousStep() {
    this.store.dispatch(InscriptionActions.decreaseCurrentParticipantNumber());
    this.store
      .select(InscriptionsReducer.getCurrentParticipantNumber)
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((p) => {
        this.currentParticipantNumber = p;
        if (this.currentParticipantNumber === 0) {
          this.router.navigate(['/inscriptions/inscription']).then((x) => {
            console.log(
              'ParticipantComponent navigate /inscriptions/inscription'
            );
          });
        } else {
          this.router.navigate(['/inscriptions/participant']).then((x) => {
            console.log(
              'ParticipantComponent navigate /inscriptions/participant'
            );
          });
        }
        return;
      });
  }

  goToNextStep(): void {
    if (this.signupForm.invalid) {
      return;
    }
    if (!this.signupForm.valid) {
      return;
    }

    if (!this.signupForm.dirty) {
      this.store.dispatch(
        InscriptionActions.increaseCurrentParticipantNumber()
      );
      this.router.navigate(['/inscriptions/participant']).then((x) => {
        console.log('ParticipantComponent navigate /inscriptions/participant');
      });
      return;
    }

    let participant = {
      ...this.signupForm.value,
      birthday: new Date(this.signupForm.value.birthday),
    };

    this.saveParticipant(participant, false);
    // if (participant.id === 0) {
    //   this.participantService.createParticipant(participant).subscribe({
    //     next: p => this.store.dispatch(ParticipantActions.setCurrentParticipant({ participant: p })),
    //     error: err => this.errorMessage = err
    //   });
    // } else {
    //   this.participantService.updateParticipant(participant).subscribe({
    //     next: p => this.store.dispatch(ParticipantActions.setCurrentParticipant({ participant: p })),
    //     error: err => this.errorMessage = err
    //   });
    // }
  }

  saveParticipant(participant: Participant, isSaveStep: boolean): void {
    const participantInsertInput: ParticipantInsertInput = {
      ...participant,
    };

    this.participantService
      .upsertParticipant(
        participantInsertInput,
        participantInsertInput.participant_id!
      )
      .pipe(take(1))
      .subscribe((res) => {
        this.store
          .select(AuthSelector.selectIsLoggedIn)
          .pipe(take(1))
          .subscribe((isLoggedIn) => {
            if (isLoggedIn) {
              this.store.dispatch(
                InscriptionActions.upsertParticipant({ participant })
              );
            } else {
              this.store
                .select(InscriptionsReducer.getInscription)
                .pipe(take(1))
                .subscribe((inscription) => {
                  let participantFromStore: Participant | null | undefined;
                  if (
                    inscription &&
                    inscription.participants &&
                    inscription.participants.length > 0
                  ) {
                    participantFromStore = inscription?.participants?.find(
                      (p) =>
                        p?.participant_id ===
                        participantInsertInput.participant_id
                    );
                  }
                  if (participantFromStore) {
                    this.store.dispatch(
                      InscriptionActions.upsertParticipant({ participant })
                    );
                  } else {
                    this.store.dispatch(
                      InscriptionActions.addParticipant({ participant })
                    );
                  }
                  if (isSaveStep) {
                    this.saveInscription();
                  } else {
                    this.store.dispatch(
                      InscriptionActions.increaseCurrentParticipantNumber()
                    );
                    this.router
                      .navigate(['/inscriptions/participant'])
                      .then((x) => {
                        console.log(
                          'ParticipantComponent navigate /inscriptions/participant'
                        );
                      });
                  }
                });
            }
          });
      });
  }

  goToSaveStep(): void {
    if (this.signupForm.valid && this.signupForm.dirty) {
      let participant = {
        ...this.signupForm.value,
        birthday: new Date(this.signupForm.value.birthday),
      };
      this.saveParticipant(participant, true);
    } else {
      this.saveInscription();
    }
  }

  saveInscription() {
    this.store
      .select(InscriptionsReducer.getInscription)
      .pipe(take(1))
      .subscribe((inscriptionStore) => {
        const link: string[] = [];
        let numOfChildren = inscriptionStore?.numOfChildren
          ? inscriptionStore?.numOfChildren
          : 0;
        for (let index = 1; index <= numOfChildren; index++) {
          let participantId = this.inscription._id + '-' + index;

          link.push(participantId);
        }
        sessionStorage.setItem('inscription', this.inscription._id);
        let json = JSON.stringify(link);
        sessionStorage.setItem('participants', json);

        const subscriptionParticipantsRelationInput: SubscriptionParticipantsRelationInput =
          {
            link: link,
          };
        const subscription: SubscriptionUpdateInput = {
          firstName: inscriptionStore.firstName,
          lastName: inscriptionStore.lastName,
          _id: inscriptionStore._id,
          email: inscriptionStore.email,
          phone: inscriptionStore.phone,
          street1: inscriptionStore.street1,
          street2: inscriptionStore.street2,
          city: inscriptionStore.city,
          state:
            inscriptionStore.state === ReservationState.TEMPORARY
              ? ReservationState.DEFINITIVE
              : ReservationState.DEFINITIVE_WAITINGLIST,
          zip: inscriptionStore.zip,
          participants: subscriptionParticipantsRelationInput,
          externalUserId: inscriptionStore.externalUserId,
        };
        subscription.participants = subscriptionParticipantsRelationInput;
        //   this.subscriptions.push(
        this.inscriptionsService
          .updateInscription(this.inscription._id, subscription)
          .pipe(takeUntil(this._ngDestroy$))
          .subscribe((inscriptionNew) => {
            this.store.dispatch(
              InscriptionActions.setInscription({
                inscription: inscriptionNew,
              })
            );
            this.store.dispatch(
              InscriptionActions.resetCurrentParticipantNumber()
            );
            this.router.navigate(['/inscriptions/finnish']).then();
          });
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

  ngOnDestroy(): void {
    console.log('ParticipantComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }

  private displayParticipant(participant: Participant) {
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
}
