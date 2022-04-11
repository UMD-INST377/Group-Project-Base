/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();
// eslint-disable-next-line no-shadow
router.get('/', (req, res) => {
  res.send('You touched the artists routes');
  res.json({message: 'Welcome to Artist API'});
});
router.use('/artists', artistsRoutes);
router.route('/artists').get(async (req, res) => {
  try {
    const artistId = await db.artist_id.findAll();
    const reply = artistId.length > 0 ? {data: artistId} : {message: 'No Result'};
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Did not get here');
  }
});
router.route('/artists/:artist_id').get(async(req, res) => {
  try {
    const artistId = await db.artist_id.findAll({
      where: {
        artist_id: req.params.country_id
      }

    });
    res.json(artistId);
  } catch (err) {
    console.error(err);
    res.send('Did not get here');
  }
});

export default router;
