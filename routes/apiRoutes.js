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
// might not need endpoint for this table

/// /////////////////////////////////
/// ////genre Endpoints////////
/// /////////////////////////////////
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

router.post('/popularBooks', async (req, res) => {
  const books = await db.popularBooks.findAll();
  const currentId = (await books.length) + 1;
  try {
    const newBook = await db.popularBooks.create({
      book_id: currentId,
      title: req.body.title,
      amount_sold: req.body.amount_sold,
      publish_year: req.body.publish_year,
      public_domain: req.body.public_domain,
      google_user_percentage: req.body.google_user_percentage,
      original_language: req.body.original_language,
      authors_author_id: req.body.authors_author_id,
      publishers_publisher_id: req.body.publishers_publisher_id,
      artistic_movement_artistic_movement_id: req.body.artistic_movement_artistic_movement_id,
      book_retailers_retailer_id: req.body.book_retailers_retailer_id,
      book_description_description_id: req.body.book_description_description_id
    });
    res.json(newBook);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/popularBooks', async (req, res) => {
  try {
    await db.popularBooks.update(
      {
        title: req.body.title,
        amount_sold: req.body.amount_sold,
        publish_year: req.body.publish_year,
        public_domain: req.body.public_domain,
        google_user_percentage: req.body.google_user_percentage,
        original_language: req.body.original_language,
        authors_author_id: req.body.authors_author_id,
        publishers_publisher_id: req.body.publishers_publisher_id,
        artistic_movement_artistic_movement_id: req.body.artistic_movement_artistic_movement_id,
        book_retailers_retailer_id: req.body.book_retailers_retailer_id,
        book_description_description_id: req.body.book_description_description_id
      },
      {
        where: {
          book_id: req.body.book_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/popularBooks/:popularBooks_id', async (req, res) => {
  try {
    await db.popularBooks.destroy({
      where: {
        popularBooks_id: req.params.popularBooks_id
      }
    });
    res.send('Successfully Deleted');
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

/// /////////////////////////////////
/// ////popularBooksExpanded Endpoints////////
/// /////////////////////////////////
router.get('/popularBooksExpanded', async (req, res) => {
  try {
    // This is an sql query that fetches popularBooks + author name
    // + book description + publisher name + retailer name
    // genre is work in progress
    const sqlQuery = `
    SELECT popular_books.*, first_name, last_name, book_description, publisher_name, retailer_name
    FROM popular_books
    LEFT JOIN authors ON authors_author_id=author_id
    LEFT JOIN book_description ON book_description_description_id=description_id
    LEFT JOIN publishers ON publishers_publisher_id=publisher_id
    LEFT JOIN book_retailers ON book_retailers_retailer_id=retailer_id
    `
    const result = await db.sequelizeDB.query(sqlQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/popularBooksExpanded/:book_id', async (req, res) => {
  try {
    const sqlQuery = `
    SELECT popular_books.*, first_name, last_name, book_description, publisher_name, retailer_name
    FROM popular_books
    LEFT JOIN authors ON authors_author_id=author_id
    LEFT JOIN book_description ON book_description_description_id=description_id
    LEFT JOIN publishers ON publishers_publisher_id=publisher_id
    LEFT JOIN book_retailers ON book_retailers_retailer_id=retailer_id
    WHERE book_id = :book_id
    `
    const result = await db.sequelizeDB.query(sqlQuery, {
      replacements: { book_id: req.params.book_id },
      type: sequelize.QueryTypes.SELECT 
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;