export interface insertOneSubscription {
  _id: string;
  deadline: Date;
  week: number;
  numOfChildren: number;
}

export interface insertOneSubscriptionData {
  insertOneSubscription: insertOneSubscription;
}


export interface Subscriptor {
  _id: string
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  participants: any[];
  externalUserId: string;
}


export interface WeeklyReservationState {
  week:number;
  reservationstates : ReservationType[];
}

export interface ReservationType {
  state: string;
  numOfChildren: number;
}

export interface ChildsPerState {
  state: string;
  sumPerStateAndWeek: string;
}

export interface ChildsPerStateData {
  sumChildsPerState: ChildsPerState[];
}

