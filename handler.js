import 'source-map-support/register';
import { render } from './src/server';


export const serve = async (event, context, callback) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'text/html'
    },
    body: await render(),
  };
};
