import { createFeatureSelector } from '@ngrx/store';
import { StatusQuo } from '../state/reservation.reducer';
export const selectWeeks = createFeatureSelector<StatusQuo>('myReservation');
