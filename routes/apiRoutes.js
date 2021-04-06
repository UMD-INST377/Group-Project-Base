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

// not working at the moment
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
// might not need endpoint for this table

/// /////////////////////////////////
/// ////genre Endpoints////////
/// /////////////////////////////////

// not working at the moment
router.get('/genre', async (req, res) => {
  try {
    const genre = await db.genre.findAll();
    const reply = genre.length > 0 ? { data: genre } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genre/:genre_id', async (req, res) => {
  try {
    const genre = await db.genre.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });

    res.json(genre);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////popularBooks Endpoints////////
/// /////////////////////////////////
router.get('/popularBooks', async (req, res) => {
  try {
    const books = await db.popularBooks.findAll();
    const reply = books.length > 0 ? { data: books } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/popularBooks/:book_id', async (req, res) => {
  try {
    const books = await db.popularBooks.findAll({
      where: {
        book_id: req.params.book_id
      }
    });

    res.json(books);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////publisher Endpoints////////
/// /////////////////////////////////
router.get('/publishers', async (req, res) => {
  try {
    const publishers = await db.publishers.findAll();
    const reply = publishers.length > 0 ? { data: publishers } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/publishers/:publisher_id', async (req, res) => {
  try {
    const publishers = await db.publishers.findAll({
      where: {
        publisher_id: req.params.publisher_id
      }
    });

    res.json(publishers);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////retailters Endpoints////////
/// /////////////////////////////////

// not working at the moment
router.get('/bookRetailers', async (req, res) => {
  try {
    const retailers = await db.bookRetailers.findAll();
    const reply = retailers.length > 0 ? { data: retailers } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/bookRetailers/:retailer_id', async (req, res) => {
  try {
    const retailers = await db.bookRetailers.findAll({
      where: {
        retailer_id: req.params.retailer_id
      }
    });

    res.json(retailers);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;