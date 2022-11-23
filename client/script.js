const { request } = require('express');

function initChart() {

}

async function mainEvent() {
  const ctx = document.querySelector('#myChart');

  // API data request
  const fs = require('fs');
  const SpotifyWebApi = require('spotify-web-api-node');
  const token = 'XXXXXX';

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token);
  const result = await fetch;
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
