import { Handler } from '@netlify/functions';
import { GetWeeksResponse } from "../models/weekModel";

const fetch = require('node-fetch');

const handler: Handler = async (event, context) => {
  return fetch(
    `https://realm.mongodb.com/api/client/v2.0/app/${process.env.APP_ID_REALM!}/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: process.env.FETCH_GRAPHQL,
      },
      body: JSON.stringify({
        query: `
          query ($externalUserId: String!) {
            subscription(query: { externalUserId: $externalUserId }) {
              _id
              externalUserId
              reservationDate
              week
              year
              numOfChildren
              email
              phone
              salutation
              firstName
              lastName
              street1
              street2
              zip
              city
              country
              participants {
                participant_id
                externalUserId
                salutation
                firstNameParticipant
                lastNameParticipant
                birthday
                comment
                fotoAllowed
              }
            }
          }
      `,
        variables: { externalUserId: event?.queryStringParameters?.userId },
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
