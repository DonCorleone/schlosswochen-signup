import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { WeeklyReservation } from 'src/app/models/Week';

import * as ReservationReducer from '../../reservations/state/reservation.reducer';
import { selectIsLoggedIn } from '../../user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() externalInput: string | null;

  reservation$: Observable<WeeklyReservation>;
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;

  constructor(
    private store: Store<ReservationReducer.State>,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
    this.deadline$ = this.store.select(ReservationReducer.getDeadline);
    this.reservation$ = this.store.select(ReservationReducer.getWeeklyReservation);
  }
}
