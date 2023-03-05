import { Week_Capacity } from "../../../netlify/models/Graphqlx";

export interface WeekCapacityCalculated extends Week_Capacity {

  sumPerWeek: number;
  freePlacesThisWeek: number;
  placesOnWaitingList: number;
}
