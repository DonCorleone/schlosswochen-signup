import { createFeatureSelector } from "@ngrx/store";
import { StatusQuo } from "../../reservations/state/reservation.reducer";

export const selectInscription = createFeatureSelector<StatusQuo>('myReservation');
