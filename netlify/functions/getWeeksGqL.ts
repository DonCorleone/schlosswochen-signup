import { Handler } from '@netlify/functions';
const fetch = require('node-fetch')

const handler: Handler = async (event, context) => {
  return fetch('https://www.learnwithjason.dev/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetLearnWithJasonEpisodes($now: DateTime!) {
          allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
            date
            title
            guest {
              name
              twitter
            }
            description
          }
        }
      `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  })
    .then((res: any) => res.json())
    .then((result: any) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: result }),
      };
    });
};
export { handler };
