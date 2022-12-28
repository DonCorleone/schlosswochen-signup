import { createAction, props } from '@ngrx/store';
import {
  Subscription,
  Subscription as Inscription, SubscriptionChild,
  Week
} from "netlify/models/Graphqlx";
import { Place } from '../../../models/Interfaces';

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
