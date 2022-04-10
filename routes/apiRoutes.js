/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Movies API!');
});

/// /////////////////////////////////
/// ////Availability Endpoints////////
/// /////////////////////////////////
router.get('/availability', async (req, res) => { // res, req, next
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/availability/:availability_id', async (req, res) => {
  try {
    const availability = await db.Movies.findAll({
      where: {
        availability_id: req.params.availability_id
      }
    });
    res.json(availability);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Images Endpoints////////
/// /////////////////////////////////
router.get('/images', async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/images/:image_id', async (req, res) => {
  try {
    const movie = await db.Movies.findAll({
      where: {
        image_id: req.params.image_id
      }
    });

    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/images', async (req, res) => {
  const movies = await db.Movies.findAll();
  const currentId = (await movies.length) + 1;
  try {
    const newimages = await db.Movies.create({
      image_id: currentId,
      image_url: req.body.image_url
    });
    res.json(newimages);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/images/:image_id', async (req, res) => {
  try {
    await db.Movies.destroy({
      where: {
        image_id: req.params.image_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/images', async (req, res) => {
  try {
    await db.Movies.update(
      {
        image_url: req.image_url
      },
      {
        where: {
          image_id: req.body.image_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Movies Endpoints////////
/// /////////////////////////////////
router.get('/movies', async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movies/:movie_id', async (req, res) => {
  try {
    const movie = await db.Movies.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });

    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/movies', async (req, res) => {
  const movies = await db.Movies.findAll();
  const currentId = (await movies.length) + 1;
  try {
    const newMovie = await db.Movies.create({
      movie_id: currentId,
      title: req.title,
      year: req.year,
      language_id: req.language_id,
      availability_id: req.availability_id,
      rating_id: req.rating_id,
      genre_id: req.genre_id,
      tomatometer: req.tomatometer,
      image_id: req.image_id
    });
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/movies/:movie_id', async (req, res) => {
  try {
    await db.Movies.destroy({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movies', async (req, res) => {
  try {
    await db.Movies.update(
      {
        title: req.title,
        year: req.year,
        language_id: req.language_id,
        availability_id: req.availability_id,
        rating_id: req.rating_id,
        genre_id: req.genre_id,
        tomatometer: req.tomatometer,
        image_id: req.image_id
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;