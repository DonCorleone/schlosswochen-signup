import { Handler } from '@netlify/functions';
import { ServerResponseWeek } from '../models/weekModel';
const axios = require('axios');

const handler: Handler = async (event, context) => {
  const config = {
    method: 'get',
    url: 'https://data.mongodb-api.com/app/schlosswochen-inscription-fggvp/endpoint/weeks',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
    },
  };

  return axios(config)
    .then(function (response: any) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: response.data }),
      };
    })
    .catch(function (error: any) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: error }),
      };
    });
};

export { handler };
