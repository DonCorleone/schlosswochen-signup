import { Handler } from '@netlify/functions';
import { GetWeeksCapacityResponse } from "./getWeeks";

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
          query {
            subscription {
              _id
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
              children {
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
      `
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

