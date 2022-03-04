import { Week } from './Graphqlx';

export interface WeeklyReservation {
  week: Week;
  numberOfReservations: number;
}

export interface WeekVM extends Week {
  participantsPerStates: any;
  sumPerWeek: number;
  freePlacesThisWeek: number;
  placesOnWaitingList: number;
}
