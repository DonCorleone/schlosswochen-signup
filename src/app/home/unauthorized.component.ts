import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/auth.service";

@Component({
  selector: 'app-unauthorized',
  templateUrl: 'unauthorized.component.html'
})

export class UnauthorizedComponent implements OnInit {
  constructor(private _authService: AuthenticationService) { }

  ngOnInit() { }

  logout() {
    // this._authService.logout();
  }
}
