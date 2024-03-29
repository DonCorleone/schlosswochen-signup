import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, take, takeUntil } from "rxjs";
import { Router } from '@angular/router';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../../user/state/auth.selectors';
import { checkAuth, login, logout } from '../../user/state/auth.actions';
import { getInscription } from "../../reservations/state/reservation.selector";
@Component({
  selector: 'app-finnish',
  templateUrl: './finnish.component.html',
  styleUrls: ['./finnish.component.scss'],
})
export class FinnishComponent implements OnInit, OnDestroy {
  title = 'FINNISH.TITLE';
  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;
  inscriptionStr: string;
  stateDesc: string;
  participants: string[] = [];
  private _ngDestroy$ = new Subject<void>();
  constructor(
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    this.profile$ = this.store.pipe(select(selectCurrentUserProfile));

    this.store.dispatch(checkAuth());

    this.store.pipe(
      select(getInscription),
      takeUntil(this._ngDestroy$),
      map((inscriptionFromState) => {
        this.stateDesc = inscriptionFromState.state!;
        let contact = [];
        contact.push(
          inscriptionFromState.firstName +
          ' ' +
          inscriptionFromState.lastName +
          '(' +
          inscriptionFromState.salutation +
          ')'
        );
        contact.push(inscriptionFromState.zip + ' ' + inscriptionFromState.city);
        contact.push(inscriptionFromState.email);
        this.inscriptionStr = contact.join(', ');

        inscriptionFromState.children?.forEach((child) => {
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
      })
    ).subscribe();
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
    document.location.href = 'https://www.schlosswochen.ch/schlosswochen/Start';
  }

  ngOnDestroy(): void {
    console.log('FinnishComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
