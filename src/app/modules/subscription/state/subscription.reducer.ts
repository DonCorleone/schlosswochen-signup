import * as AppState from '../../../state/app.state';

import { Subscriptor } from "src/app/models/Subscriptor";
import * as SubscriptionAction from "./subscription.actions"
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const subscriptionFeatureKey = 'subscription';

export interface State extends AppState.State {
  subscription: Subscriptor;
}

export interface SubscriptionState {
  subscription: Subscriptor
};

const initialState: SubscriptionState = {
  subscription: {
    _id:'',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: 'temporary',
    zip: '',
    participants:[]
  }
}

// Selector functions
const getSubscriptionFeatureState = createFeatureSelector<SubscriptionState>(subscriptionFeatureKey);

export const getSubscription = createSelector(
  getSubscriptionFeatureState,
  state => state.subscription
);

export const subscriptionReducer = createReducer<SubscriptionState>(
  initialState,
  on(SubscriptionAction.setSubscription, (state, action) => {
    return {
      ...state,
      subscription: action.subscription
    };
  })
);
