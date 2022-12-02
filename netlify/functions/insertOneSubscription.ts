import { Handler } from '@netlify/functions';
import { GetWeeksResponse } from '../models/weekModel';
import { SubscriptionInsertInput } from 'netlify/models/Graphqlx';

const fetch = require('node-fetch');

const handler: Handler = async (event, context) => {
  var subscriptionInsertInput: SubscriptionInsertInput;

  subscriptionInsertInput = event.body as SubscriptionInsertInput;

  console.log(JSON.stringify(subscriptionInsertInput));

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
        mutation insertOneSubscription($data: SubscriptionInsertInput!) {
            insertOneSubscription(data: $data) {
              _id
              city
              country
              deadline
              email
              externalUserId
              firstName
              lastName
              numOfChildren
              participants {
                _id
                birthday
                comment
                externalUserId
                firstNameParticipant
                fotoAllowed
                lastNameParticipant
                participant_id
                salutation
              }
              phone
              reservationDate
              salutation
              state
              street1
              street2
              week
              year
              zip
            }
          }
      `,
        variables : { data: JSON.parse(event.body ?? '') },
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
