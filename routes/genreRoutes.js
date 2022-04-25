import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/genre').get(async (req, res) => {
  try {
    const genre = await db.genre.findAll();
    res.json({ data: genre });
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

router.get('/genre', (req, res) => {
    res.send('Welcome to the Genre API!');
  });

router.get('/genre/:genre_id', async (req, res) => {
  try {
    const genre = await db.genre.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json({ data: genre });
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

router.post('/genre', async (req, res) => {
  try {
    const newgenre = await db.genre.create({
      genre_id: 19,
      genre_name: 'Rap'
    });
    res.json(newgenre)
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

router.put('/genre/', async (req, res) => {
  try {
    const genreUpdate = await db.genre.update(
      {
        genre_id: req.body.genre_id,
        genre_name: req.genre_name
      },
      {
        where: {
          genre_id: req.body.genre_id
        }
      });
    res.json('Success. Record Updated')
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

router.delete('/genre/:genre_id', async (req, res) => {
  try {
    const genreDelete = await db.genre.destroy({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json('Success. Record Deleted')
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

export default router;