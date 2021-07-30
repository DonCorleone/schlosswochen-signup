import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { ReservationState } from "./reservation.reducer";

const getReservationFeatureSector = createFeatureSelector<ReservationState>('reservations');

export const getShowCheatSheet = createSelector(
  getReservationFeatureSector,
  state => state.showCheatSheet
)

export const getNumberOfChildren = createSelector(
  getReservationFeatureSector,
  state => state.numberOfChildren
)

export const getWeekNumber = createSelector(
  getReservationFeatureSector,
  state => state.weekNumer
)
