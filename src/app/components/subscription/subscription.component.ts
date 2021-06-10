import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ApolloService } from 'src/app/service/apollo.service';

import { Customer } from './Customer';
import { InsertOneParticipant } from './Subscriptor';

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
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  signupForm!: FormGroup;
  customer = new Customer();
  emailMessage: string = '';
  confirmEmailMessage: string = '';
	eventDetail$!: Observable<InsertOneParticipant>;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
    match: 'The confirmation does not match the email address.'
  };

  constructor(private fb: FormBuilder, private eventService: ApolloService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      addresses: this.fb.array([this.buildAddress()])
    });

    const emailControl = this.signupForm.get('emailGroup.email');
    emailControl?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.emailMessage = this.setMessage(emailControl)
    );

    const confirmEmailControl = this.signupForm.get('emailGroup.confirmEmail');
    confirmEmailControl?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.confirmEmailMessage = this.setMessage(confirmEmailControl)
    );

    const emailGroup = this.signupForm.get('emailGroup');
    emailGroup?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.confirmEmailMessage = this.setMessage(emailGroup)
    );
  }

  save(): void {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));
    this.eventService.InsertParticipant(1);
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: [''],
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
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
