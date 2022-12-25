import { createReducer, on } from "@ngrx/store";
import { Week } from "../../../../../netlify/models/Graphqlx";
import { weeksFetchAPISuccess } from "./weeks.action";

export const initialState: ReadonlyArray<Week> = [];

export const weekReducer = createReducer(
  initialState,
  on(weeksFetchAPISuccess, (state, { allWeeks }) => {
    return allWeeks;
  })
);
