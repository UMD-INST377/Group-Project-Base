/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/artists').get(async (req, res) => {
  try {
    const artistId = await db.artists.findAll();
    const reply = artistId.length > 0 ? {data: artistId} : {message: 'No Result'};
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Did not get here');
  }
});
router.route('/artists/:artist_id').get(async(req, res) => {
  try {
    const artistId = await db.artists.findAll({
      where: {
        artist_id: req.params.artist_id
      }

    });
    res.json(artistId);
  } catch (err) {
    console.error(err);
    res.send('Did not get here');
  }
});

export default router;
