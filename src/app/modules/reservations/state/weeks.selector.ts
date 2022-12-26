import { createFeatureSelector } from '@ngrx/store';
import { StatusQuo } from '../state/weeks.reducer';
export const selectWeeks = createFeatureSelector<StatusQuo>('myWeeks');
