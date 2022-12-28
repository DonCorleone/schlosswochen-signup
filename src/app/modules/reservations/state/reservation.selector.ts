import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from '../state/reservation.reducer';
export const selector = createFeatureSelector<State>('myReservation');
export const getDeadline = createSelector(
  selector,
  (state) => new Date(state.inscription.deadline)
);
export const getCurrentParticipantNumber = createSelector(
  selector,
  (state) => state.currentParticipantNumber
);
