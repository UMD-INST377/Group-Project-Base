/* eslint-disable radix */
/* eslint-disable no-console */
import express from 'express';
// import sequelize from 'sequelize';

import peopleRoutes from './PeopleRoutes.js';
import ratingRoutes from './RatingsRoutes.js';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the Movies API!');
});

///  People's Routes ////
router.use('/People.js', peopleRoutes);
/// People Routes
router.route('/People.js')
  .get(async (req, res) => {
    try {
      const test = req.body.first_name;
      const result = await db.people.create({
        person_id: 1234,
        first_name: 'Steve',
        last_name: 'Johnson'
      });
      res.send('Reached here');
    } catch (err) {
      console.log(err);
      res.send({message: 'Did not reach here'});
    }
  });

///  Rating's Routes ////
router.use('/ratings', ratingRoutes);
router.route('/ratings')
  .get(async (req, res) => {
    try {
      const rating = await db.ratings.findAll();
      const reply = rating.length > 0 ? { data: rating} : { message: 'No results'};
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.send('Error in Server');
    }
  });
router.route('/ratings/:rating_id').get(async(req, res) => {
  try {
    const rating = await db.ratings.findAll({
      where: {
        rating_id: req.params.rating_id
      }
    });
    res.json(rating);
  } catch (err) {
    console.error(err);
    res.send('Error in server');
  }
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
    res.json('Server error');
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
    res.json('Server error');
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
    res.json('Server error');
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
    res.json('Server error');
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
    res.json('Server error');
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
    res.json('Server error');
  }
});

export default router;

/// //////////////////////////////////
/// ///////////Genres Endpoints////////
/// //////////////////////////////////
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

/// //////////////////////////////////
/// ///////////Languages Endpoints////////
/// //////////////////////////////////

router.route('/languages').get(async(req, res) => {
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
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
