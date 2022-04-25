/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/Album').get(async (req, res) => {
  try {
    const art = await db.album.findAll();
    res.json({data: art});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});
router.get('/album/:album_id', async (req, res) => {
  try {
    const art = await db.album.findAll({
      where: {
        album_id: req.params.album_id
      }
    });
    res.json({data: art});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});
router.post('/album/', async (req, res) => {
  try {
    const newAlbum = await db.album.create({
      album_id: 19,
      release_id: 4,
      genre_id: 4,
      price_id: 4,
      album_name: 'It Was Good Until it Wasnt',
    });
    res.json(newAlbum)
  } catch (error) {
    console.log(error);
    res.send('Server Error')
  }
});
router.put('/album/', async (req, res) => {
  try {
    const albumUpdate = await db.album.upsert(
      {
        album_id: req.body.album_id,
        album_name: req.body.album_name
      },
      {
        where: {
          album_id: req.body.album_id
        }
      });
    res.json('Success. Record Updated')
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

export default router;