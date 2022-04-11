import express from 'express';
// import sequelize from 'sequelize';

import availability from './availabilityRoutes.js';
import genres from './genresRoutes.js';
import images from './imagesRoutes.js';
import languages from './languagesRoutes.js';
import movies from './moviesRoutes.js';
import ratings from './ratingsRoutes.js';

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


/////////////////////////////////////
//////////////Genres Endpoints////////
/////////////////////////////////////
router.route('/genres').get(async (req, res) => {
  try {
    const genres = await db.Genres.findAll();
    const reply = genres.length > 0 ? { data: genres } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    res.json('Server error');
  }
});

router.route('/genres/:genre_id').get(async (req, res) => {
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

/////////////////////////////////////
//////////////Languages Endpoints////////
/////////////////////////////////////

router.route('/languages'). get(async(req, res) => {
  try {
    const languages = await db.Languages.findAll();
    const reply = languages.length > 0 ? { data: languages } : {message: 'no results found'};
    res.json(reply);
  } catch (err) {
    res.json('Server error');
  }
});

router.route('/languages/:language_id').get(async (req, res) => {
  try {
    const languages = await db.Languages.findAll({
      where: {
        language_id: req.params.language_id
      }
    
  });
  res.json(languages);
} catch(err) {
  res.json('Server error');
}
});