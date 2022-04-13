/* eslint-disable no-unused-vars */
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
router.post('/artists', async (req, res) => {
  const artistsid = await db.artists.findAll();
  const currentId = (await artistsid.length) + 1;
  try {
    const newArtists = await db.artists.create({
      artist_id: currentId,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      country_id: req.body.country_id

    });
    res.send('artist added');
  } catch (err) {
    console.log(err);
    console.log(currentId);
    res.send(err);
  }
});
router.put('/artists', async (req, res) => {
  try {
    await db.artists.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country_id: req.body.hall_country_id
      },
      {
        where: {
          country_id: req.body.country_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.delete('/artists/:artistId', async (req, res) => {
  try {
    await db.artists.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

export default router;
