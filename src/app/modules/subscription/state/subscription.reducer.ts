import * as AppState from '../../../state/app.state';
import * as SubscriptionAction from './subscription.actions';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as graphqlx from '../../../models/Graphqlx';

export const subscriptionFeatureKey = 'subscription';

export interface State extends AppState.State {
  subscription: graphqlx.Subscription;
}

export interface SubscriptionState {
  subscription: graphqlx.Subscription;
}

const initialState: SubscriptionState = {
  subscription: {
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
const getSubscriptionFeatureState = createFeatureSelector<SubscriptionState>(
  subscriptionFeatureKey
);

export const getSubscription = createSelector(
  getSubscriptionFeatureState,
  (state) => state.subscription
);

export const subscriptionReducer = createReducer<SubscriptionState>(
  initialState,
  on(SubscriptionAction.setSubscription, (state, action) => {
    return {
      ...state,
      subscription: action.subscription,
    };
  })
);
