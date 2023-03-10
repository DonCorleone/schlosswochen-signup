import { Handler } from '@netlify/functions';
import { Week_Capacity } from "netlify/models/Graphqlx";

const fetch = require('node-fetch');

export interface Data {
  week_capacities: Week_Capacity[];
}

export interface GetWeekCapacityPayload {
  data: Data;
}

export interface GetWeeksCapacityResponse {
  message: GetWeekCapacityPayload;
}

const handler: Handler = async (event, context) => {

  const url = `https://realm.mongodb.com/api/client/v2.0/app/${process.env.APP_ID_REALM!}/graphql`;
  console.log(url);
  return fetch(url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: process.env.FETCH_GRAPHQL,
      },
      body: JSON.stringify({
        query: `
        query ($year: Int) {
          week_capacities(query: {year: $year}, sortBy: WEEK_ASC) {
            week
            year
            dateFrom
            dateTo
            maxParticipants
            published
            capacity {
              state
              sumPerStateAndWeek
            }
          }
        }
      `,
        variables: { year: event?.queryStringParameters?.year },
      }),
    }
  )
    .then((res: any) => res.json())
    .then((result: GetWeeksCapacityResponse) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: result }),
      };
    });
};
export { handler };
