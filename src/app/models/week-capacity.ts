import { Week } from "../../../netlify/models/Graphqlx";

export interface WeekCapacity extends Week {
  participantsPerStates: any;
  sumPerWeek: number;
  freePlacesThisWeek: number;
  placesOnWaitingList: number;
}
