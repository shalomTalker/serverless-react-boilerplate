import 'source-map-support/register';
import { render } from './src/server';


export const serve = async (event, context, callback) => {
  // render().then(res => {
  //   const response = {
  //     statusCode: 200,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       "Access-Control-Allow-Credentials": true,
  //       "Access-Control-Allow-Methods": 'POST,GET,OPTIONS,HEAD',
  //       'Content-Type': 'text/html'
  //     },
  //     body: res
  //   }
  //   callback(null,response)
  // })
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
