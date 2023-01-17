import { Week } from 'netlify/models/Graphqlx';

export enum ReservationState {
  TEMPORARY = 'temporary',
  TEMPORARY_WAITINGLIST = 'temporaryWaitingList',
  DEFINITIVE = 'definitive',
  DEFINITIVE_WAITINGLIST = 'definitiveWaitingList',
}


