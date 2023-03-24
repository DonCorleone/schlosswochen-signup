import { Subscription } from "../../../../netlify/models/Graphqlx";

export interface AppState {
  apiStatus: string;
  apiResponseMessage: string;
  data?: Subscription;
}
