import { ReservationState } from '../modules/reservations/state/reservation.reducer';
import { UserState } from '../modules/user/state/user.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
  reservations: ReservationState
}
