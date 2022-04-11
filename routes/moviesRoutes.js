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
  });

export default router;