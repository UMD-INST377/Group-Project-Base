/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the Movies API!');
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
    console.error(err);
    res.error('Server error');
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
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Images Endpoints////////
/// /////////////////////////////////
router.get('/images', async (req, res) => {
  try {
    const images = await db.Images.findAll();
    const reply = images.length > 0 ? { data: images } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/images/:image_id', async (req, res) => {
  try {
    const image = await db.Images.findAll({
      where: {
        image_id: req.params.image_id
      }
    });
    res.json(image);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/images', async (req, res) => {
  const images = await db.Images.findAll();
  const currentId = (await images.length) + 1;
  try {
    const newImage = await db.Images.create({
      image_id: currentId,
      image_url: req.body.image_url
    });
    res.json(newImage);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/images/:image_id', async (req, res) => {
  try {
    await db.Images.destroy({
      where: {
        image_id: req.params.image_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/images', async (req, res) => {
  try {
    await db.Images.update(
      {
        image_url: req.image_url
      },
      {
        where: {
          image_id: req.body.image_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Movies Endpoints////////
/// /////////////////////////////////
router.get('/movies', async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movies/:movie_id', async (req, res) => {
  try {
    const movie = await db.Movies.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/movies', async (req, res) => {
  const movies = await db.Movies.findAll();
  const currentId = (await movies.length) + 1;
  try {
    const newMovie = await db.Movies.create({
      movie_id: currentId,
      title: req.title,
      year: req.year,
      language_id: req.language_id,
      availability_id: req.availability_id,
      rating_id: req.rating_id,
      genre_id: req.genre_id,
      tomatometer: req.tomatometer,
      image_id: req.image_id
    });
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/movies/:movie_id', async (req, res) => {
  try {
    await db.Movies.destroy({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movies', async (req, res) => {
  try {
    await db.Movies.update(
      {
        title: req.title,
        year: req.year,
        language_id: req.language_id,
        availability_id: req.availability_id,
        rating_id: req.rating_id,
        genre_id: req.genre_id,
        tomatometer: req.tomatometer,
        image_id: req.image_id
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genres', async (req, res) => {
  try {
    const genres = await db.Genres.findAll();
    const reply = genres.length > 0 ? { data: genres } : { message: 'no results found' };
    res.json(reply);
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

export default router;