import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import {
  Subscription as Inscription, Week,
} from 'src/app/models/Graphqlx';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { selectIsLoggedIn } from '../../user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';
import { map, takeUntil, tap } from 'rxjs';

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

  inscription$: Observable<Inscription>;
  week$: Observable<Week>;
  places$: Observable<string>;
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;
  private _ngDestroy$ = new Subject<void>();

  constructor(
    private store: Store<InscriptionReducer.InscriptionState>,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.store && this.translate) {
      this.loggedIn$ = this.store.select(selectIsLoggedIn);
      this.deadline$ = this.store.select(InscriptionReducer.getDeadline);
      this.inscription$ = this.store.select(InscriptionReducer.getInscription);
      this.week$ = this.store.select(InscriptionReducer.getWeek);
      this.places$ = this.translate.stream('WAITINGLIST')
        .pipe(
          (o$) =>
            combineLatest([o$, this.store.select(InscriptionReducer.getPlaces)]).pipe(
              map(([waitingListStr, places]) => {
                let stringArray: string[] = [];
                places.forEach((x) => {
                    stringArray.push(this.addPostfix(x, waitingListStr));
                  }
                );
                return stringArray.join('');
              })
            ),
          takeUntil(this._ngDestroy$)
        )
    }
  }
  private addPostfix(place: number, postfix: string): string {
    if (place >= 2) {
      return '<span>&#8226;' + place + ` (${postfix})</span>`;
    } else {
      return '<span>&#8226;' + place.toString() + '</span>';
    }
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
