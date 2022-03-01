import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { checkAuth, login, logout } from '../modules/user/state/auth.actions';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../modules/user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnDestroy {
  title = 'INSCRIPTION';
  welcomeText = 'WELCOME';
  loggedIn$: Observable<boolean> | undefined;
  profile$: Observable<any> | undefined;
  countDownTitle: string;
  private loggedInSubscription: Subscription | undefined;
  private _ngDestroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private store: Store<any>,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.translate
      .stream('COUNTDOWNTITLE')
      .pipe(takeUntil(this._ngDestroy$))
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
    this.loggedInSubscription = this.loggedIn$?.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['inscriptions/inscription']).then();
      } else {
        this.router.navigate(['reservation']).then();
      }
    });
  }

  ngOnDestroy(): void {
    this.loggedInSubscription?.unsubscribe();
    this._ngDestroy$.complete();
    this._ngDestroy$.next();
  }
}
