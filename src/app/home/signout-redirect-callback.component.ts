import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth.service';
@Component({
  selector: 'app-signout-callback',
  template: `<div></div>`,
})
export class SignoutRedirectCallbackComponent {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}
}
