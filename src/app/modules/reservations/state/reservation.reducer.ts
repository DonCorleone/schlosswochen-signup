import { createReducer, on } from "@ngrx/store";
import { Subscription, Week } from "../../../../../netlify/models/Graphqlx";
import {
  saveNewInscriptionAPISuccess,
  updateInscriptionAPISuccess,
  upsertChild,
  weeksFetchAPISuccess
} from "./reservation.action";
import * as InscriptionAction from "../../inscription/state/inscription.actions";

export interface StatusQuo {
  inscription: Subscription;
  weeks: ReadonlyArray<Week>;
}
export const initialState: StatusQuo = {
  inscription: {  },
  weeks: []
}

export const weekReducer = createReducer(
  initialState,
  on(weeksFetchAPISuccess, (state, { allWeeks }) => {
    return {inscription: {}, weeks: allWeeks};
  }),
  on(saveNewInscriptionAPISuccess, (state, { newInscription }) => {
    return {
      ...state,
      inscription: newInscription,
    };
  }),
  on(updateInscriptionAPISuccess, (state, { updateInscription }) => ({
    ...state,
    inscription: updateInscription,
  })),
  on(upsertChild, (state, { child }) => {
    const index = state.inscription.children?.findIndex(
      (child) => child?.participant_id === child?.participant_id
    ); //finding index of the item

    if (index! < 0 || !state.inscription?.children) {
      return {
        ...state,
        inscription: {
          ...state.inscription,
          children: [...state.inscription.children!, child],
        },
      };
    }
    const newArray = [...state.inscription.children!]; //making a new array

    newArray[index!] = child; //changing value in the new array

    const inscription = { ...state.inscription };
    inscription.children = newArray;

    return {
      ...state, //copying the orignal state
      inscription,
    };
  }),
);
