/* eslint-disable max-len */
// App Status Development mode (what does this mean?)
// Client ID e187afb42b73476980c03329ce8256eb
// Client Secret c8b47ada78f74dfbaffa9527f8d49ee1

// const { request } = require('express');

function initChart(chart) {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return new Chart(
    chart,
    config
  );
}
async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
}
async function mainEvent() {
  const ctx = document.querySelector('#myChart');
  initChart(ctx);
  const chartData = await getData();

  // API data request
  //   const fs = require('fs');
  //   const SpotifyWebApi = require('spotify-web-api-node');
  //   const token = 'e187afb42b73476980c03329ce8256eb';

  //   const spotifyApi = new SpotifyWebApi();
  //   spotifyApi.setAccessToken(token);
  //   const result = await fetch;
  //   var SpotifyWebApi = require('spotify-web-api-node');
  // const express = require('express')

  // // This file is copied from: https://github.com/thelinmichael/spotify-web-api-node/blob/master/examples/tutorial/00-get-access-token.js

  // const scopes = [
  //     'ugc-image-upload',
  //     'user-read-playback-state',
  //     'user-modify-playback-state',
  //     'user-read-currently-playing',
  //     'streaming',
  //     'app-remote-control',
  //     'user-read-email',
  //     'user-read-private',
  //     'playlist-read-collaborative',
  //     'playlist-modify-public',
  //     'playlist-read-private',
  //     'playlist-modify-private',
  //     'user-library-modify',
  //     'user-library-read',
  //     'user-top-read',
  //     'user-read-playback-position',
  //     'user-read-recently-played',
  //     'user-follow-read',
  //     'user-follow-modify'
  //   ];

  // // credentials are optional
  // var spotifyApi = new SpotifyWebApi({
  //     clientId: 'e187afb42b73476980c03329ce8256eb',
  //     clientSecret: 'c8b47ada78f74dfbaffa9527f8d49ee1',
  //     redirectUri: 'http://localhost:8888/callback'
  //   });

  //   const app = express();

  //   app.get('/login', (req, res) => {
  //     res.redirect(spotifyApi.createAuthorizeURL(scopes));
  //   });

  //   app.get('/callback', (req, res) => {
  //     const error = req.query.error;
  //     const code = req.query.code;
  //     const state = req.query.state;

  //     if (error) {
  //       console.error('Callback Error:', error);
  //       res.send(`Callback Error: ${error}`);
  //       return;
  //     }

  //     spotifyApi
  //       .authorizationCodeGrant(code)
  //       .then(data => {
  //         const access_token = data.body['access_token'];
  //         const refresh_token = data.body['refresh_token'];
  //         const expires_in = data.body['expires_in'];

  //         spotifyApi.setAccessToken(access_token);
  //         spotifyApi.setRefreshToken(refresh_token);

  //         console.log('access_token:', access_token);
  //         console.log('refresh_token:', refresh_token);

  //         console.log(
  //           `Sucessfully retreived access token. Expires in ${expires_in} s.`
  //         );
  //         res.send('Success! You can now close the window.');

  //         setInterval(async () => {
  //           const data = await spotifyApi.refreshAccessToken();
  //           const access_token = data.body['access_token'];

  //           console.log('The access token has been refreshed!');
  //           console.log('access_token:', access_token);
  //           spotifyApi.setAccessToken(access_token);
  //         }, expires_in / 2 * 1000);
  //       })
  //       .catch(error => {
  //         console.error('Error getting Tokens:', error);
  //         res.send(`Error getting Tokens: ${error}`);
  //       });
  //   });

  //   app.listen(8888, () =>
  //     console.log(
  //       'HTTP Server up. Now go to http://localhost:8888/login in your browser.'
  //     )
  //   );
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
