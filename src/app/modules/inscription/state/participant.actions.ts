import { createAction, props } from '@ngrx/store';
import { Participant } from '../../../models/Graphqlx';

export const increaseCurrentParticipantNumber = createAction(
  '[Participant] Increase Current ParticipantNumber'
);

export const decreaseCurrentParticipantNumber = createAction(
  '[Participant] Decrease Current ParticipantNumber'
);

export const resetCurrentParticipantNumber = createAction(
  '[Participant] Reset Current ParticipantNumber'
);
