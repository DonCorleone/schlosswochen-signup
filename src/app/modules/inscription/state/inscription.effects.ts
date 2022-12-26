import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ReservationService } from '../../../service/reservation.service';
import { AppState } from '../../../shared/store/appState';
import { Injectable } from '@angular/core';
import {
  inscriptionFetchAPISuccess,
  invokeInscriptionAPI,
} from './inscription.actions';
import { InscriptionsService } from '../../../service/inscriptions.service';
import { selectInscription } from './inscription.selector';
@Injectable()
export class WeeksEffect {
  constructor(
    private actions$: Actions,
    private inscriptionService: InscriptionsService,
    private reservationService: ReservationService,
    private store: Store,

    private appStore: Store<AppState>
  ) {}

  loadInscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeInscriptionAPI),
      withLatestFrom(this.store.pipe(select(selectInscription))),
      mergeMap(([, inscriptionFromStore]) => {
        if (!inscriptionFromStore) {
          return EMPTY;
        }
        return this.inscriptionService
          .get()
          .pipe(
            map((data) => inscriptionFetchAPISuccess({ inscription: data }))
          );
      })
    )
  );
}
