import { createAction, props } from "@ngrx/store";
import { AppState } from "./appState";

export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{apiStatus: AppState}>()
);
