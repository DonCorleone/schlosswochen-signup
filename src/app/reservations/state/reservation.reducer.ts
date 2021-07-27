import { createAction, createReducer, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';

export interface ReservationState {
  showCheatSheet:boolean,
  numberOfChildren:number,
  weekNumer:number
}

export interface State extends AppState.State {
  reservations: ReservationState

}
export const reservationReducer = createReducer<ReservationState>(
  { showCheatSheet: false } as ReservationState,
  on(createAction('[Reservations] Toggle Show Cheat Sheet'), (state): ReservationState => {
    return {
      ...state,
      showCheatSheet: !state.showCheatSheet
    };
  })
);
