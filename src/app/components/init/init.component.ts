import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { EMPTY, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ApolloService } from 'src/app/service/apollo.service';
import { InsertOneParticipant } from '../subscription/Subscriptor';

// since an object key can be any of those types, our key can too
// in TS 3.0+, putting just "string" raises an error
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  signupForm!: FormGroup;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.'
  };

  insertOneParticipant$: Observable<InsertOneParticipant | null | undefined> = EMPTY;

  constructor(private fb: FormBuilder, private apolloService: ApolloService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      numOfChilds:0
    });
  }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));
    const numOfChildren = this.signupForm.get('numOfChilds');

    this.insertOneParticipant$ = this.apolloService.InsertParticipant(numOfChildren?.value);
  }

  setMessage(c: AbstractControl): string {
    var messageString = '';
    if ((c.touched || c.dirty) && c.errors) {
      messageString = Object.keys(c.errors).map(
        key => hasKey(this.validationMessages, key) ? this.validationMessages[key] : 'unknown error') .join(' ');
    }
    return messageString;
  }
}