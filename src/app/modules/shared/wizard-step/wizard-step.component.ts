import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/modules/core/auth-service.component';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {
  @Input() title: string;
  @Input() saveStep: boolean = false;
  @Input() nextEnabled: boolean = true;
  @Input() previousEnabled: boolean = false;
  @Output() previousStepClicked = new EventEmitter();
  @Output() saveStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();

  isLoggedIn: boolean;

 // ToDo securingget isLoggedIn(): boolean {
 //   return this.authService.isLoggedIn();
 // }

  get userName(): string {

    // ToDo securing if (this.authService.currentUser) {
    //   return this.authService.currentUser.userName;
    // }
    return '';
  }


  constructor(private _authService: AuthService) {
    this._authService.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnInit(): void {
    // this._authService.isLoggedIn().then (loggedIn => {
    //   this.isLoggedIn = loggedIn
    // });
  }

  login(){
    // this._authService.login();
  }

  logOut(): void {
    // this._authService.logout();
  // ToDo ACME  this.router.navigate(['/welcome']);
  }


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
