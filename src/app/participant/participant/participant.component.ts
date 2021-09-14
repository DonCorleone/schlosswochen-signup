import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Participant } from 'src/app/models/Participant';
import { ApolloService } from 'src/app/service/apollo.service';

import { insertOneSubscription } from '../../models/Subscriptor';
import { getCurrentParticipant, State } from '../state/participant.reducer';
import * as ParticipantActions from '../state/participant.actions';
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
  numOfChilds: number | null = 0;
  deadlineM: number = 0;

  addresses: string | undefined;

  participantForm!: FormGroup;
  yes = true;
  emailMessage: string = '';
  confirmEmailMessage: string = '';

  errorMessage = '';

  participant: Participant[] = [];

  // Used to highlight the selected product in the list
  selectedParticipant: Participant | null = null;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.'
  };

  get childs(): FormArray {
    return <FormArray>(this.participantForm.get('childs'));
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private participantService: ParticipantService,
    private store: Store<State>, ) {

  }

  ngOnInit(): void {

    this.store.select(getCurrentParticipant).subscribe(
      currentParticipant => this.selectedParticipant = currentParticipant
    );

    this.store.dispatch(ParticipantActions.initializeCurrentParticipant());


    let deadlineMsStr = this.route.snapshot.paramMap.get('deadlineMs');
    if (deadlineMsStr) {
      this.deadlineM = +deadlineMsStr / 60 / 1000;
    }

    this.participantForm = this.fb.group({
      childs: this.fb.array([this.buildChildren()]),
      state:"Definitive"
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.week = this.route.snapshot.paramMap.get('week');
    let numOfChildsStr = this.route.snapshot.paramMap.get('numOfChilds');
    if (numOfChildsStr) {
      this.numOfChilds = +numOfChildsStr;
      for (let index = 0; index < this.numOfChilds - 1; index++) {
        this.addChildren();
      }
    };
  }

  saveParticipant(originalParticipant: Participant): void {
    if (this.participantForm.valid) {
      if (this.participantForm.dirty) {
        // Copy over all of the original participant properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const participant = { ...originalParticipant, ...this.participantForm.value };

        if (participant.id === 0) {
          this.participantService.createParticipant(participant).subscribe({
            next: p => this.store.dispatch(ParticipantActions.setCurrentParticipant({ participant: p })),
            error: err => this.errorMessage = err
          });
        } else {
          this.participantService.updateParticipant(participant).subscribe({
            next: p => this.store.dispatch(ParticipantActions.setCurrentParticipant({ participant: p })),
            error: err => this.errorMessage = err
          });
        }
      }
    }
  }

  addChildren(): void {
    this.childs.push(this.buildChildren());
  }

  buildChildren(): FormGroup {
    return this.fb.group({
      salutation: '',
      firstNameChild: '',
      lastNameChild: '',
      birthday: '',
      fotoAllowed: '',
      comment: ''
    });
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
