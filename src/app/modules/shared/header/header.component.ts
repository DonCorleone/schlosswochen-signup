import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { map, Observable, Subject } from "rxjs";
import { Subscription as Inscription, Week } from "netlify/models/Graphqlx";
import { selectIsLoggedIn } from "../../user/state/auth.selectors";
import { TranslateService } from "@ngx-translate/core";
import { getDeadline, selectWeeks } from "../../reservations/state/reservation.selector";

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
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;
  private _ngDestroy$ = new Subject<void>();
  constructor(
    private store: Store,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.store && this.translate) {
      this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
      this.deadline$ = this.store.pipe(select(getDeadline));
      this.inscription$ = this.store
        .pipe(select(selectWeeks))
        .pipe(map((p) => p?.inscription));
      this.week$ = this.getWeek();
    }
  }

  getWeek(): Observable<Week | undefined> {
    return this.store.pipe(select(selectWeeks)).pipe(
      map(state => {
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
