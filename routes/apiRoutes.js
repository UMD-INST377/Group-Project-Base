/* eslint-disable no-console */
import express from 'express';
import sequelize, { QueryTypes } from 'sequelize';

import db from '../database/initializeDB.js';
import foodInspectionVar from '../contollers/food_inspectionController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////   Food Inspection   ////////
/// /////////////////////////////////
router.route('/foodServicePG').get(async (req, res) => {
  try {
    const url =
      'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('establishments/establishment_id', async (req, res) => {
  try {
    const businesses = await db.sequelizeDB.query(foodInspectionVar);
    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /food_inspection with GET');
  }
});

router.put('establishments/establishment_id', async (req, res) => {
  try {
    const businesses = await db.sequelizeDB.query(
      {
        type: QueryTypes.SELECT
      }
    );

    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /food_inspection with GET');
  }
});

router.post('establishments/establishment_id', async (req, res) => {
  try {
    const businesses = await db.sequelizeDB.query();

    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /food_inspection with GET');
  }
});

router.delete('establishments/establishment_id', async (req, res) => {
  try {
    const businesses = await db.sequelizeDB.query();

    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /food_inspection with GET');
  }
});

/* router.put('/FOOD_INSPECTION_GROUP8.Food_Inspection/:Establishment_id', async (req, res) => {
  try {
    const businesses = await db.FoodInspection.findAll({
      where: {
        Establishment_id: req.params.Establishment_id
      }
    });

    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
    console.log('touched /food_inspection with GET');
  }
});
*/

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
        meal_id: req.params.meal_id,
      },
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
        meal_category: req.body.meal_category,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
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
        meal_id: req.params.meal_id,
      },
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
        fat: req.body.fat,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
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
        restriction_id: req.params.restriction_id,
      },
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
const macrosCustom =
  'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT,
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
      type: sequelize.QueryTypes.SELECT,
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
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
