/* NgRx */
import { createAction, props } from '@ngrx/store';
import { User } from 'oidc-client';

export const setUser = createAction(
  '[User] Set User',
  props<{ currentUser: User }>()
);
