import { Subscription } from './Graphqlx';

export interface insertOneSubscription {
  _id: string;
  deadline: Date;
  week: number;
  numOfChildren: number;
}
export interface updateOneSubscriptionData {
  updateOneSubscription: Subscription;
}
export interface insertOneSubscriptionData {
  insertOneSubscription: insertOneSubscription;
}
// export interface graphqlx.Subscripription {
//   _id: string
//   salutation: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   street1: string;
//   street2: string;
//   city: string;
//   state: string;
//   zip: string;
//   participants: any[];
//   externalUserId: string;
// }
export interface ChildsPerState {
  state: string;
  sumPerStateAndWeek: string;
}
export interface ChildsPerStateData {
  sumChildsPerState: ChildsPerState[];
}
