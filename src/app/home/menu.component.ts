import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/core/auth-service.component';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Schlosswochen';

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
    this._authService.isLoggedIn().then (loggedIn => {
      this.isLoggedIn = loggedIn
    });
  }

  login(){
    this._authService.login();
  }

  logOut(): void {
    this._authService.logout();
  // ToDo ACME  this.router.navigate(['/welcome']);
  }
}
