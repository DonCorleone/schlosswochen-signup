import { createAction, props } from "@ngrx/store";
import { Subscriptor } from "src/app/models/Subscriptor";

export const setSubscription = createAction(
  '[Subscription] Set Subscription',
  props<{ subscription: Subscriptor }>()
);
