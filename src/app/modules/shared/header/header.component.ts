import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject } from 'rxjs';
import {
  Subscription,
  Subscription as Inscription,
  Week,
  Week_Capacity,
} from 'netlify/models/Graphqlx';
import { selectIsLoggedIn } from '../../user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';
import {
  getDeadline,
  getInscription,
  getWeeks,
  reservationSelector,
} from '../../reservations/state/reservation.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() externalInput: string | null;
  @Input() showWeek = true;
  @Input() showAmount = true;
  @Input() showCountdown = true;
  @Input() title = '';
  @Input() titlePostfix = '';
  @Input() inscription?: Subscription | null;

  week$: Observable<Week_Capacity | undefined>;
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;
  private _ngDestroy$ = new Subject<void>();
  constructor(private store: Store, public translate: TranslateService) {}

  ngOnInit(): void {
    if (this.store && this.translate) {
      this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
      this.deadline$ = this.store.pipe(select(getDeadline));
      this.week$ = this.getWeek();
    }
  }

  getWeek(): Observable<Week_Capacity | undefined> {
    return this.store.pipe(select(reservationSelector)).pipe(
      map((state) => {
        return state.weeks.find((p) => p.week == state.inscription.week);
      })
    );
  }

  ngOnDestroy(): void {
    console.log('HeaderComponent destroyed');
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
