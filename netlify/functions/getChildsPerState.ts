import { Handler } from '@netlify/functions';
import {SumChildsPerStateResponse} from "../models/weekModel";
const fetch = require('node-fetch');

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
          query ($week: Int!) {
            sumChildsPerState(input: $week) {
              state
              sumPerStateAndWeek
            }
          }
      `,
        variables: { week: event?.queryStringParameters?.week },
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
