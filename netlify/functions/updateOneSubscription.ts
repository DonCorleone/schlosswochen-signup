import { Handler } from '@netlify/functions';
import { GetWeeksResponse } from '../models/weekModel';
import {Subscription as Inscription, SubscriptionQueryInput, SubscriptionUpdateInput} from 'netlify/models/Graphqlx';
import { catchError, EMPTY, map } from 'rxjs';
import { updateOneSubscriptionData } from '../../src/app/service/inscriptions.service';

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
  subscriptionQueryInput: SubscriptionQueryInput,
  subscriptionUpdateInput: SubscriptionUpdateInput
}

const handler: Handler = async (event, context) => {

  var requestPayload:UpdateOneSubscriptionRequestPayload  = JSON.parse(event.body ?? '');

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
          mutation updateOneSubscription(
            $query: SubscriptionQueryInput
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
              zip
            }
          }
      `,
        variables:{
          query: requestPayload.subscriptionQueryInput,
          set: requestPayload.subscriptionUpdateInput,
        }
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
