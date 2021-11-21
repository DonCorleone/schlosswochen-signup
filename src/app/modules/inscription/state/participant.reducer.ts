/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as ParticipantActions from './participant.actions';
import * as AppState from '../../../state/app.state';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Participant} from "../../../models/Graphqlx";

export const participantsFeatureKey = 'participants';

// Extends the app state to include the participant feature.
// This is required because participants are lazy loaded.
// So the reference to ParticipantState cannot be added to app.state.ts directly.

export interface ParticipantState extends EntityState<Participant> {
  currentParticipantNumber: number;
}

export interface State extends AppState.State {
}

export const adapter: EntityAdapter<Participant> = createEntityAdapter<Participant>();

export const initialState: ParticipantState = adapter.getInitialState({
  currentParticipantNumber: 0!,
});

// Selector functions
const getParticipantFeatureState = createFeatureSelector<ParticipantState>('participants');

export const getCurrentParticipantNumber = createSelector(
  getParticipantFeatureState,
  state => state.currentParticipantNumber
);

export const participantReducer = createReducer(
  initialState,
  on(ParticipantActions.increaseCurrentParticipantNumber, (state): ParticipantState => {
    return {
      ...state,
      currentParticipantNumber: state.currentParticipantNumber + 1
    };
  }),
  on(ParticipantActions.decreaseCurrentParticipantNumber, (state): ParticipantState => {
    return {
      ...state,
      currentParticipantNumber: state.currentParticipantNumber - 1
    };
  }),
  on(ParticipantActions.resetCurrentParticipantNumber, (state): ParticipantState => {
    return {
      ...state,
      currentParticipantNumber: 0
    };
  }),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

