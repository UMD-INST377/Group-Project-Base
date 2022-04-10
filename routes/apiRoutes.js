/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the Movies API!');
});

/// /////////////////////////////////
/// ////Availability Endpoints////////
/// /////////////////////////////////

router.route('/availability').get(async (req, res) => { // res, req, next
  try {
    const availability = await db.Availability.findAll();
    const reply = availability.length > 0 ? { data: availability } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/availability/:availability_id').get(async (req, res) => {
  try {
    const availability = await db.Availability.findAll({
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
router.route('/images').get(async (req, res) => {
  try {
    const images = await db.Images.findAll();
    const reply = images.length > 0 ? { data: images } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/images/:image_id').get(async (req, res) => {
  try {
    const image = await db.Images.findAll({
      where: {
        image_id: req.params.image_id
      }
    });
    res.json(image);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Movies Endpoints////////
/// /////////////////////////////////
router.route('/movies').get(async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movies/:movie_id').get(async (req, res) => {
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

export default router;