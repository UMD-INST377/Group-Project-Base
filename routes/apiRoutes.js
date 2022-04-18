/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();
router.get('/advisors', async (req, res) => {
  try {
    const advisors = await db.sequelizeDB.query('SELECT * from advisors');
    res.json({ data: advisors });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/advisors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const advisors = await db.sequelizeDB.query(
      `SELECT * from advisors where advisor_id = ${id}`
    );
    res.json({ data: advisors });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/career_services', async (req, res) => {
  try {
    const careerServices = await db.sequelizeDB.query(
      'SELECT * from career_services'
    );
    res.json({ data: careerServices });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/career_services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const careerServices = await db.sequelizeDB.query(
      `SELECT * from career_services where service_id = ${id}`
    );
    res.json({ data: careerServices });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/job_title_company', async (req, res) => {
  try {
    const jobTitleCompany = await db.sequelizeDB.query(
      'SELECT * from job_title_company'
    );
    res.json({ data: jobTitleCompany });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/job_title_company/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const jobTitleCompany = await db.sequelizeDB.query(
      `SELECT * from job_title_company where job_title_id = ${id}`
    );
    res.json({ data: jobTitleCompany });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

/* router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');

router.get("/", (req, res) => {
  res.send("Welcome to the UMD Dining API!");
}); */

router.get('/students', async (req, res) => {
  try {
    const students = await db.sequelizeDB.query('SELECT * from students');
    res.json({ data: students });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const students = await db.sequelizeDB.query(
      `SELECT * from students where student_id = ${id}`
    );
    res.json({ data: students });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/job_title_info', async (req, res) => {
  try {
    const job = await db.sequelizeDB.query('SELECT * from job_title_info');
    res.json({ data: job });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/job_title_info/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const job = await db.sequelizeDB.query(
      `SELECT * from job_title_info where job_title_id = ${id}`
    );
    res.json({ data: job });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/company', async (req, res) => {
  try {
    const company = await db.sequelizeDB.query('SELECT * from company')
    res.json({data: company});
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/company/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const company = await db.sequelizeDB.query(`SELECT * from company where company_id = ${id}`)
    res.json({data: company});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
    res.error('Server error');
  }
});

router.get('/dining/:hall_id', async (req, res) => {
  try {
    const hall = await db.DiningHall.findAll({
      where: {
        hall_id: req.params.hall_id,
      },
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
      hall_long: req.body.hall_long,
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
        hall_id: req.params.hall_id,
      },
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
        hall_location: req.body.hall_location,
      },
      {
        where: {
          hall_id: req.body.hall_id,
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
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
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
