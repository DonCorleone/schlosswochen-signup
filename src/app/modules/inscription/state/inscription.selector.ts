import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StatusQuo } from "../../reservations/state/reservation.reducer";
import { Subscription as Inscription } from "../../../../../netlify/models/Graphqlx";

export const selectInscription = createFeatureSelector<StatusQuo>('myReservation');

