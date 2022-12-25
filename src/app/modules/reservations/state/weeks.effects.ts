import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, map, mergeMap, withLatestFrom } from "rxjs";
import { selectWeeks } from "./weeks.selector";
import { invokeWeeksAPI, weeksFetchAPISuccess } from "./weeks.action";
import { WeeksService } from "../../../service/weeks.service";

@Injectable()
export class WeeksEffect {
  constructor(
    private actions$: Actions,
    private weeksService: WeeksService,
    private store: Store
  ) {}

  loadAllWeeks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeWeeksAPI),
      withLatestFrom(this.store.pipe(select(selectWeeks))),
      mergeMap(([, weeksFromStore]) => {
        if (weeksFromStore.length > 0) {
          return EMPTY;
        }
        return this.weeksService
          .get()
          .pipe(map((data) => weeksFetchAPISuccess({ allWeeks: data })));
      })
    )
  );
}
