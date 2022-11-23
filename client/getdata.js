/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

import { post, get } from 'request'; // "Request" library

const client_id = 'e187afb42b73476980c03329ce8256eb'; // Your client id
const client_secret = 'c8b47ada78f74dfbaffa9527f8d49ee1'; // Your secret

// your application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: `Basic ${new Buffer(`${client_id}:${client_secret}`).toString('base64')}`
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

post(authOptions, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // use the access token to access the Spotify Web API
    const token = body.access_token;
    const options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true
    };
    get(options, (error, response, body) => {
      console.log(body);
    });
  }
});