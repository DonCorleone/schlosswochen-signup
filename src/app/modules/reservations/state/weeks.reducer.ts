import { createReducer, on } from "@ngrx/store";
import { Subscription, Week } from "../../../../../netlify/models/Graphqlx";
import { saveNewInscriptionAPISuccess, weeksFetchAPISuccess } from "./weeks.action";

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
  })
);
