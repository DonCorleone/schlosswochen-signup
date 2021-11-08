// Homework

/* NgRx */
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../../models/user';

// State for this feature (User)
export interface State {
  user: UserState;
}

interface UserState {
  currentUser: User;
}

const initialState: UserState = {
  currentUser: null!,
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(
  getUserFeatureState,
  (state) => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.setUser, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.currentUser,
    };
  })
);
