import { Week } from './Graphqlx';

export enum ReservationState {
  TEMPORARY = 'temporary',
  TEMPORARY_WAITINGLIST = 'temporaryWaitingList',
  DEFINITIVE = 'definitive',
  DEFINITIVE_WAITINGLIST = 'definitiveWaitingList',
}

export interface Place {
  placeNumber: number;
  reservationState: ReservationState;
}

export interface WeeklyReservation {
  week: Week;
  numberOfReservations: number;
  state: ReservationState;
}

export interface WeekVM extends Week {
  participantsPerStates: any;
  sumPerWeek: number;
  freePlacesThisWeek: number;
  placesOnWaitingList: number;
}
