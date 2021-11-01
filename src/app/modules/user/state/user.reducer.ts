// Homework

/* NgRx */
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from 'oidc-client';

// State for this feature (User)
export interface State {
  user: UserState;
}

interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null!,
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  (state) => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  }),
  on(UserActions.setUser, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.currentUser,
    };
  })
);
