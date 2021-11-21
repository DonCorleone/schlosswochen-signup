import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as ParticipantActions from '../state/participant.actions';
import * as InscriptionActions from '../state/inscription.actions';

import * as AuthSelector from '../../user/state/auth.selectors';
import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import * as InscriptionsReducer from '../../inscription/state/inscription.reducer';
import * as ParticipantReducer from '../state/participant.reducer';
import { ParticipantService } from 'src/app/service/participant.service';
import {
  Participant,
  ParticipantInsertInput,
  ParticipantQueryInput,
  SubscriptionParticipantsRelationInput,
  SubscriptionUpdateInput,
} from 'src/app/models/Graphqlx';
import { Subscription as Inscription } from 'src/app/models/Graphqlx';
import { InscriptionsService } from 'src/app/service/inscriptions.service';
import { combineLatest, Observable, Subscription, timer } from 'rxjs';
import { scan, takeWhile, map, take, first, tap } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import {
  selectParticipantById,
  selectParticipantId,
} from '../../inscription/state/inscription.reducer';

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
  title = 'Participant';

  // subscription_id: string = '';
  week: number = 0;
  numOfChilds: number = 0;
  inscription: Inscription;

  timer$: Observable<number> | undefined;

  addresses: string | undefined;

  signupForm!: FormGroup;
  yes = true;
  emailMessage: string = '';
  confirmEmailMessage: string = '';

  errorMessage = '';

  participant: Participant[] = [];
  currentParticipant: Participant | undefined = undefined;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.',
  };
  currentParticipantNumber: number = 0;

  subscriptions: Subscription[] = [];

  deadlineSubscription: Subscription;
  weeklySubscription: Subscription;
  routeParamSubscription: Subscription;
  currentParticipantSubscription: Subscription;
  currentParticipantNumberSubscription: Subscription;
  private subSubscription: Subscription;
  private subExIdSubscription: Subscription;
  private partExIdSubscription: Subscription;
  private subStoreSubscription: Subscription;
  private inscriptionSubscripton: Subscription;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private participantService: ParticipantService,
    private inscriptionsService: InscriptionsService,
    private store: Store<ParticipantReducer.State>,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const nowInS = new Date().getTime();

    combineLatest([
      this.store.select(ReservationReducer.getDeadline),
      this.store.select(ReservationReducer.getWeeklyReservation),
      this.store.select(InscriptionsReducer.getInscription),
      this.activeRoute.params,
    ])
      .pipe(
        tap(([deadline, weeklyReservation, inscription, routeParams]) => {
          // this.deadlineM = (deadline.getMinutes()- new Date().getMinutes());
          this.timer$ = timer(0, 60000).pipe(
            scan(
              (acc) => --acc,
              Math.trunc((deadline.getTime() - nowInS) / 1000 / 60)
            ),
            takeWhile((x) => x >= 0)
          );

          this.numOfChilds = weeklyReservation.numberOfReservations;
          this.week = weeklyReservation.weekNr;
          this.inscription = inscription;

          this.loadParticipantDetail(routeParams.id, inscription._id);
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }

  loadParticipantDetail(id: number, inscriptionId: string) {
    const participantId: string  = `${inscriptionId}-${+id}`;
    // @ts-ignore
    this.store.select(InscriptionsReducer.selectParticipantById(participantId)).subscribe(x=>{
      if (x){
        this.currentParticipant = x;
      }
    });

    this.store.dispatch(ParticipantActions.increaseCurrentParticipantNumber());

    this.currentParticipantNumberSubscription = this.store
      .select(ParticipantReducer.getCurrentParticipantNumber)
      .subscribe(
        (currentParticipantNumber) =>
          (this.currentParticipantNumber = currentParticipantNumber)
      );

    // const participant_id =
    //   this.inscription._id + '-' + this.currentParticipantNumber;

    this.signupForm = this.fb.group({
      salutation: '',
      firstNameParticipant: '',
      lastNameParticipant: '',
      birthday: new Date(),
      participant_id: participantId,
      externalUserId: '',
      fotoAllowed: true,
      comment: '',
    });

    this.store
      .select(InscriptionsReducer.getInscription)
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
  }
  goToPreviousStep() {
    //  this.router.navigate(['personal']);
  }
  goToNextStep(): void {
    if (this.signupForm.invalid) {
      return;
    }
    if (!this.signupForm.valid) {
      return;
    }

    if (!this.signupForm.dirty) {
      this.router.navigate([
        '/inscriptions/participant',
        this.currentParticipantNumber + 1,
      ]);
      return;
    }

    let participant = {
      ...this.signupForm.value,
      birthday: new Date(this.signupForm.value.birthday),
    };

    this.saveParticipant(participant);
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

  saveParticipant(participant: Participant): void {
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
    const participantInsertInput: ParticipantInsertInput = {
      ...participant,
    };
    this.participantService
      .upsertParticipant(
        participantInsertInput,
        participantInsertInput.participant_id!
      )
      .subscribe((res) => {
        this.subscriptions.push(
          this.store
            .select(AuthSelector.selectIsLoggedIn)
            .subscribe((isLoggedIn) => {
              if (isLoggedIn) {
                this.store.dispatch(
                  InscriptionActions.upsertParticipant({ participant })
                );
              } else {
                this.store.dispatch(
                  InscriptionActions.addParticipant({ participant })
                );
              }
              this.router.navigate([
                '/inscriptions/participant',
                this.currentParticipantNumber + 1,
              ]);
            })
        );
      });
  }

  goToSaveStep(): void {
    if (this.signupForm.valid) {
      if (this.signupForm.dirty) {
        let participant = {
          ...this.signupForm.value,
          birthday: new Date(this.signupForm.value.birthday),
        };
        this.saveParticipant(participant);
      }
    }

    this.saveInscription();
  }

  saveInscription() {
    this.subStoreSubscription = this.store
      .select(InscriptionsReducer.getInscription)
      .subscribe((InscriptionStore) => {
        const link: string[] = [];
        for (let index = 1; index <= this.numOfChilds; index++) {
          let participantId = this.inscription._id + '-' + index;

          link.push(participantId);
        }
        sessionStorage.setItem('inscription', this.inscription._id);
        let json = JSON.stringify(link);
        sessionStorage.setItem('participants', json);

        console.log(JSON.parse(json));

        const subscriptionParticipantsRelationInput: SubscriptionParticipantsRelationInput =
          {
            link: link,
          };
        const subscription: SubscriptionUpdateInput = {
          firstName: InscriptionStore.firstName,
          lastName: InscriptionStore.lastName,
          _id: InscriptionStore._id,
          email: InscriptionStore.email,
          phone: InscriptionStore.phone,
          street1: InscriptionStore.street1,
          street2: InscriptionStore.street2,
          city: InscriptionStore.city,
          state: 'definitive',
          zip: InscriptionStore.zip,
          participants: subscriptionParticipantsRelationInput,
          externalUserId: InscriptionStore.externalUserId,
        };
        subscription.participants = subscriptionParticipantsRelationInput;
        this.subSubscription = this.inscriptionsService
          .updateInscription(this.inscription._id, subscription)
          .subscribe((inscriptionId) => {
            this.store.dispatch(
              ParticipantActions.resetCurrentParticipantNumber()
            );
            this.router.navigate(['/welcome']).then();
          });
      });
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
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());

    this.deadlineSubscription?.unsubscribe();
    this.weeklySubscription?.unsubscribe();
    this.inscriptionSubscripton?.unsubscribe();
    this.routeParamSubscription?.unsubscribe();
    this.currentParticipantSubscription?.unsubscribe();
    this.currentParticipantNumberSubscription?.unsubscribe();
    this.subSubscription?.unsubscribe();
    this.subExIdSubscription?.unsubscribe();
    this.partExIdSubscription?.unsubscribe();
    this.subStoreSubscription?.unsubscribe();
  }
}
