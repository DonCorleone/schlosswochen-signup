import { createAction, props } from "@ngrx/store";
import * as graphqlx from "../../../models/Graphqlx";

export const setSubscription = createAction(
  '[Subscription] Set Subscription',
  props<{ subscription: graphqlx.Subscription }>()
);
