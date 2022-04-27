import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

// const songsQuery = `SELECT * FROM songs.artist;`;

router.route('/artist').get(async (req, res) => {
  try {
    const art = await db.Artist.findAll();
    res.json({ data: art });
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

router.get('/artist/:artist_id', async (req, res) => {
  try {
    const art = await db.Artist.findAll({
      where: {
        artist_id: req.params.artist_id,
      },
    });
    res.json({ data: art });
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

router.post('/artist', async (req, res) => {
  try {
    const newArtist = await db.Artist.create({
      artist_id: 19,
      label_id: 4,
      stage_name: 'Kehlani',
      first_name: 'Kehlani',
      last_name: 'Parrish',
      gender: 'Female',
      age: '26'
    });
    res.json(newArtist)
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

router.put('/artist/', async (req, res) => {
  try {
    const artistUpdate = await db.Artist.upsert(
      {
        artist_id: req.body.artist_id,
        label_id: req.body.label_id,
        stage_name: req.body.stage_name
      },
      {
        where: {
          artist_id: req.body.artist_id
        }
      });
    res.json('Success. Record Updated')
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

router.delete('/artist/:artist_id', async (req, res) => {
  try {
    const artistDelete = await db.Artist.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.json('Success. Record Deleted')
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

export default router;