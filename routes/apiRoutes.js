import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import availability from './availabilityRoutes.js';
import genres from './genreRoutes.js';
import images from './imagesRoutes.js';
import languages from './languagesRoutes.js';
import movies from './moviesRoutes.js';
import ratings from './RatingsRoutes.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the Movies API!');
});

router.use('/availability', availability);
router.use('/genres', genres);
router.use('/images', images);
router.use('/languages', languages);
router.use('/movies', movies);
router.use('/', ratings);

<<<<<<< Updated upstream
export default router;
=======
const tableQuery = `select movie_id, title, year, genre, language as 'lang', 
rating, image_url, is_on_netflix, is_on_hulu, is_on_prime, is_on_disney from movies
  left join images using(image_id)
  left join availability using(availability_id)
  left join genres using(genre_id)
  left join ratings using(rating_id)
  left join languages using(language_id)
order by movie_id`;

router.route('/table/data').get(async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`${tableQuery};`, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.send('Error');
  }
});

router.route('/display').get(async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`${tableQuery} limit 8;`, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.send('Error');
  }
});

router.route('/custom').get(async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.send('Error');
  }
});

export default router;
>>>>>>> Stashed changes
