import { createFeatureSelector } from '@ngrx/store';
import { Week } from "../../../../../netlify/models/Graphqlx";

export const selectWeeks = createFeatureSelector<Week[]>('myWeeks');
