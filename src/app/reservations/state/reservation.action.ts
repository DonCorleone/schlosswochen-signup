import { ActionCreator, createAction, props } from "@ngrx/store";

export const showCheatSheetAction = createAction(
  '[Reservations] Toggle Show Cheat Sheet'
);

export const setNumberOfChildren = createAction(
  '[Reservations] Set Number of Children',
  props<{numberOfChildren: number}>()
);

export const setWeekNumber = createAction(
  '[Reservation] Set Week Number',
  props<{weekNumber: number}>()
);
