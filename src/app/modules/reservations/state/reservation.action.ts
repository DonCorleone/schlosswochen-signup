import { createAction, props } from "@ngrx/store";
import {
  Subscription as Inscription,
  SubscriptionChild,
  SubscriptionInsertInput,
  Week
} from "../../../../../netlify/models/Graphqlx";

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
export const invokeUpdateInscriptionAPI = createAction(
  '[Inscription API] Invoke update Inscription api',
  props<{ updateInscription: Inscription }>()
);
export const updateInscriptionAPISuccess = createAction(
  '[Inscription API] update Inscription api success',
  props<{ updateInscription: Inscription }>()
);
export const invokeInscriptionAPI = createAction(
  '[Inscription API] Invoke Inscription Fetch API'
);
export const inscriptionFetchAPISuccess = createAction(
  '[Inscription API] Fetch Inscription Success',
  props<{ inscription: Inscription }>()
);
export const upsertChild = createAction(
  '[Inscription] Upsert Child',
  props<{ child: SubscriptionChild }>()
);
export const increaseCurrentParticipantNumber = createAction(
  '[Participant] Increase Current ParticipantNumber'
);
export const decreaseCurrentParticipantNumber = createAction(
  '[Participant] Decrease Current ParticipantNumber'
);
export const resetCurrentParticipantNumber = createAction(
  '[Participant] Reset Current ParticipantNumber'
);
