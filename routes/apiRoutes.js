/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////AlbumGenre Endpoints////////
/// /////////////////////////////////
router.get('/genres', async (req, res) => {
  try {
    const halls = await db.Genres.findAll(); 
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genres/:genre_id', async (req, res) => {
  try {
    const hall = await db.Genres.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/genres', async (req, res) => {
  const halls = await db.Genres.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.Genres.create({
      genre_id: currentId,
      genre_name: req.body.genre_name
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/genres', async (req, res) => {
  try {
    await db.Genres.update(
      {
        genre_id: req.body.genre_id,
        genre_name: req.body.genre_name
      },
      {
        where: {
          genre_id: req.body.genre_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/genres/:genre_id', async (req, res) => {
  try {
    await db.Genres.destroy({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
