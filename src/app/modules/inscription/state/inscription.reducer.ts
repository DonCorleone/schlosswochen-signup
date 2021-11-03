import * as AppState from '../../../state/app.state';
import * as InscriptionAction from './inscription.actions'
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { Subscription as Inscription } from 'src/app/models/Graphqlx';
export const inscriptionFeatureKey = 'inscription';

export interface State extends AppState.State {
  inscription: Inscription;
}

export interface InscriptionState {
  inscription: Inscription;
}

const initialState: InscriptionState = {
  inscription: {
    _id: '',
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
    externalUserId: '',
  },
};

// Selector functions
const getInscriptionFeatureState = createFeatureSelector<InscriptionState>(
  inscriptionFeatureKey
);

export const getInscription = createSelector(
  getInscriptionFeatureState,
  (state) => state.inscription
);

export const inscriptionReducer = createReducer<InscriptionState>(
  initialState,
  on(InscriptionAction.setInscription, (state, action) => {
    return {
      ...state,
      inscription: action.inscription,
    };
  })
);
