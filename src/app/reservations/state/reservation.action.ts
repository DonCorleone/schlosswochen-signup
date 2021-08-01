import { ActionCreator, createAction, props } from "@ngrx/store";
import { WeeklyReservation } from "src/app/models/Week";

export const showCheatSheetAction = createAction(
  '[Reservation] Toggle Show Cheat Sheet'
);

export const setNumberOfChildren = createAction(
  '[Reservation] Set Number of Children',
  props<{numberOfChildren: number}>()
);

export const setWeekNumber = createAction(
  '[Reservation] Set Week Number',
  props<{weekNumber: number}>()
);

export const setWeeklyReservation= createAction(
  '[Reservation] Set Weekly Reservation',
  props<{weeklyReservation: WeeklyReservation}>()
);
