import { createAction, props } from "@ngrx/store";
import { Week } from "../../../../../netlify/models/Graphqlx";

export const invokeWeeksAPI = createAction(
  '[Weeks API] Invoke Weeks Fetch API'
);

export const weeksFetchAPISuccess = createAction(
  '[Weeks API] Fetch API Success',
  props<{ allWeeks: Week[] }>()
);
