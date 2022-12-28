import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from '../state/reservation.reducer';
export const reservationSelector = createFeatureSelector<State>('reservationState');
export const getDeadline = createSelector(
  reservationSelector,
  (state) => new Date(state.inscription.deadline)
);
export const getCurrentParticipantNumber = createSelector(
  reservationSelector,
  (state) => state.currentParticipantNumber
);
