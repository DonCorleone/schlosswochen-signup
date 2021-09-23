import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Participant } from 'src/app/models/Participant';
import { getCurrentParticipant, getCurrentParticipantNumber, State } from '../state/participant.reducer';
import * as ParticipantActions from '../state/participant.actions';
import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import * as SubscritionReducer from '../../subscription/state/subscription.reducer';
import { ParticipantService } from 'src/app/service/participant.service';
import { ParticipantInsertInput, SubscriptionParticipantsRelationInput, SubscriptionUpdateInput } from 'src/app/models/Graphqlx';
import { Subscription } from 'rxjs';
import { SubscriptionService } from 'src/app/service/subscription.service';

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
  return key in obj
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  subscription_id: string = "";
  week: number = 0;
  numOfChilds: number = 0;
  deadlineM: number = 0;

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
    match: 'The confirmation does not match the email address.'
  };
  currentParticipantNumber: number = 0;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private participantService: ParticipantService,
    private subscriptionService: SubscriptionService,
    private store: Store<State>,) { }

  ngOnInit(): void {

    // this.activeRoute.queryParams.subscribe(queryParams => {
    //   this.subscription_id = queryParams['id'];
    // });

    let deadlineMsStr = this.activeRoute.snapshot.paramMap.get('deadlineMs');
    if (deadlineMsStr) {
      this.deadlineM = +deadlineMsStr / 60 / 1000;
    }

    // this.week = this.activeRoute.snapshot.paramMap.get('week');

    this.store.select(ReservationReducer.getWeeklyReservation).subscribe( // ToDo LIW : unsubscribe
      weeklySubscription => {
        this.numOfChilds = weeklySubscription.numberOfReservations;
        this.week = weeklySubscription.weeknr
      }
    );
    this.store.select(ReservationReducer.getSubscriptionId).subscribe( // ToDo LIW : unsubscribe
      subscriptionId => {
        this.subscription_id = subscriptionId
      }
    );

    this.activeRoute.params.subscribe(routeParams => {
      this.loadParticipantDetail(routeParams.id);
    });
  }

  loadParticipantDetail(id: number) {

    this.store.select(getCurrentParticipant).subscribe(
      currentParticipant => this.currentParticipant = currentParticipant
    )

    this.store.dispatch(ParticipantActions.increaseCurrentParticipantNumber());

    this.store.select(getCurrentParticipantNumber).subscribe(
      currentParticipantNumber => this.currentParticipantNumber = currentParticipantNumber
    );

    const participant_id = this.subscription_id + "-" + this.currentParticipantNumber;

    this.signupForm = this.fb.group({
      salutation: '',
      firstNameParticipant: '',
      lastNameParticipant: '',
      participant_id: participant_id,
      fotoAllowed: '',
      comment: ''
    });
  }

  next(): void {
    if (this.signupForm.valid) {
      if (this.signupForm.dirty) {
        // Copy over all of the original participant properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained

        this.saveParticipant();
        this.router.navigate(['/participant', this.currentParticipantNumber + 1]);
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
  saveParticipant() {
    const participantInsertInput: ParticipantInsertInput = this.signupForm.value;
    this.participantService.createParticipant(participantInsertInput).subscribe(
      res => {
        const participant = { ...this.signupForm.value, id: this.currentParticipantNumber };
        this.store.dispatch(ParticipantActions.addParticipant({ participant }));
        //   this.store.dispatch(ParticipantActions.upsertParticipant().setParticipantId({ participant_id }));
      }
    );
  }

  save(): void {
    if (this.signupForm.valid) {
      if (this.signupForm.dirty) {

        this.saveParticipant();
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
    this.store.select(SubscritionReducer.getSubscription).subscribe(
      subscriptionStore => {

        const link:string[] = [];
        for (let index = 1; index <= this.numOfChilds; index++) {
          link.push(this.subscription_id + '-' + index)
        }
        const subscriptionParticipantsRelationInput: SubscriptionParticipantsRelationInput = {
          link:link
        };
        const subscription: SubscriptionUpdateInput = {
          firstName: subscriptionStore.firstName,
          lastName: subscriptionStore.lastName,
          _id:subscriptionStore._id,
          email: subscriptionStore.email,
          phone: subscriptionStore.phone,
          street1: subscriptionStore.street1,
          street2: subscriptionStore.street2,
          city: subscriptionStore.city,
          state: subscriptionStore.state,
          zip: subscriptionStore.zip,
          participants:subscriptionParticipantsRelationInput
        }
        subscription.participants = subscriptionParticipantsRelationInput;
        this.subscriptionService.updateSubscription(this.subscription_id, subscription).subscribe(
          res => {
        //     // const participant = { ...this.signupForm.value, id: this.currentParticipantNumber };
        //     // this.store.dispatch(ParticipantActions.addParticipant({ participant }));
        //     //   this.router.navigate(['/participant', this.currentParticipantNumber + 1]);
        //     //   this.store.dispatch(ParticipantActions.upsertParticipant().setParticipantId({ participant_id }));
          }
        );
      }
    )
  }

  setMessage(c: AbstractControl): string {
    var messageString = '';
    if ((c.touched || c.dirty) && c.errors) {
      messageString = Object.keys(c.errors).map(
        key => hasKey(this.validationMessages, key) ? this.validationMessages[key] : 'unknown error').join(' ');
    }
    return messageString;
  }
}

