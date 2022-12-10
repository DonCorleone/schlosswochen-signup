import { Handler } from '@netlify/functions';
import {
  ParticipantInsertInput,
  ParticipantQueryInput, ParticipantUpdateInput,
  Subscription as Inscription, UpdateManyPayload,
} from 'netlify/models/Graphqlx';

const fetch = require('node-fetch');
export interface upsertManyParticipantPayload {
  insertManySubscription: Inscription;
}

export interface Message {
  data: UpdateManyPayload;
}

export interface upsertManyParticipantResponse {
  message: UpdateManyPayload;
}

export interface upsertManyParticipantRequestPayload {
  query: ParticipantQueryInput;
  set: ParticipantUpdateInput;
}

const handler: Handler = async (event, context) => {
  const requestPayload: upsertManyParticipantRequestPayload = JSON.parse(
    event.body ?? ''
  );

  console.log('upsertOneParticipant body ' + event.body);
  console.log(
    'upsertManyParticipant query ' + JSON.stringify(requestPayload.query)
  );
  console.log(
    'upsertManyParticipant set ' + JSON.stringify(requestPayload.set)
  );

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
          mutation (
            $query: ParticipantQueryInput!
            $set: ParticipantInsertInput!
          ) {
            updateManyParticipants(
              query: $query,
              set: $set
            ) {
              matchedCount
            }
          }
      `,
        variables: {
          query: { ...requestPayload.query },
          data: { ...requestPayload.set },
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
