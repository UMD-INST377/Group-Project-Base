/* eslint-disable no-console */
import express from 'express';
// import sequelize, { QueryTypes } from 'sequelize';
import pkg from 'sequelize';
import db from '../database/initializeDB.js';

import foodInspectionVar from '../contollers/food_inspectionController.js';
import zipcodeVar from '../contollers/zipcodeController.js';
import inspectiontypeVar from '../contollers/inspectionType.js';
import updateVar from '../contollers/putController.js';

const { QueryTypes } = pkg;

/*
const fetch = require('node-fetch');
*/

// const {QueryTypes} = pkg;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////   Food Inspection   ////////
/// /////////////////////////////////

router.route('/foodServicePG').get(async (req, res) => {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);

    res.json(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
  console.log(data);
  res.json(data);
});

router.get('/restaurants', async (req, res) => {
  try {
    const businesses = await db.sequelizeDB.query(foodInspectionVar);
    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /food_inspection with GET');
  }
});

router.get('/zipcodes', async (req, res) => {
  try {
    const zip = await db.sequelizeDB.query(zipcodeVar);
    res.json(zip);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /zipcodes with GET');
  }
});

router.get('/inspectiontype', async (req, res) => {
  try {
    const type = await db.sequelizeDB.query(inspectiontypeVar);
    res.json(type);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /inspection_type with GET');
  }
});

router.put('/differentrestaurant', async (req, res) => {
  try {
    const update = await db.sequelizeDB.query(updateVar);
    res.json(update);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('updated /name with PUT');
  }
});

router.post('/newrestaurant', async (req, res) => {
  try {
    const establishments = await db.sequelizeDB.query(postController.createPost, {
      type: QueryTypes.SELECT
    });
    console.log('Touched post endpoint', req.body);
    console.log(req.body?.resto);
    res.json({establishments: 'post foodServicePG endpoint'});
  } catch (err) {
    console.log(err);

    res.json({error: 'Server error'});
  }
});

/// /////////////////////////////////
/// ////////Meals Endpoints//////////
/// /////////////////////////////////
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/meals/:meal_id', async (req, res) => {
  try {
    const meals = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
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
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/macros/:meal_id', async (req, res) => {
  try {
    const meals = await db.Macros.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
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
/// Dietary Restrictions Endpoints///
/// /////////////////////////////////
router.get('/restrictions', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/restrictions/:restriction_id', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll({
      where: {
        restriction_id: req.params.restriction_id
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

export default router;
