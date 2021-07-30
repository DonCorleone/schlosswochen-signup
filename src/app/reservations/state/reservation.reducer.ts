import { createReducer, on, Store } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import * as ReservationAction from "./reservation.action";

export interface ReservationState {
  showCheatSheet:boolean,
  numberOfChildren:number,
  weekNumer:number
};

export interface State extends AppState.State {
  reservations: ReservationState
};

const initialState: ReservationState = {
  showCheatSheet: false,
  numberOfChildren: 0,
  weekNumer: 0
};

export const reservationReducer = createReducer<ReservationState>(
  initialState,
  on(ReservationAction.showCheatSheetAction, (state): ReservationState => {
    return {
      ...state,
      showCheatSheet: !state.showCheatSheet
    };
  }),
  on(ReservationAction.setNumberOfChildren, (state, action) => {
    return {
      ...state,
      numberOfChildren: action.numberOfChildren
    };
  }),
  on(ReservationAction.setWeekNumber, (state, action) => {
    return {
      ...state,
      weekNumer: action.weekNumber
    };
  })
);
