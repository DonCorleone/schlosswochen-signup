import * as AppState from '../../state/app.state';

import { Inscriptor } from "src/app/models/Inscriptor";
import * as InscriptionAction from "./inscription.actions"
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const inscriptionFeatureKey = 'inscription';

export interface State extends AppState.State {
  inscription: Inscriptor;
}

export interface InscriptionState {
  inscription: Inscriptor
};

const initialState: InscriptionState = {
  inscription: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: 'Initialized',
    zip: '',
    participants:[]
  }
}

// Selector functions
const getInscriptionFeatureState = createFeatureSelector<InscriptionState>(inscriptionFeatureKey);

export const getInscription = createSelector(
  getInscriptionFeatureState,
  state => state.inscription
);

export const inscriptionReducer = createReducer<InscriptionState>(
  initialState,
  on(InscriptionAction.setInscription, (state, action) => {
    return {
      ...state,
      inscription: action.inscription
    };
  })
);
