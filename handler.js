import 'source-map-support/register';
import { render } from './src/server';
import middy from 'middy';
import {cors} from 'middy/middlewares'


export const serve = middy(async (event, context, callback) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html'
    },
    body: await render(),
  };
}).use(cors())
