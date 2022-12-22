import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public authService: AuthService) {}

  get isLoggedIn$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  getToken$(): Observable<string> {
    return this.authService.getAccessTokenSilently();
  }

  get user$(): Observable<any> {
    return this.authService.user$;
  }

  login(): void {
    this.authService.loginWithRedirect({
      appState: { target: '/signin-callback' },
    });
  }
  logout(): void {
    this.authService.logout({ returnTo: document.location.origin });
  }
}
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
