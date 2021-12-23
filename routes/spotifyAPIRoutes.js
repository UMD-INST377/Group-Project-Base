import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/albumCover/:albumName/:artistName')
  .post(async (req, res) => {
    try {
      const albumName = req.params.albumName
      const artistName = req.params.artistName
      const apiEndpoint = `https://api.spotify.com/v1/search?q=${albumName}%20${artistName}&type=album&limit=5`;
      const authEndpoint = 'https://accounts.spotify.com/api/token';
      const clientId = '';
      const clientSecret = '';

      const authString = `${clientId}:${clientSecret}`;
      const authorization = Buffer.from(authString).toString('base64');

      const authToken = await fetch(authEndpoint, {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${authorization}`
        }
      });
      const data = await authToken.json();
      const token = data.access_token;
      const result = await fetch(apiEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        }
      });
      const albumResults = await result.json();
      const albumItems = albumResults.albums.items;
      res.send(albumItems[0])
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;
