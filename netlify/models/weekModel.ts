export interface Week {
  dateFrom: Date;
  dateTo: Date;
  maxParticipants: number;
  published: boolean;
  week: number;
}

export interface Data {
  weeks: Week[];
}

export interface GetWeeksPayload {
  data: Data;
}

export interface GetWeeksResponse {
  message: GetWeeksPayload;
}

export interface ServerDataWeeks {
  _id: string;
  week: number;
  year: number;
  'date-from': Date;
  'date-to': Date;
  published: boolean;
  maxParticipants: number;
}

export interface ServerResponseWeek {
  message: ServerDataWeeks[];
}

export interface SumChildsPerState {
  state: string;
  sumPerStateAndWeek: number;
}

export interface Data {
  sumChildsPerState: SumChildsPerState[];
}

export interface SumChildsPerStatePayload {
  data: Data;
}

export interface SumChildsPerStateResponse {
  message: SumChildsPerStatePayload;
}