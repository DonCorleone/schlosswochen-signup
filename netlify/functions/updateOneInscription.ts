import { Handler } from '@netlify/functions';
import {
  Subscription as Inscription,
  SubscriptionQueryInput,
  SubscriptionUpdateInput,
} from 'netlify/models/Graphqlx';

const fetch = require('node-fetch');
export interface InsertOneSubscriptionPayload {
  insertOneSubscription: Inscription;
}

export interface Message {
  data: InsertOneSubscriptionPayload;
}

export interface InsertOneSubscriptionResponse {
  message: InsertOneSubscriptionPayload;
}

export interface UpdateOneSubscriptionRequestPayload {
  query: SubscriptionQueryInput;
  set: SubscriptionUpdateInput;
}

const handler: Handler = async (event, context) => {
  const requestPayload: UpdateOneSubscriptionRequestPayload = JSON.parse(
    event.body ?? ''
  );

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
          mutation updateOneSubscription(
            $query: SubscriptionQueryInput!
            $set: SubscriptionUpdateInput!
          ) {
            updateOneSubscription(query: $query, set: $set) {
              _id
              city
              country
              deadline
              email
              externalUserId
              firstName
              lastName
              numOfChildren
              children {
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
        variables: {
          query: { ...requestPayload.query },
          set: { ...requestPayload.set },
        },
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
