import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../service/auth.service";
@Component({
  selector: 'app-signout-callback',
  template: `<div></div>`
})

export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private _router: Router) { }

  ngOnInit() {
    // this._authService.completeLogout().then(_ => {
    //   this._router.navigate(['/'], { replaceUrl: true });
    // })
  }
}
