import express from 'express';
// import sequelize from 'sequelize';

import availability from './availabilityRoutes.js';
import genres from './genresRoutes.js';
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
router.use('/ratings', ratings);

export default router;
