import { Subscription } from './Graphqlx';

export interface subscriptionInsertReturnValue {
  _id: string;
  deadline: Date;
  week: number;
  numOfChildren: number;
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
  sumPerStateAndWeek: number;
}
export interface ChildsPerStateData {
  sumChildsPerState: ChildsPerState[];
}
