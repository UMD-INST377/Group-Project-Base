const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "e187afb42b73476980c03329ce8256eb";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);