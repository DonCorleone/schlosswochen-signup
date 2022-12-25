import { ChildrenPerStateItem, QuerySumChildsPerStateArgs } from "./Graphqlx";

export interface Week {
  dateFrom: Date;
  dateTo: Date;
  maxParticipants: number;
  published: boolean;
  week: number;
}
