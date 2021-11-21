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
  participants: ParticipantState;
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

export const getCurrentParticipant = createSelector(
  getParticipantFeatureState,
  state => state.entities[state.currentParticipantNumber]
);

export const getAllParticipants = createSelector(
  getParticipantFeatureState,
  state => state.entities
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
  // on(ParticipantActions.addParticipant,
  //   (state, action) => adapter.addOne(action.participant, state)
  // ),
  // on(ParticipantActions.setParticipantId,
  //   (state, action) => adapter.updateOne(action.participant, state)
  // ),
  // on(ParticipantActions.upsertParticipant,
  //   (state, action) => adapter.upsertOne(action.participant, state)
  // ),
  // on(ParticipantActions.addParticipants,
  //   (state, action) => adapter.addMany(action.participants, state)
  // ),
  // on(ParticipantActions.upsertParticipants,
  //   (state, action) => adapter.upsertMany(action.participants, state)
  // ),
  // on(ParticipantActions.updateParticipant,
  //   (state, action) => adapter.updateOne(action.participant, state)
  // ),
  // on(ParticipantActions.updateParticipants,
  //   (state, action) => adapter.updateMany(action.participants, state)
  // ),
  // on(ParticipantActions.deleteParticipant,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(ParticipantActions.deleteParticipants,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(ParticipantActions.loadParticipants,
  //   (state, action) => adapter.setAll(action.participants, state)
  // ),
  // on(ParticipantActions.clearParticipants,
  //   state => adapter.removeAll(state)
  // ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

