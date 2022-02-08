import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Maybe, Scalars, Subscription as Inscription} from 'src/app/models/Graphqlx';

import * as InscriptionReducer from '../../inscription/state/inscription.reducer';
import { selectIsLoggedIn } from '../../user/state/auth.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() externalInput: string | null;

  inscription$: Observable<Inscription>;
  loggedIn$: Observable<boolean>;
  deadline$: Observable<Date>;

  constructor(
    private store: Store<InscriptionReducer.InscriptionState>,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
    this.deadline$ = this.store.select(InscriptionReducer.getDeadline);
    this.inscription$ = this.store.select(InscriptionReducer.getInscription);
  }
}
