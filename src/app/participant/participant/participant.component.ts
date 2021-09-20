import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Participant } from 'src/app/models/Participant';
import { getCurrentParticipant, getCurrentParticipantNumber, State } from '../state/participant.reducer';
import * as ParticipantActions from '../state/participant.actions';
import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import { ParticipantService } from 'src/app/service/participant.service';

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

  id: string | null = '0';
  week: string | null = '0';
  numOfChilds: number = 0;
  deadlineM: number = 0;

  addresses: string | undefined;

  participantForm!: FormGroup;
  yes = true;
  emailMessage: string = '';
  confirmEmailMessage: string = '';

  errorMessage = '';

  participant: Participant[] = [];

  // Used to highlight the selected product in the list
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
    private store: Store<State>, ) { }

  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams['id'];
    });

    this.activeRoute.params.subscribe(routeParams => {
      this.loadParticipantDetail(routeParams.id);
    });

    let deadlineMsStr = this.activeRoute.snapshot.paramMap.get('deadlineMs');
    if (deadlineMsStr) {
      this.deadlineM = +deadlineMsStr / 60 / 1000;
    }

    this.week = this.activeRoute.snapshot.paramMap.get('week');

    this.store.select(ReservationReducer.getWeeklyReservation).subscribe( // ToDo LIW : unsubscribe
      weeklySubscription => this.numOfChilds = weeklySubscription.numberOfReservations
    );
  }

  loadParticipantDetail(id: number) {

    this.store.select(getCurrentParticipant).subscribe(
      currentParticipant => this.currentParticipant = currentParticipant
    )

    this.store.dispatch(ParticipantActions.increaseCurrentParticipantNumber());

    this.store.select(getCurrentParticipantNumber).subscribe(
      currentParticipantNumber => this.currentParticipantNumber = currentParticipantNumber
    );

    this.participantForm = this.fb.group({
      salutation: '',
      firstNameChild: '',
      lastNameChild: '',
      birthday: '',
      fotoAllowed: '',
      comment: ''
    });
  }

  saveParticipant(): void {
    if (this.participantForm.valid) {
      if (this.participantForm.dirty) {
        // Copy over all of the original participant properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const participant = { ...this.participantForm.value, id: this.currentParticipantNumber };

        this.store.dispatch(ParticipantActions.addParticipant({participant}));
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

      if (this.currentParticipantNumber < this.numOfChilds) {
        this.router.navigate(['/participant', this.currentParticipantNumber + 1]);
      }
    }
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
