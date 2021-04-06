/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Movie Museum!');
});

/// /////////////////////////////////
/// ////Actor Has Movies Endpoints////////
/// /////////////////////////////////
router.get('/actorhasmovies', async (req, res) => {
  try {
    const  actorHasMovies = await db.actor_has_movies.findAll();
    const reply = actorHasMovies.length > 0 ? { data: actorHasMovies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/actorhasmovies/:actor_id', async (req, res) => {
  try {
    const actorHasMovies = await db.actor_has_movies.findAll({
      where: {
        actor_id: req.params.actor_id
      }
    });

    res.json(actorHasMovies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/actorhasmovies', async (req, res) => {
  const actorHasMovies = await db.actor_has_movies.findAll();
  const currentId = (await actorHasMovies.length) + 1;
  try {
    const newActorhasmovies = await db.actor_has_movies.create({
      actor_id: currentId,
      movie_id: req.body.movie_id,
    });
    res.json(newActorhasmovies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/dining/:hall_id', async (req, res) => {
  try {
    await db.actor_has_movies.destroy({
      where: {
        actor_id: req.params.actor_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/actorhasmovies', async (req, res) => {
  try {
    await db.actor_has_movies.update(
      {
        movie_id: req.body.movie_id,
      },
      {
        where: {
          actor_id: req.body.actor_id
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
/// ////////Actor Endpoints//////////
/// /////////////////////////////////
router.get('/actor', async (req, res) => {
  try {
    const actors = await db.actor.findAll();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/actor/:actor_id', async (req, res) => {
  try {
    const actors = await db.actor.findAll({
      where: {
        actor_id: req.params.actor_id
      }
    });
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/actor', async (req, res) => {
  try {
    await db.actor.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender
      },
      {
        where: {
          actor_id: req.body.actor_id
        }
      }
    );
    res.send('Actor Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Earnings Endpoints/////////
/// /////////////////////////////////
router.get('/earnings', async (req, res) => {
  try {
    const earning = await db.earnings.findAll();
    res.send(earning);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/earnings/:movie_id', async (req, res) => {
  try {
    const movie = await db.earnings.findAll({
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

router.put('/earnings', async (req, res) => {
  try {
    await db.earnings.update(
      {
        earnings_gross: req.body.earnings_gross,
        budget: req.body.budget
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

/// /////////////////////////////////
/// Genre Endpoints///
/// /////////////////////////////////
router.get('/genre', async (req, res) => {
  try {
    const genres = await db.genre.findAll();
    res.json(rgenres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genre/:genre_id', async (req, res) => {
  try {
    const genres = await db.genre.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json(genres);
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
