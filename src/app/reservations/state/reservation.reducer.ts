import { createAction, createReducer, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { showCheatSheetAction } from "./reaction.action";

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
  on(showCheatSheetAction, (state): ReservationState => {
    return {
      ...state,
      showCheatSheet: !state.showCheatSheet
    };
  })
);
