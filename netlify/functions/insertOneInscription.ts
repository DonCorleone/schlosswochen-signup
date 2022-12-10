import { Handler } from '@netlify/functions';
import { Subscription as Inscription } from 'netlify/models/Graphqlx';

const fetch = require('node-fetch');
export interface InsertOneInscriptionPayload {
  insertOneSubscription: Inscription;
}

export interface Message {
  data: InsertOneInscriptionPayload;
}

export interface InsertOneInscriptionResponse {
  message: InsertOneInscriptionPayload;
}

const handler: Handler = async (event, context) => {

  console.log("insertOneSubscription body " + event.body);

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
    .then((result: Message) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: result?.data }),
      };
    });
};
export { handler };
