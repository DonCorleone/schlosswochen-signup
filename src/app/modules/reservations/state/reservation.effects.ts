import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { reservationSelector } from "./reservation.selector";
import {
  inscriptionFetchAPISuccess,
  invokeInscriptionAPI,
  invokeSaveNewInscriptionAPI, invokeUpdateInscriptionAPI,
  invokeWeeksAPI,
  saveNewInscriptionAPISuccess, updateInscriptionAPISuccess,
  weeksFetchAPISuccess
} from "./reservation.action";
import { WeeksService } from "../../../service/weeks.service";
import { setAPIStatus } from "../../../shared/store/app.action";
import { ReservationService } from "../../../service/reservation.service";
import { AppState } from "../../../shared/store/appState";
import { InscriptionsService } from "../../../service/inscriptions.service";

@Injectable()
export class ReservationEffects {
  constructor(
    private actions$: Actions,
    private weeksService: WeeksService,
    private reservationService: ReservationService,
    private inscriptionService: InscriptionsService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}
  loadAllWeeks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeWeeksAPI),
      withLatestFrom(this.store.pipe(select(reservationSelector))),
      mergeMap(([, weeksFromStore]) => {
        if (weeksFromStore?.weeks?.length > 0) {
          return EMPTY;
        }
        return this.weeksService
          .get()
          .pipe(map((data) => weeksFetchAPISuccess({ allWeeks: data })));
      })
    )
  );
  saveNewInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewInscriptionAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '', data: undefined } })
        );
        return this.reservationService.create(action.newInscription).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success', data },
              })
            );
            return saveNewInscriptionAPISuccess({ newInscription: data });
          })
        );
      })
    );
  });
  updateInscriptionAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateInscriptionAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '', data: undefined } })
        );
        return this.inscriptionService.update(action.updateInscription).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: data.state ?? '', apiStatus: 'success', data },
              })
            );
            return updateInscriptionAPISuccess({ updateInscription: data });
          })
        );
      })
    );
  });
  loadInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeInscriptionAPI),
      withLatestFrom(this.store.pipe(select(reservationSelector))),
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
    );
  });
}
