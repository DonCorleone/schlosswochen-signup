import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as fromAuthActions from './auth.actions';
import { AuthenticationService } from '../../../service/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// function createEffect(param: () => any, param2: { dispatch: boolean }) {}

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.login),
        tap(() => this.authService.login())
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.logout),
      tap(() => this.authService.logout()),
      switchMap(() => of(fromAuthActions.logoutComplete()))
    )
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      // If an action with the type 'checkAuth' occurs in the actions$ stream...
      ofType(fromAuthActions.checkAuth),
      // return an observable including the latest info from 'isLoggedIn' and 'userProfile'
      switchMap(() =>
        combineLatest([this.authService.isLoggedIn$, this.authService.user$])
      ),
      // Take it out and return the appropriate action based on if logged in or not
      switchMap(([isLoggedIn, profile]) => {
        if (isLoggedIn) {
          return of(fromAuthActions.loginComplete({ profile, isLoggedIn }));
        }

        return of(fromAuthActions.logoutComplete());
      })
    )
  );
}
