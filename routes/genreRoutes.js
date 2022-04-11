/// //////////////////////////////////
/// ///////////Genres Endpoints////////
/// //////////////////////////////////
import express from 'express';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const genres = await db.Genres.findAll();
    const reply = genres.length > 0 ? { data: genres } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    res.json('Server error');
  }
});
router.route('/:genre_id').get(async (req, res) => {
  try {
    const genres = await db.Genres.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json(genres);
  } catch (err) {
    res.json('Server error');
  }
});

export default router;