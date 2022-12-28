import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  combineLatest,
  forkJoin,
  map,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';
import { Subscription as Inscription, Week } from 'netlify/models/Graphqlx';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { selectIsLoggedIn } from '../../user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';
import { ReservationState } from '../../../models/Interfaces';
import {
  getDeadline,
  selectWeeks,
} from '../../reservations/state/reservation.selector';
import { selectInscription } from '../../inscription/state/inscription.selector';

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

  inscription$: Observable<Inscription>;
  week$: Observable<Week | undefined>;
  places$: Observable<string>;
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;
  private _ngDestroy$ = new Subject<void>();

  constructor(
    private store: Store<InscriptionReducer.InscriptionState>,
    private superStore: Store,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.store && this.translate) {
      this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
      this.deadline$ = this.store.pipe(select(getDeadline));
      this.inscription$ = this.superStore
        .pipe(select(selectInscription))
        .pipe(map((p) => p?.inscription));
      this.week$ = this.getWeek();
      this.places$ = this.translate.stream('WAITINGLIST').pipe(
        (o$) =>
          combineLatest([
            o$,
            this.store.pipe(select(InscriptionReducer.getPlaces)),
          ]).pipe(
            map(([waitingListStr, places]) => {
              let placesStr = places.map((p) => p.placeNumber).join(' & ');
              if (
                places[0]?.reservationState ===
                ReservationState.TEMPORARY_WAITINGLIST
              ) {
                placesStr = placesStr + ` (${waitingListStr})`;
              }
              return placesStr;
            })
          ),
        takeUntil(this._ngDestroy$)
      );
    }
  }

  getWeek(): Observable<Week | undefined> {
    const week$ = combineLatest([
      this.superStore.pipe(select(selectInscription)),
      this.superStore.pipe(select(selectWeeks)),
    ]).pipe(
      map(([week, weeks]) => {
        return weeks.weeks.find((p) => p.week == week.inscription.week);
      })
    );

    return week$;
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
