import { createAction, props } from "@ngrx/store";
import { Subscription as Inscription, SubscriptionInsertInput, Week } from "../../../../../netlify/models/Graphqlx";

export const invokeWeeksAPI = createAction(
  '[Weeks API] Invoke Weeks Fetch API'
);

export const weeksFetchAPISuccess = createAction(
  '[Weeks API] Fetch API Success',
  props<{ allWeeks: Week[] }>()
);

export const invokeSaveNewInscriptionAPI = createAction(
  '[Inscription API] Invoke save new Inscription api',
  props<{ newInscription: SubscriptionInsertInput }>()
);

export const saveNewInscriptionAPISuccess = createAction(
  '[Inscription API] save new Inscription api success',
  props<{ newInscription: Inscription  }>()
);
