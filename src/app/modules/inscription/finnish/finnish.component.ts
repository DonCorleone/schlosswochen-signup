import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {map, take, takeUntil} from 'rxjs/operators';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { Router } from '@angular/router';
import { Participant } from '../../../models/Graphqlx';
import { Subscription as Inscription } from 'src/app/models/Graphqlx';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../../user/state/auth.selectors';
import { checkAuth, login, logout } from '../../user/state/auth.actions';
import {subscribe} from "graphql";

@Component({
  selector: 'app-finnish',
  templateUrl: './finnish.component.html',
  styleUrls: ['./finnish.component.scss'],
})
export class FinnishComponent implements OnInit {
  title = 'Finnished';
  inscription$: Observable<Inscription>;

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;
  inscription: string;
  participants: string[] = [];

  constructor(
    private router: Router,
    private inscriptionStore: Store<InscriptionReducer.InscriptionState>,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
    this.profile$ = this.store.select(selectCurrentUserProfile);

    this.store.dispatch(checkAuth());

    this.inscription$ = this.inscriptionStore.select(InscriptionReducer.getInscription);

    this.inscriptionStore.select(InscriptionReducer.getInscription)
      .pipe(take(1))
      .subscribe((inscription: Inscription) => {
        let contact=[];
        contact.push(inscription.salutation + ' ' + inscription.firstName + ' ' + inscription.lastName);
        contact.push(inscription.zip + ' ' + inscription.city);
        contact.push(inscription.email);
        this.inscription = contact.join(', ');

        inscription.participants?.forEach(participant => {
          let participantParts=[];
          participantParts.push(participant?.salutation + ' ' + participant?.firstNameParticipant + ' ' + participant?.lastNameParticipant);
          participantParts.push(new Date(participant?.birthday)?.toLocaleDateString());
          this.participants.push(participantParts.join(', '));
        })
      }
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
