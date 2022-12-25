import { createFeatureSelector } from '@ngrx/store';
import { Week } from "../../../../../netlify/models/weekModel";

export const selectWeeks = createFeatureSelector<Week[]>('myWeeks');
