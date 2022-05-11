/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

router.get('/client', (req, res) => {
  res.send('Welcome to Client');
});

/// /////////////////////////////////
/// ////Meals Locations Endpoints////////
/// /////////////////////////////////

router.get('/mealLocation', async (req, res) => {
  try {
    const mealLocation = await db.MealsLocations.findAll();
    res.json(mealLocation);
  } catch (err) {
    console.error(err);
    res.send('There was an error');
  }
});

router.get('/mealLocation/:hall_id', async (req, res) => {
  try {
    const sche3 = await db.MealsLocations.findAll({
      where: {
        hall_id: req.params.hall_id
      }
    });

    res.json(sche3);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/mealLocation/:meal_id', async (req, res) => {
  try {
    const sche2 = await db.MealsLocations.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });

    res.json(sche2);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Hall Schedule Endpoints////////
/// /////////////////////////////////

router.get('/schedule', async (req, res) => {
  try {
    const schedule = await db.HallSchedule.findAll();
    const re = schedule.length > 0 ? { data: schedule } : { message: 'no results found' };
    res.json(re);
  } catch (err) {
    console.error(err);
    res.send('There was an error');
  }
});

router.get('/schedule/:schedule_id', async (req, res) => {
  try {
    const sche = await db.HallSchedule.findAll({
      where: {
        schedule_id: req.params.schedule_id
      }
    });

    res.json(sche);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/schedule', async (req, res) => {
  const hours = await db.HallSchedule.findAll();
  const output = await hours.length;
  try {
    const newSchedule = await db.HallSchedule.create({
      schedule_id: output + 1,
      hours: req.body.hours
    });
    res.json(newSchedule);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/schedule', async (req, res) => {
  try {
    await db.HallSchedule.update(
      {
        hours: req.body.hours
      },
      {
        where: {
          schedule_id: req.body.schedule_id
        }
      }
    );
    res.send('Updated');
  } catch {
    res.send('There was an error');
  }
});

/// /////////////////////////////////
/// ////Hall Hours Endpoints////////
/// /////////////////////////////////
router.get('/hallHours', async (req, res) => {
  try {
    const hallHours = await db.HallHours.findAll();
    res.json(hallHours);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
})

router.get('/hallHours/:hall_hours_id', async (req, res) => {
  try {
    const hours = await db.HallHours.findAll({
      where: {
        hall_hours_id: req.params.hall_hours_id
      }
    });

    res.json(hours);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.post('/hallHours', async (req, res) => {
  const hours = await db.HallHours.findAll();
  try {
    const newHallHours = await db.HallHours.create({
      hall_hours_id: (await hours.length) + 1,
      day: req.body.day,
      schedule_id: req.body.schedule_id,
      hall_id: req.body.hall_id,
    });
    res.json(newHallHours);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.delete('/hallHours/:hall_hours_id', async (req, res) => {
  try {
    await db.HallHours.destroy({
      where: {
        hall_hours_id: req.params.hall_hours_id
      }
    });
    res.send('Deleted');
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.put('/hallHours', async (req, res) => {
  try {
    await db.HallHours.update(
      {
        day: req.body.day,
        schedule_id: req.body.schedule_id,
        hall_id: req.body.hall_id,
      },
      {
        where: {
          hall_hours_id: req.body.hall_hours_id
        }
      }
    );
    res.send('Updated');
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
router.get('/dining', async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/dining/:hall_id', async (req, res) => {
  try {
    const hall = await db.DiningHall.findAll({
      where: {
        hall_id: req.params.hall_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/dining', async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/dining/:hall_id', async (req, res) => {
  try {
    await db.DiningHall.destroy({
      where: {
        hall_id: req.params.hall_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/dining', async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location
      },
      {
        where: {
          hall_id: req.body.hall_id
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
/// ////////Meals Endpoints//////////
/// /////////////////////////////////
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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

/// /////////////////////////////////
/// ////Hall Hours Endpoints////////
/// /////////////////////////////////
router.get('/hallHours', async (req, res) => {
  try {
    const hallHours = await db.HallHours.findAll();
    res.json(hallHours);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.get('/hallHours/:hall_hours_id', async (req, res) => {
  try {
    const hours = await db.HallHours.findAll({
      where: {
        hall_hours_id: req.params.hall_hours_id
      }
    });

    res.json(hours);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.post('/hallHours', async (req, res) => {
  const hours = await db.HallHours.findAll();
  try {
    const newHallHours = await db.HallHours.create({
      hall_hours_id: (await hours.length) + 1,
      day: req.body.day,
      schedule_id: req.body.schedule_id,
      hall_id: req.body.hall_id
    });
    res.json(newHallHours);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.delete('/hallHours/:hall_hours_id', async (req, res) => {
  try {
    await db.HallHours.destroy({
      where: {
        hall_hours_id: req.params.hall_hours_id
      }
    });
    res.send('Deleted');
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

router.put('/hallHours', async (req, res) => {
  try {
    await db.HallHours.update(
      {
        day: req.body.day,
        schedule_id: req.body.schedule_id,
        hall_id: req.body.hall_id
      },
      {
        where: {
          hall_hours_id: req.body.hall_hours_id
        }
      }
    );
    res.send('Updated');
  } catch (err) {
    console.error(err);
    res.send('Error');
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
