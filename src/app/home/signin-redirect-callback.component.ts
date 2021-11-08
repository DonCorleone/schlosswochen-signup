import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../service/auth.service";

@Component({
  selector: 'app-signin-callback',
  template: `<div></div>`
})

export class SigninRedirectCallbackComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private _router: Router) { }

  ngOnInit() {
    // this._authService.completeLogin().then(user => {
    //   this._router.navigate(['/inscriptions'], { replaceUrl: true });
    // })
  }
}
