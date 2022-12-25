import { Week } from 'netlify/models/Graphqlx';

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
  year: number;
  week: Week;
  numberOfReservations: number;
  state: ReservationState;
}

