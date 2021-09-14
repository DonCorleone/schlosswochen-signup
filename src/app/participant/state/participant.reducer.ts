/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as ParticipantActions from './participant.actions';
import * as AppState from '../../state/app.state';
import { Participant } from 'src/app/models/Participant';

// Extends the app state to include the participant feature.
// This is required because participants are lazy loaded.
// So the reference to ParticipantState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  participants: ParticipantState;
}

// State for this feature (Participant)
export interface ParticipantState {
  showParticipantCode: boolean;
  currentParticipant: Participant;
  participants: Participant[];
}

const initialState: ParticipantState = {
  showParticipantCode: true,
  currentParticipant: null!,
  participants: []
};

// Selector functions
const getParticipantFeatureState = createFeatureSelector<ParticipantState>('participants');

export const getCurrentParticipant = createSelector(
  getParticipantFeatureState,
  state => state.currentParticipant
);

export const getParticipants = createSelector(
  getParticipantFeatureState,
  state => state.participants
);

export const participantReducer = createReducer<ParticipantState>(
  initialState,
  on(ParticipantActions.setCurrentParticipant, (state, action): ParticipantState => {
    return {
      ...state,
      currentParticipant: action.participant
    };
  }),
  on(ParticipantActions.clearCurrentParticipant, (state): ParticipantState => {
    return {
      ...state,
      currentParticipant: null!
    };
  }),
  on(ParticipantActions.initializeCurrentParticipant, (state): ParticipantState => {
    return {
      ...state,
      currentParticipant: {
        _id: '',
        birthday: new Date(),
        fotoAllowed: false,
        salutation: '',
        comment: '',
        participant_id: '',
        firstNameParticipant: '',
        lastNameParticipant: ''
      }
    };
  })
);