import * as InscriptionAction from './inscription.actions';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { Subscription as Inscription, Week } from 'netlify/models/Graphqlx';
import { Place } from '../../../models/Interfaces';

export const inscriptionFeatureKey = 'inscription';

export interface InscriptionState {
  currentParticipantNumber: number;
  places: Place[];
}

const initialState: InscriptionState = {
  currentParticipantNumber: 0,
  places: [],
};

// Selector functions
const getInscriptionFeatureState = createFeatureSelector<InscriptionState>(
  inscriptionFeatureKey
);

export const getCurrentParticipantNumber = createSelector(
  getInscriptionFeatureState,
  (state) => state.currentParticipantNumber
);

export const getPlaces = createSelector(
  getInscriptionFeatureState,
  (state) => state.places
);



/*// selector with param
export const selectParticipantById = (participantId: string) =>
  createSelector(selectParticipantId, (inscription: Inscription) =>
    inscription?.participants?.find((c) => c?.participant_id === participantId)
  );*/

export const inscriptionReducer = createReducer<InscriptionState>(
  initialState,
/*  on(InscriptionAction.setInscription, (state, action) => {
    return {
      ...state,
      inscription: action.inscription,
    };
  }),*/



  /*  on(InscriptionAction.upsertParticipant, (state, action) => {
    const index = state.inscription.participants?.findIndex(
      (participant) =>
        participant?.participant_id === action.participant.participant_id
    ); //finding index of the item

    // @ts-ignore
    const newArray = [...state.inscription?.participants]; //making a new array

    newArray[index!] = action.participant; //changing value in the new array

    const inscription = { ...state.inscription };
    inscription.participants = newArray;

    return {
      ...state, //copying the orignal state
      inscription,
    };
  }),*/

  on(InscriptionAction.setPlaces, (state, action): InscriptionState => {
    return {
      ...state,
      places: [...action.places],
    };
  }),

  on(
    InscriptionAction.increaseCurrentParticipantNumber,
    (state): InscriptionState => {
      return {
        ...state,
        currentParticipantNumber: state.currentParticipantNumber + 1,
      };
    }
  ),
  on(
    InscriptionAction.decreaseCurrentParticipantNumber,
    (state): InscriptionState => {
      return {
        ...state,
        currentParticipantNumber: state.currentParticipantNumber - 1,
      };
    }
  ),
  on(
    InscriptionAction.resetCurrentParticipantNumber,
    (state): InscriptionState => {
      return {
        ...state,
        currentParticipantNumber: 0,
      };
    }
  )
);
