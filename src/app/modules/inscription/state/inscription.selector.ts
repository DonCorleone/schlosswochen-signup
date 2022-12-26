import { createFeatureSelector } from "@ngrx/store";
import { StatusQuo } from "../../reservations/state/weeks.reducer";

export const selectInscription = createFeatureSelector<StatusQuo>('myWeeks');
