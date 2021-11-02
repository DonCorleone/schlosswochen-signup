import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/core/auth-service.component';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public title = 'Anmeldung';

  constructor(
    private router: Router,
    private _authService: AuthService) {
      this._authService.loginChanged.subscribe(loggedIn => {
        this.isLoggedIn = loggedIn;
      });
    }

  goToPreviousStep() {
  //  this.router.navigate(['personal']);
  }

  goToNextStep(): void {
    this.router.navigate(['reservation']).then();
  }

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

  ngOnInit(): void {
    this._authService.isLoggedIn().then (loggedIn => {
      this.isLoggedIn = loggedIn
    });
  }

  login(){
    this._authService.login().then();
  }

  logout(): void {
    this._authService.logout();
    this.router.navigate(['/welcome']).then();
  }
}
