import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, take } from 'rxjs';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { Router } from '@angular/router';
import { Subscription as Inscription } from 'netlify/models/Graphqlx';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../../user/state/auth.selectors';
import { checkAuth, login, logout } from '../../user/state/auth.actions';

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
    private inscriptionStore: Store<InscriptionReducer.InscriptionState>,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
    this.profile$ = this.store.select(selectCurrentUserProfile);

    this.store.dispatch(checkAuth());

    this.inscription$ = this.inscriptionStore.select(
      InscriptionReducer.getInscription
    );

    this.inscriptionStore
      .select(InscriptionReducer.getInscription)
      .pipe(take(1))
      .subscribe((inscription: Inscription) => {
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
      console.log('FinnishComponent logout');
    });
  }

  goToPreviousStep() {}

  goToNextStep(): void {
    this.router.navigate(['/welcome']).then((x) => {
      console.log('FinnishComponent goToNextStep');
    });
  }

  ngOnDestroy(): void {
    console.log('FinnishComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
