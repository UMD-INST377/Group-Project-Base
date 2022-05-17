import express from 'express';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const movies = await db.Movies.findAll();
      const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      res.json('Server error');
    }
  })
  .post(async (req, res) => {
    const movies = await db.Movies.findAll();
    const currentId = (await movies.length) + 1;
    // if (!validator.isInt(req.body.year) || req.body.year.length !== 4) {
    //   res.send('Please enter a 4 digit year');
    // }
    try {
      await db.Movies.create({
        movie_id: currentId,
        title: req.body.title,
        year: req.body.year,
        language_id: req.body.language_id,
        availability_id: req.body.availability_id,
        rating_id: req.body.rating_id,
        genre_id: req.body.genre_id,
        tomatometer: null,
        image_id: req.body.image_id
      });
      res.send('Successfully added');
    } catch (err) {
      res.send(err);
    }
  });

router.route('/:movie_id')
  .get(async (req, res) => {
    try {
      const movie = await db.Movies.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(movie);
    } catch (err) {
      res.json('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.Movies.update({
        title: req.body.title,
        year: req.body.year,
        language_id: req.body.language_id,
        availability_id: req.body.availability_id,
        rating_id: req.body.rating_id,
        genre_id: req.body.genre_id,
        tomatometer: null,
        image_id: req.body.image_id
      },
      {
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.send('Successfully updated');
    } catch (err) {
      res.send(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await db.Movies.destroy({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.send('Successfully deleted');
    } catch (err) {
      res.send('Could not delete record -- please check ID');
    }
  });

export default router;