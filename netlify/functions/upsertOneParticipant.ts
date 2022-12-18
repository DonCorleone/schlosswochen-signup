import { Handler } from '@netlify/functions';
import {
  ParticipantInsertInput,
  ParticipantQueryInput,
  Subscription as Inscription,
} from 'netlify/models/Graphqlx';

const fetch = require('node-fetch');
export interface upsertOneParticipantPayload {
  insertOneSubscription: Inscription;
}

export interface Message {
  data: upsertOneParticipantPayload;
}

export interface upsertOneParticipantResponse {
  message: upsertOneParticipantPayload;
}

export interface upsertOneParticipantRequestPayload {
  query: ParticipantQueryInput;
  data: ParticipantInsertInput;
}

const handler: Handler = async (event, context) => {
  const requestPayload: upsertOneParticipantRequestPayload = JSON.parse(
    event.body ?? ''
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
            $data: ParticipantInsertInput!
          ) {
            upsertOneParticipant(
              query: $query,
              data: $data
            ) {
              _id
              participant_id
            }
          }
      `,
        variables: {
          query: { ...requestPayload.query },
          data: { ...requestPayload.data },
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
