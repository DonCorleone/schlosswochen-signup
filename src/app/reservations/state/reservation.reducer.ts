import { createReducer, on, Store } from "@ngrx/store";
import { WeeklyReservation } from "src/app/models/Week";
import * as AppState from '../../state/app.state';
import * as ReservationAction from "./reservation.action";

export interface ReservationState {
  weeklyReservation: WeeklyReservation
  subscriptionId: String
};

const initialState: ReservationState = {
  weeklyReservation: {
    weeknr: 0,
    numberOfReservations: 0
  },
  subscriptionId: ''
};

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
  })
);
