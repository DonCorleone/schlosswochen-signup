import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StatusQuo } from '../state/reservation.reducer';
export const selectWeeks = createFeatureSelector<StatusQuo>('myReservation');
export const getDeadline = createSelector(
  selectWeeks,
  (state) => new Date(state.inscription.deadline)
);
export const getCurrentParticipantNumber = createSelector(
  selectWeeks,
  (state) => state.currentParticipantNumber
);

export const getPlaces = createSelector(
  selectWeeks,
  (state) => state.places
);

