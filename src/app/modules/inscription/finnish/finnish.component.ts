import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as ParticipantReducer from '../../inscription/state/participant.reducer';
import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { Router } from '@angular/router';
import { Participant } from '../../../models/Graphqlx';
import { Subscription as Inscription } from 'src/app/models/Graphqlx';
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
export class FinnishComponent implements OnInit {
  title = 'Finnished';
  participants: Observable<Dictionary<Participant>>;
  inscription: Observable<Inscription>;

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;

  constructor(
    private router: Router,
    private inscriptionStore: Store<InscriptionReducer.State>,
    private participantStore: Store<ParticipantReducer.State>,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    this.profile$ = this.store.pipe(select(selectCurrentUserProfile));

    this.store.dispatch(checkAuth());

    this.inscription = this.inscriptionStore
      .select(InscriptionReducer.getInscription)
      .pipe(
        map((x) => {
          return x;
        })
      );
    this.participants = this.participantStore
      .select(ParticipantReducer.getAllParticipants)
      .pipe(
        map((x) => {
          return x;
        })
      );
  }

  login() {
    this.store.dispatch(login());
  }

  logout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/welcome']).then();
  }

  goToPreviousStep() {}

  goToNextStep(): void {
    this.router.navigate(['/welcome']).then();
  }
}
