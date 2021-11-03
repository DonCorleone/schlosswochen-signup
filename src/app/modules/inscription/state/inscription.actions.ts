import { createAction, props } from '@ngrx/store';
import { Subscription as Inscription } from '../../../models/Graphqlx';

export const setInscription = createAction(
  '[Inscription] Set Inscription',
  props<{ inscription: Inscription }>()
);
