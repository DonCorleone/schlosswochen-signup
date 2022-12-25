import { Handler } from '@netlify/functions';
import { Week } from "../models/weekModel";

const fetch = require('node-fetch');

export interface Data {
  weeks: Week[];
}

export interface GetWeeksPayload {
  data: Data;
}

export interface GetWeeksResponse {
  message: GetWeeksPayload;
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
          query ($year: Int) {
            weeks(query: { year: $year }, sortBy: WEEK_ASC) {
              dateFrom
              dateTo
              week
              maxParticipants
              published
            }
          }
      `,
        variables: { year: event?.queryStringParameters?.year },
      }),
    }
  )
    .then((res: any) => res.json())
    .then((result: GetWeeksResponse) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: result }),
      };
    });
};
export { handler };
