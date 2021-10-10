import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public title = 'Anmeldung';

  constructor(
    private router: Router) { }

  goToPreviousStep() {
  //  this.router.navigate(['personal']);
  }

  goToNextStep(): void {
    this.router.navigate(['reservation']);
  }
}
