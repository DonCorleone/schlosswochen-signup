import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { checkAuth, login, logout } from '../../user/state/auth.actions';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../../user/state/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss'],
})
export class WizardStepComponent {
  @Input() title: string;
  @Input() saveStep: boolean = false;
  @Input() nextEnabled: boolean = true;
  @Input() previousEnabled: boolean = true;
  @Output() previousStepClicked = new EventEmitter();
  @Output() saveStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();

  goToPreviousStep() {
    this.previousStepClicked.emit();
  }

  goToNextStep() {
    this.nextStepClicked.emit();
  }

  goToSaveStep() {
    this.saveStepClicked.emit();
  }
}
