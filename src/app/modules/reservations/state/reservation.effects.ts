import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { selectWeeks } from "./reservation.selector";
import {
  invokeSaveNewInscriptionAPI,
  invokeWeeksAPI,
  saveNewInscriptionAPISuccess,
  weeksFetchAPISuccess
} from "./reservation.action";
import { WeeksService } from "../../../service/weeks.service";
import { setAPIStatus } from "../../../shared/store/app.action";
import { ReservationService } from "../../../service/reservation.service";
import { AppState } from "../../../shared/store/appState";

@Injectable()
export class ReservationEffects {
  constructor(
    private actions$: Actions,
    private weeksService: WeeksService,
    private reservationService: ReservationService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  loadAllWeeks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeWeeksAPI),
      withLatestFrom(this.store.pipe(select(selectWeeks))),
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
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.reservationService.create(action.newInscription).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewInscriptionAPISuccess({ newInscription: data });
          })
        );
      })
    );
  });
}
