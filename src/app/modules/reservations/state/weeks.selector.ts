import { createFeatureSelector } from '@ngrx/store';
import { Week } from '../../../../../netlify/models/Graphqlx';
import { StatusQuo } from '../state/weeks.reducer';
export const selectWeeks = createFeatureSelector<StatusQuo>('myWeeks');
