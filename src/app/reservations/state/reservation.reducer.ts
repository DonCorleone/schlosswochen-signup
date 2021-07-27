import { createAction, createReducer, on } from "@ngrx/store";
import {  } from "./reservation-page.actions";

export const reservationReducer = createReducer(
  { showCheatSheet: false },
  on(createAction('[Reservations] Toggle Show Cheat Sheet'), state => {
    return {
      ...state,
      showCheatSheet: !state.showCheatSheet
    };
  })
);
