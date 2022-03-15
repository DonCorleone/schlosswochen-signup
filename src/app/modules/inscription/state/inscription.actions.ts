import { createAction, props } from '@ngrx/store';
import {
  Participant,
  Subscription as Inscription,
  Week,
} from '../../../models/Graphqlx';
import { Place } from '../../../models/Interfaces';

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

export const setPlaces = createAction(
  '[Inscription] Set Places',
  props<{ places: Place[] }>()
);

export const setWeek = createAction(
  '[Inscription] Set Week',
  props<{ week: Week }>()
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
