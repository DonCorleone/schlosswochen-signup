export interface InsertOneParticipant {
  _id: string;
  deadline: Date;
  week: number;
  numOfChildren: number;
}

export interface InsertOneParticipantData {
  insertOneParticipant: InsertOneParticipant;
}

export interface Subscriptor {
  data: InsertOneParticipantData;
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
  childsPerState: ChildsPerState[];
}

