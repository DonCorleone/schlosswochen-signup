import { Handler } from '@netlify/functions';
import { ChildrenPerStateItem, SumPerWeekAndYear } from "../models/Graphqlx";
const fetch = require('node-fetch');

export interface Data {
  sumChildsPerState: SumPerWeekAndYear[];
}

export interface SumChildsPerStatePayload {
  data: Data;
}

export interface SumChildsPerStateResponse {
  message: SumChildsPerStatePayload;
}


const handler: Handler = async (event, context) => {
  return fetch(
    `https://realm.mongodb.com/api/client/v2.0/app/${process.env
      .APP_ID_REALM!}/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: process.env.FETCH_GRAPHQL,
      },
      body: JSON.stringify({
        query: `
          query {
            sumPerWeekAndYears {
              year
              week
              state
              sumPerStateAndWeek
            }
          }
      `
      }),
    }
  )
    .then((res: any) => res.json())
    .then((result: SumChildsPerStateResponse) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: result }),
      };
    });
};
export { handler };
