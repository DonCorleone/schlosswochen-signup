import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { props, select, Store } from "@ngrx/store";
import { ReservationService } from '../../../service/reservation.service';
import { AppState } from '../../../shared/store/appState';
import { Injectable } from '@angular/core';
import {
  inscriptionFetchAPISuccess,
  invokeInscriptionAPI, invokeUpdateInscriptionAPI, updateInscriptionAPISuccess
} from "./inscription.actions";
import { InscriptionsService } from '../../../service/inscriptions.service';
import { selectInscription } from './inscription.selector';
import { setAPIStatus } from "../../../shared/store/app.action";
import { Subscription as Inscription } from "../../../../../netlify/models/Graphqlx";
@Injectable()
export class InscriptionsEffects {
  constructor(
    private actions$: Actions,
    private inscriptionService: InscriptionsService,
    private reservationService: ReservationService,
    private store: Store,

    private appStore: Store<AppState>
  ) {}

  updateInscriptionAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateInscriptionAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.inscriptionService.update(action.updateInscription).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateInscriptionAPISuccess({ updateInscription: data });
          })
        );
      })
    );
  });
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
