import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/core/auth-service.component';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return false;// ToDo securing this.authService.isLoggedIn();
  }

  get userName(): string {

    // ToDo securing if (this.authService.currentUser) {
    //   return this.authService.currentUser.userName;
    // }
    return '';
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
