import SpotifyWebApi from 'spotify-web-api-node';

/**
 * This example retrieves an access token using the Client Credentials Flow, documented at:
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */

/**
 * Get the credentials from Spotify's Dashboard page.
 * https://developer.spotify.com/dashboard/applications
 */
const spotifyApi = new SpotifyWebApi({
  clientId: 'e187afb42b73476980c03329ce8256eb',
  clientSecret: 'c8b47ada78f74dfbaffa9527f8d49ee1'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  (data) => {
    console.log(`The access token expires in ${data.body.expires_in}`);
    console.log(`The access token is ${data.body.access_token}`);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body.access_token);
  },
  (err) => {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  }
);

export default spotifyApi;
