import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { ReservationState } from "./reservation.reducer";

const getReservationFeatureSector = createFeatureSelector<ReservationState>('reservations');

export const getWeeklyReservation = createSelector(
  getReservationFeatureSector,
  state => state.weeklyReservation
)
