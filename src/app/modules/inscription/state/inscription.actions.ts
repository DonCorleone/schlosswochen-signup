import { createAction, props } from '@ngrx/store';
import {Participant, Subscription as Inscription} from '../../../models/Graphqlx';

export const setInscription = createAction(
  '[Inscription] Set Inscription',
  props<{ inscription: Inscription }>()
);
export const addParticipant = createAction(
  '[Inscription] Add Participant',
  props<{ participant: Participant }>()
);
export const upsertParticipant = createAction(
  '[Inscription] Upsert Participant',
  props<{ participant: Participant }>()
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
