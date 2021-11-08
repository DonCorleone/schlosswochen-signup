import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { checkAuth, login, logout } from '../modules/user/state/auth.actions';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../modules/user/state/auth.selectors';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  public title = 'Anmeldung';

  constructor(private router: Router, private store: Store<any>) {}

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    this.profile$ = this.store.pipe(select(selectCurrentUserProfile));

    this.store.dispatch(checkAuth());
  }

  login() {
    this.store.dispatch(login());
  }

  logout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/welcome']).then();
  }

  goToPreviousStep() {
    //  this.router.navigate(['personal']);
  }

  goToNextStep(): void {
    this.router.navigate(['reservation']).then();
  }
}
