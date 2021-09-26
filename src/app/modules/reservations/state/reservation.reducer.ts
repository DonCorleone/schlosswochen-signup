import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { WeeklyReservation } from "src/app/models/Week";
import * as ReservationAction from "./reservation.action";

export interface ReservationState {
  weeklyReservation: WeeklyReservation
  subscriptionId: string,
  deadline: Date
};

const initialState: ReservationState = {
  weeklyReservation: {
    weeknr: 0,
    numberOfReservations: 0
  },
  subscriptionId: '',
  deadline: new Date()
};

export const reservationFeatureKey = 'reservations';

const getReservationFeatureSector = createFeatureSelector<ReservationState>(reservationFeatureKey);

export const getWeeklyReservation = createSelector(
  getReservationFeatureSector,
  state => state.weeklyReservation
)

export const getSubscriptionId = createSelector(
  getReservationFeatureSector,
  state => state.subscriptionId
)

export const getDeadline = createSelector(
  getReservationFeatureSector,
  state => state.deadline
)

export const reservationReducer = createReducer<ReservationState>(
  initialState,
  on(ReservationAction.setWeeklyReservation, (state, action) => {
    return {
      ...state,
      weeklyReservation: action.weeklyReservation
    };
  }),
  on(ReservationAction.setSubscriptionId, (state, action) => {
    return {
      ...state,
      subscriptionId: action.subscriptionId
    };
  }),
  on(ReservationAction.setDeadline, (state, action) => {
    return {
      ...state,
      deadline: action.deadline
    };
  })
);
