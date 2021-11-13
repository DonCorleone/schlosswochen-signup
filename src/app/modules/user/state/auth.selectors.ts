import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// get the `auth` property from the state object
export const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

// get the userProfile from the auth state
export const selectCurrentUserProfile = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.userProfile
);

// get the isLoggedIn from the auth state
export const selectIsLoggedIn = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);
