/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Airbnb Data API!');
});

/// /////////////////////////////////
/// ////Calendar Endpoints////////
/// /////////////////////////////////
router.get('/calendar', async (req, res) => {
  try {
    const entries = await db.calendar.findAll();
    const reply = entries.length > 0 ? { data: entries } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/calendar/:calendar_id', async (req, res) => {
  try {
    const entry = await db.calendar.findAll({
      where: {
        calendar_id: req.params.calendar_id
      }
    });

    res.json(entry);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/calendar', async (req, res) => {
  const entries = await db.calendar.findAll();
  const currentId = (await entries.length) + 1;
  try {
    const newEntry = await db.calendar.create({
      calendar_id: currentId,
      listing_id: req.body.listing_id,
      stay_date: req.body.stay_date,
      availability: req.body.availability,
      price: req.body.price,
      min_nights: req.body.min_nights,
      max_nights: req.body.max_nights
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/calendar/:calendar_id', async (req, res) => {
  try {
    await db.calendar.destroy({
      where: {
        calendar_id: req.params.calendar_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/calendar', async (req, res) => {
  try {
    await db.calendar.update(
      {
        stay_date: req.body.stay_date,
        availability: req.body.availability,
        price: req.body.price,
        min_nights: req.body.min_nights,
        max_nights: req.body.max_nights
      },
      {
        where: {
          calendar_id: req.body.calendar_id
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
/// ////////Hosts Endpoints//////////
/// /////////////////////////////////
router.get('/hosts', async (req, res) => {
  try {
    const hosts = await db.hosts.findAll();
    res.json(hosts);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/hosts/:host_id', async (req, res) => {
  try {
    const hosts = await db.hosts.findAll({
      where: {
        host_id: req.params.host_id
      }
    });
    res.json(hosts);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/meals', async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Listings Endpoints/////////
/// /////////////////////////////////
router.get('/listings', async (req, res) => {
  try {
    const listings = await db.listings.findAll();
    res.send(listings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/listings/:listing_id', async (req, res) => {
  try {
    const listings = await db.listings.findAll({
      where: {
        listing_id: req.params.listing_id
      }
    });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/macros', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat
      },
      {
        where: {
          meal_id: req.body.meal_id
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
/// Neighborhoods Endpoints///
/// /////////////////////////////////
router.get('/neighborhoods', async (req, res) => {
  try {
    const neighborhoods = await db.neighborhoods.findAll();
    res.json(neighborhoods);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/neighborhoods/:neighborhood_id', async (req, res) => {
  try {
    const neighborhoods = await db.neighborhoods.findAll({
      where: {
        neighborhood_id: req.params.neighborhood_id
      }
    });
    res.json(neighborhoods);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Properties Endpoints///
/// /////////////////////////////////
router.get('/properties', async (req, res) => {
  try {
    const properties = await db.properties.findAll();
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/properties/:property_id', async (req, res) => {
  try {
    const properties = await db.properties.findAll({
      where: {
        property_id: req.params.property_id
      }
    });
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Reviews Endpoints///
/// /////////////////////////////////
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await db.reviews.findAll();
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/reviews/:review_id', async (req, res) => {
  try {
    const reviews = await db.reviews.findAll({
      where: {
        review_id: req.params.review_id
      }
    });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Scores Endpoints///
/// /////////////////////////////////
router.get('/scores', async (req, res) => {
  try {
    const scores = await db.scores.findAll();
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/scores/:scores_id', async (req, res) => {
  try {
    const scores = await db.scores.findAll({
      where: {
        scores_id: req.params.scores_id
      }
    });
    res.json(scores);
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
