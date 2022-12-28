import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from '../state/reservation.reducer';
export const selectWeeks = createFeatureSelector<State>('myReservation');
export const getDeadline = createSelector(
  selectWeeks,
  (state) => new Date(state.inscription.deadline)
);
export const getCurrentParticipantNumber = createSelector(
  selectWeeks,
  (state) => state.currentParticipantNumber
);
