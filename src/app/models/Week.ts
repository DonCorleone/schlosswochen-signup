import { Week } from './Graphqlx';

export enum reservationState {
  TEMPORARY = 'temporary',
  TEMPORARY_WAITINGLIST = 'temporaryWaitingList',
  DEFINITIVE = 'definitive',
  DEFINITIVE_WAITINGLIST = 'definitiveWaitingList',
}

export interface WeeklyReservation {
  week: Week;
  numberOfReservations: number;
  state: reservationState;
}

export interface WeekVM extends Week {
  participantsPerStates: any;
  sumPerWeek: number;
  freePlacesThisWeek: number;
  placesOnWaitingList: number;
}
