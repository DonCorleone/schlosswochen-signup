import { ActionCreator, createAction, props } from "@ngrx/store";
import { WeeklyReservation } from "src/app/models/Week";

export const setWeeklyReservation= createAction(
  '[Reservation] Set Weekly Reservation',
  props<{weeklyReservation: WeeklyReservation}>()
);

export const setSubscriptionId= createAction(
  '[Reservation] Set Subscription ID',
  props<{subscriptionId: String}>()
);
