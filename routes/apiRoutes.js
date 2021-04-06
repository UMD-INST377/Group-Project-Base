/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Group 1 Library API!');
});

/// /////////////////////////////////
/// ////ArtisticMovement Endpoints////////
/// /////////////////////////////////
router.get('/artisticMovement', async (req, res) => {
  try {
    const movement = await db.artisticMovement.findAll();
    const reply = movement.length > 0 ? { data: movement } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artisticMovement/:artistic_movement_id', async (req, res) => {
  try {
    const movement = await db.artisticMovement.findAll({
      where: {
        artistic_movement_id: req.params.artistic_movement_id
      }
    });

    res.json(movement);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
/// /////////////////////////////////
/// ////Authors Endpoints////////
/// /////////////////////////////////
router.get('/authors', async (req, res) => {
  try {
    const authors = await db.authors.findAll();
    const reply = authors.length > 0 ? { data: authors } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/authors/:author_id', async (req, res) => {
  try {
    const authors = await db.authors.findAll({
      where: {
        author_id: req.params.author_id
      }
    });

    res.json(authors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////bookDescription Endpoints////////
/// /////////////////////////////////
router.get('/bookDescription', async (req, res) => {
  try {
    const bookDescription = await db.bookDescription.findAll();
    const reply = bookDescription.length > 0 ? { data: bookDescription } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/bookDescription/:description_id', async (req, res) => {
  try {
    const bookDescription = await db.bookDescription.findAll({
      where: {
        description_id: req.params.description_id
      }
    });

    res.json(bookDescription);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////genreHasPopularBooks Endpoints////////
/// /////////////////////////////////
router.get('/genreHasPopularBooks', async (req, res) => {
  try {
    const genreHasPopularBooks = await db.genreHasPopularBooks.findAll();
    const reply = genreHasPopularBooks.length > 0 ? { data: genreHasPopularBooks } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



export default router;