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
  data: insertOneSubscriptionData;
}

export interface WeeklyReservationState {
  week:number;
  reservationstates : ReservationState[];
}

export interface ReservationState {
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

