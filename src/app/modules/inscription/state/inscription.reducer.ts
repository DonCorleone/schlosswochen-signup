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
  week: Week;
  inscription: Inscription;
  currentParticipantNumber: number;
  places: Place[];
}

const initialState: InscriptionState = {
  inscription: {
    _id: '',
    week: 0,
    year: 0,
    numOfChildren: 0,
    deadline: new Date(),
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: 'temporary',
    zip: '',
    participants: [],
    children: [],
    externalUserId: '',
  },
  currentParticipantNumber: 0,
  places: [],
  week: {},
};

// Selector functions
const getInscriptionFeatureState = createFeatureSelector<InscriptionState>(
  inscriptionFeatureKey
);

export const getInscription = createSelector(
  getInscriptionFeatureState,
  (state) => state.inscription
);

export const getDeadline = createSelector(
  getInscriptionFeatureState,
  (state) => new Date(state.inscription.deadline)
);

export const getCurrentParticipantNumber = createSelector(
  getInscriptionFeatureState,
  (state) => state.currentParticipantNumber
);

export const getPlaces = createSelector(
  getInscriptionFeatureState,
  (state) => state.places
);

export const getWeek = createSelector(
  getInscriptionFeatureState,
  (state) => state.week
);

export const selectParticipantId = (state: InscriptionState) =>
  state.inscription;

// selector with param
export const selectParticipantById = (participantId: string) =>
  createSelector(selectParticipantId, (inscription: Inscription) =>
    inscription?.participants?.find((c) => c?.participant_id === participantId)
  );

export const inscriptionReducer = createReducer<InscriptionState>(
  initialState,
  on(InscriptionAction.setInscription, (state, action) => {
    return {
      ...state,
      inscription: action.inscription,
    };
  }),
  on(InscriptionAction.addParticipant, (state, action) => {
    return {
      ...state,
      inscription: {
        ...state.inscription,
        participants: [...state.inscription.participants!, action.participant]
      },
    };
  }),
  on(InscriptionAction.addChild, (state, action) => {
    return {
      ...state,
      inscription: {
        ...state.inscription,
        children: [...state.inscription.children!, action.child]
      },
    };
  }),
  on(InscriptionAction.upsertParticipant, (state, action) => {
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
  }),
  on(InscriptionAction.upsertChild, (state, action) => {
    const index = state.inscription.children?.findIndex(
      (child) =>
        child?.participant_id === action.child.participant_id
    ); //finding index of the item

    // @ts-ignore
    const newArray = [...state.inscription?.children]; //making a new array

    newArray[index!] = action.child; //changing value in the new array

    const inscription = { ...state.inscription };
    inscription.children = newArray;

    return {
      ...state, //copying the orignal state
      inscription,
    };
  }),
  on(InscriptionAction.setPlaces, (state, action): InscriptionState => {
    return {
      ...state,
      places: [...action.places],
    };
  }),
  on(InscriptionAction.setWeek, (state, action): InscriptionState => {
    return {
      ...state,
      week: action.week,
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
