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
