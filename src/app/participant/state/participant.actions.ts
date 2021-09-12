/* NgRx */
import { createAction, props } from '@ngrx/store';
import { Participant } from 'src/app/models/Participant';

export const setCurrentParticipant = createAction(
  '[Participant] Set Current Participant',
  props<{ participant: Participant }>()
);

export const clearCurrentParticipant = createAction(
  '[Participant] Clear Current Participant'
);

export const initializeCurrentParticipant = createAction(
  '[Participant] Initialize Current Participant'
);

export const loadParticipants = createAction(
  '[Participant] Load'
);

export const loadParticipantsSuccess = createAction(
  '[Participant] Load Success',
  props<{ participants: Participant[] }>()
);

export const loadParticipantsFailure = createAction(
  '[Participant] Load Fail',
  props<{ error: string }>()
);
