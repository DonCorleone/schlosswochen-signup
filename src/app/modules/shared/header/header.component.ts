import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Maybe,
  Scalars,
  Subscription as Inscription,
} from 'src/app/models/Graphqlx';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { selectIsLoggedIn } from '../../user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() externalInput: string | null;
  @Input() showWeek = true;
  @Input() showAmount = true;
  @Input() showCountdown = true;

  inscription$: Observable<Inscription>;
  places$: Observable<string>;
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;

  constructor(
    private store: Store<InscriptionReducer.InscriptionState>,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.store) {
      this.loggedIn$ = this.store.select(selectIsLoggedIn);
      this.deadline$ = this.store.select(InscriptionReducer.getDeadline);
      this.inscription$ = this.store.select(InscriptionReducer.getInscription);
      this.places$ = this.store.select(InscriptionReducer.getPlaces).pipe(
        map(p=> {
          let stringArray: string[] = [];
          p.forEach(x => stringArray.push(this.addPostfix(x)));
          return stringArray.join(', ')
        })
      );
    }
  }

  private addPostfix(place: number): string{
    if (place >= 2) {
      return place + '(Warteliste)';
    } else {
      return place.toString();
    }
  }
}


