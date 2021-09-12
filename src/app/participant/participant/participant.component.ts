import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ApolloService } from 'src/app/service/apollo.service';

import { insertOneSubscription } from '../../models/Subscriptor';

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

  signupForm!: FormGroup;
  yes = true;
  emailMessage: string = '';
  confirmEmailMessage: string = '';

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.'
  };

  get childs(): FormArray {
    return <FormArray>(this.signupForm.get('childs'));
  }

  constructor(private fb: FormBuilder, private apolloService: ApolloService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let deadlineMsStr = this.route.snapshot.paramMap.get('deadlineMs');
    if (deadlineMsStr) {
      this.deadlineM = +deadlineMsStr / 60 / 1000;
    }

    this.signupForm = this.fb.group({
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

  save(): void {
    console.log(this.signupForm);
    this.addresses = this.signupForm.get('address')?.value;
    console.log(this.addresses);
    if (this.week && this.id) {
      this.apolloService.UpdateParticipant(this.id, this.signupForm.value)
        .subscribe((res: insertOneSubscription) => {

          console.log(JSON.stringify(res));
        });
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
