import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { WeeklyReservation } from "src/app/models/Week";
import * as ReservationAction from "./reservation.action";

export interface State {
  weeklyReservation: WeeklyReservation,
  deadline: Date
};

const initialState: State = {
  weeklyReservation: {
    weekNr: 0,
    numberOfReservations: 0
  },
  deadline: new Date()
};

export const reservationFeatureKey = 'reservations';

const getReservationFeatureSector = createFeatureSelector<State>(reservationFeatureKey);

export const getWeeklyReservation = createSelector(
  getReservationFeatureSector,
  state => state.weeklyReservation
);

export const getDeadline = createSelector(
  getReservationFeatureSector,
  state => state.deadline
);

export const reservationReducer = createReducer<State>(
  initialState,
  on(ReservationAction.setWeeklyReservation, (state, action) => {
    return {
      ...state,
      weeklyReservation: action.weeklyReservation
    };
  }),

  on(ReservationAction.setDeadline, (state, action) => {
    return {
      ...state,
      deadline: action.deadline
    };
  })
);
