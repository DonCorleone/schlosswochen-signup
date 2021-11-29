import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { checkAuth, login, logout } from '../modules/user/state/auth.actions';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../modules/user/state/auth.selectors';
import { map, take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnDestroy {
  public title = 'Anmeldung';
  private loggedInSubscription: Subscription;

  constructor(
    private router: Router,
    private store: Store<any>,
    public translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;
  param = { value: 'world' };
  countDownTitle: string;

  ngOnInit() {
    this.translate
      .get('COUNTDOWNTITLE')
      .pipe(take(1))
      .subscribe((res: string) => {
        this.countDownTitle = res;
      });

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
    this.loggedInSubscription = this.loggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['inscriptions/inscription']).then();
      } else {
        this.router.navigate(['reservation']).then();
      }
    });
  }
  ngOnDestroy(): void {
    this.loggedInSubscription?.unsubscribe();
  }
}
