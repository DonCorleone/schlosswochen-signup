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

import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import * as InscriptionsReducer from '../../inscription/state/inscription.reducer';
import * as ParticipantReducer from '../state/participant.reducer';
import { ParticipantService } from 'src/app/service/participant.service';
import {
  Participant,
  ParticipantInsertInput,
  SubscriptionParticipantsRelationInput,
  SubscriptionUpdateInput,
} from 'src/app/models/Graphqlx';
import { Subscription as Inscription } from 'src/app/models/Graphqlx';
import { InscriptionsService } from 'src/app/service/inscriptions.service';
import { Observable, Subscription, timer } from 'rxjs';
import { scan, takeWhile, map } from 'rxjs/operators';
import * as UserReducer from "../../user/state/user.reducer";
import {User} from "oidc-client";

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
  deadlineSubscription: Subscription;
  weeklySubscription: Subscription;
  routeParamSubscription: Subscription;
  currentParticipantSubscription: Subscription;
  currentParticipantNumberSubscription: Subscription;
  private subSubscription: Subscription;
  private subExIdSubscription: Subscription;
  private partExIdSubscription: Subscription;
  private subStoreSubscription: Subscription;
  private userSubscription: Subscription;
  private currentUser: User;
  private inscriptionSubscripton: Subscription;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private participantService: ParticipantService,
    private inscriptionsService: InscriptionsService,
    private store: Store<ParticipantReducer.State>,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.userSubscription = this.store.select(UserReducer.getCurrentUser).subscribe(user => {
      this.currentUser = user;
    });

    const nowInS = new Date().getTime();
    this.deadlineSubscription = this.store
      .select(ReservationReducer.getDeadline)
      .subscribe(
        (deadline) => {
          // this.deadlineM = (deadline.getMinutes()- new Date().getMinutes());
          this.timer$ = timer(0, 60000).pipe(
            scan(
              (acc) => --acc,
              Math.trunc((deadline.getTime() - nowInS) / 1000 / 60)
            ),
            takeWhile((x) => x >= 0)
          );
        }
      );
    this.weeklySubscription = this.store
      .select(ReservationReducer.getWeeklyReservation)
      .subscribe(
        (weeklyReservation) => {
          this.numOfChilds = weeklyReservation.numberOfReservations;
          this.week = weeklyReservation.weekNr;
        }
      );
    this.inscriptionSubscripton = this.store
      .select(InscriptionsReducer.getInscription)
      .subscribe(
        (inscription) => {
          this.inscription = inscription;
        }
      );

    this.routeParamSubscription = this.activeRoute.params.subscribe(
      (routeParams) => {
        this.loadParticipantDetail(routeParams.id);
        this.ref.markForCheck();
      }
    );
  }

  loadParticipantDetail(id: number) {
    this.currentParticipantSubscription = this.store
      .select(ParticipantReducer.getCurrentParticipant)
      .subscribe(
        (currentParticipant) => (this.currentParticipant = currentParticipant)
      );

    this.store.dispatch(ParticipantActions.increaseCurrentParticipantNumber());

    this.currentParticipantNumberSubscription = this.store
      .select(ParticipantReducer.getCurrentParticipantNumber)
      .subscribe(
        (currentParticipantNumber) =>
          (this.currentParticipantNumber = currentParticipantNumber)
      );

    const participant_id =
      this.inscription._id + '-' + this.currentParticipantNumber;

    this.signupForm = this.fb.group({
      salutation: '',
      firstNameParticipant: '',
      lastNameParticipant: '',
      birthday: new Date(),
      participant_id: participant_id,
      externalUserId: '',
      fotoAllowed: true,
      comment: '',
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
    if (this.signupForm.valid) {
      if (this.signupForm.dirty) {
        // Copy over all of the original participant properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained

        this.saveParticipant(true);
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
    }
  }
  saveParticipant(routeToNext: boolean) {
    const participantInsertInput: ParticipantInsertInput =
      this.signupForm.value;
    participantInsertInput.birthday = new Date(participantInsertInput.birthday);
    this.participantService
      .createParticipant(participantInsertInput)
      .subscribe((res) => {
        const participant = {
          ...this.signupForm.value,
          id: this.currentParticipantNumber,
        };
        this.store.dispatch(ParticipantActions.addParticipant({ participant }));

        if (routeToNext) {
          this.router.navigate([
            '/participant',
            this.currentParticipantNumber + 1,
          ]);
        }
        //   this.store.dispatch(ParticipantActions.upsertParticipant().setParticipantId({ participant_id }));
      });
  }

  goToSaveStep(): void {
    if (this.signupForm.valid) {
      if (this.signupForm.dirty) {
        this.saveParticipant(false);
      }
    }

    this.saveSubscription();

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
  saveSubscription() {
    this.subStoreSubscription = this.store
      .select(InscriptionsReducer.getInscription)
      .subscribe((InscriptionStore) => {
        const link: string[] = [];
        for (let index = 1; index <= this.numOfChilds; index++) {
          link.push(this.inscription._id + '-' + index);
        }
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
          externalUserId: '',
        };
        subscription.participants = subscriptionParticipantsRelationInput;
        this.subSubscription = this.inscriptionsService
          .updateInscription(this.inscription._id, subscription)
          .subscribe((inscriptionId) => {
            if (!this.currentUser?.profile?.sub){
              this.router.navigate(['/finnish']);
            }else{
            this.subExIdSubscription = this.inscriptionsService
              .updateExternalUserId(inscriptionId, this.currentUser.profile.sub)
              .subscribe((subscriptionResult) => {
                this.partExIdSubscription = this.participantService
                  .updateExternalUserId(link, this.currentUser.profile.sub)
                  .subscribe((participantResult) => {
                    if (participantResult == link.length) {
                      this.router.navigate(['/finnish']);
                    }
                  });
              });
            }
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
