import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import { Subscription as Inscription } from "../models/Graphqlx";
import { InscriptionsService } from "../../src/app/service/inscriptions.service";

export interface MailPayload {
  subject: string,
  year: string,
  salutation: string,
  state: string,
  week: string,
  date: string,
  name: string,
  street1: string,
  street2: string | undefined,
  city: string,
  country: string,
  email: string,
  phone: string,
  participants: object,
  datetoday: string,
  waitinglist: boolean
}

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify('Payload required'),
    };
  }

  const requestPayload: MailPayload = JSON.parse(event.body ?? '');

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`${process.env['URL']}/.netlify/functions/emails/subscribed`, {

    headers: {
      'netlify-emails-secret': process.env['NETLIFY_EMAILS_SECRET'] as string,
    },
    method: 'POST',
    body: JSON.stringify({
      from: process.env['EMAIL_SENDER'],
      to: requestPayload.email,
      subject: requestPayload.subject,
      parameters: {
        ...requestPayload
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify('Subscribe email sent!'),
  };
};

export { handler };
