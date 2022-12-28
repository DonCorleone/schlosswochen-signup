import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, take } from 'rxjs';
import { Router } from '@angular/router';
import { Subscription as Inscription } from 'netlify/models/Graphqlx';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../../user/state/auth.selectors';
import { checkAuth, login, logout } from '../../user/state/auth.actions';
import { selectWeeks } from "../../reservations/state/reservation.selector";
@Component({
  selector: 'app-finnish',
  templateUrl: './finnish.component.html',
  styleUrls: ['./finnish.component.scss'],
})
export class FinnishComponent implements OnInit, OnDestroy {
  title = 'FINNISH.TITLE';
  inscription$: Observable<Inscription>;
  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;
  inscription: string;
  stateDesc: string;
  participants: string[] = [];
  private _ngDestroy$ = new Subject<void>();
  constructor(
    private router: Router,
    private store: Store<any>,
    private superStore: Store
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    this.profile$ = this.store.pipe(select(selectCurrentUserProfile));

    this.store.dispatch(checkAuth());

    this.inscription$ = this.superStore
      .pipe(select(selectWeeks))
      .pipe(map((p) => p.inscription));

    this.inscription$.pipe(take(1)).subscribe((inscription) => {
      this.stateDesc = inscription.state!;
      let contact = [];
      contact.push(
        inscription.firstName +
          ' ' +
          inscription.lastName +
          '(' +
          inscription.salutation +
          ')'
      );
      contact.push(inscription.zip + ' ' + inscription.city);
      contact.push(inscription.email);
      this.inscription = contact.join(', ');

      inscription.children?.forEach((child) => {
        let participantParts = [];
        participantParts.push(
          child?.firstNameParticipant +
            ' ' +
            child?.lastNameParticipant +
            '(' +
            child?.salutation +
            ')'
        );
        participantParts.push(
          '*' + new Date(child?.birthday)?.toLocaleDateString('de-CH')
        );
        this.participants.push(participantParts.join(', '));
      });
    });
  }

  login() {
    this.store.dispatch(login());
  }

  logout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/welcome']).then((x) => {
      console.log(`FinnishComponent logout: ${x}`);
    });
  }

  goToPreviousStep() {}

  goToNextStep(): void {
    this.router.navigate(['/welcome']).then((x) => {
      console.log(`FinnishComponent goToNextStep: ${x}`);
    });
  }

  ngOnDestroy(): void {
    console.log('FinnishComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
