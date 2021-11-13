import { State as ReservationState } from '../modules/reservations/state/reservation.reducer';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  reservations: ReservationState;
}
