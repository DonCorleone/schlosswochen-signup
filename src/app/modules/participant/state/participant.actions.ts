/* NgRx */
import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Participant } from 'src/app/models/Participant';

export const increaseCurrentParticipantNumber = createAction(
  '[Participant] Increase Current ParticipantNumber'
);

export const decreaseCurrentParticipantNumber = createAction(
  '[Participant] Decrease Current ParticipantNumber'
);

export const getCurrentParticipantNumber = createAction(
  '[Participant] Get Current ParticipantNumber'
);

export const loadParticipants = createAction(
  '[Participant/API] Load Participants',
  props<{ participants: Participant[] }>()
);

export const addParticipant = createAction(
  '[Participant/API] Add Participant',
  props<{ participant: Participant }>()
);

export const upsertParticipant = createAction(
  '[Participant/API] Upsert Participant',
  props<{ participant: Participant }>()
);

export const addParticipants = createAction(
  '[Participant/API] Add Participants',
  props<{ participants: Participant[] }>()
);

export const upsertParticipants = createAction(
  '[Participant/API] Upsert Participants',
  props<{ participants: Participant[] }>()
);

export const updateParticipant = createAction(
  '[Participant/API] Update Participant',
  props<{ participant: Update<Participant> }>()
);

export const updateParticipants = createAction(
  '[Participant/API] Update Participants',
  props<{ participants: Update<Participant>[] }>()
);

export const deleteParticipant = createAction(
  '[Participant/API] Delete Participant',
  props<{ id: string }>()
);

export const deleteParticipants = createAction(
  '[Participant/API] Delete Participants',
  props<{ ids: string[] }>()
);

export const clearParticipants = createAction(
  '[Participant/API] Clear Participants'
);

export const loadParticipantsSuccess = createAction(
  '[Participant] Load Success',
  props<{ participants: Participant[] }>()
);

export const loadParticipantsFailure = createAction(
  '[Participant] Load Fail',
  props<{ error: string }>()
);
