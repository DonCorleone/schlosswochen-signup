import { Component } from '@angular/core';
import {AuthenticationService} from "../service/auth.service";

@Component({
  selector: 'app-unauthorized',
  templateUrl: 'unauthorized.component.html'
})

export class UnauthorizedComponent {
  constructor(private _authService: AuthenticationService) { }

  logout() {
    // this._authService.logout();
  }
}
