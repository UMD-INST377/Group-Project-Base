/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Animal Adoption API!');
});

/// /////////////////////////////////
/// ////Shelter Endpoints////////
/// /////////////////////////////////
router.get('/adoption', async (req, res) => {
  try {
    const shelters = await db.Shelters.findAll();
    const reply = shelters.length > 0 ? { data: shelters } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/adoption/:shelter_id', async (req, res) => {
  try {
    const shelter = await db.Shelters.findAll({
      where: {
        shelter_id: req.params.shelter_id
      }
    });

    res.json(shelter);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/adoption', async (req, res) => {
  const shelters = await db.Shelters.findAll();
  const currentId = (await shelters.length) + 1;
  try {
    const newShelters = await db.Shelters.create({
      shelter_id: currentId,
      shelter_name: req.body.shelter_name,
      shelter_address: req.body.shelter_address,
      phone_number: req.body.phone_number,
      num_employees: req.body.num_employees
    });
    res.json(newShelters);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/adoption/:shelter_id', async (req, res) => {
  try {
    await db.Shelters.destroy({
      where: {
        shelter_id: req.params.shelter_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/adoption', async (req, res) => {
  try {
    await db.Shelters.update(
      {
        shelter_name: req.body.shelter_name,
        shelter_address: req.body.shelter_address
      },
      {
        where: {
          shelter_id: req.body.shelter_id
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
/// ////////Animals Endpoints//////////
/// /////////////////////////////////
router.get('/animals', async (req, res) => {
  try {
    const animals = await db.Animals.findAll();
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/animals/:animal_id', async (req, res) => {
  try {
    const animals = await db.Animals.findAll({
      where: {
        animal_id: req.params.animal_id
      }
    });
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/animals', async (req, res) => {
  try {
    await db.Animals.update(
      {
        name: req.body.name,
        status: req.body.status
      },
      {
        where: {
          animal_id: req.body.animal_id
        }
      }
    );
    res.send('Animal Successfully Updated');
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
