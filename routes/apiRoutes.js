/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Museum App!');
});

/// /////////////////////////////////
/// ////Museum Staff Endpoints////////
/// /////////////////////////////////
router.get('/museum_staff', async (req, res) => {
  try {
    const staff = await db.MuseumStaff.findAll();
    const reply = staff.length > 0 ? { data: staff } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/museum_staff/:staff_id', async (req, res) => {
  try {
    const staff = await db.MuseumStaff.findAll({
      where: {
        staff_id: req.params.staff_id
      }
    });

    res.json(staff);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/museum_staff', async (req, res) => {
  const staff = await db.MuseumStaff.findAll();
  const currentId = (await staff.length) + 1;
  try {
    const newStaff = await db.MuseumStaff.create({
      staff_id: currentId,
      employee_first_name: req.body.employee_first_name,
      employee_last_name: req.body.employee_last_name,
      museum_id: req.body.museum_id,
      role_id: req.body.role_id
    });
    res.json(newStaff);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/museum_staff/:staff_id', async (req, res) => {
  try {
    await db.MuseumStaff.destroy({
      where: {
        staff_id: req.params.staff_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/museum_staff', async (req, res) => {
  try {
    await db.MuseumStaff.update(
      {
        employee_first_name: req.body.employee_first_name,
        employee_last_name: req.body.employee_last_name
      },
      {
        where: {
          staff_id: req.body.staff_id
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
/// ////Staff Role Endpoints////////
/// /////////////////////////////////
router.get('/staff_role', async (req, res) => {
  try {
    const role = await db.StaffRole.findAll();
    const reply = role.length > 0 ? { data: role } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/staff_role/:role_id', async (req, res) => {
  try {
    const role = await db.StaffRole.findAll({
      where: {
        role_id: req.params.role_id
      }
    });

    res.json(role);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/staff_role', async (req, res) => {
  const role = await db.StaffRole.findAll();
  const currentId = (await role.length) + 1;
  try {
    const newRole = await db.StaffRole.create({
      role_id: currentId,
      role_title: req.body.role_title
    });
    res.json(newRole);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/staff_role/:role_id', async (req, res) => {
  try {
    await db.StaffRole.destroy({
      where: {
        role_id: req.params.role_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/staff_role', async (req, res) => {
  try {
    await db.StaffRole.update(
      {
        role_id: req.body.role_id,
        role_title: req.body.role_title
      },
      {
        where: {
          role_id: req.body.role_id
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
/// ////Museum Info Endpoints////////
/// /////////////////////////////////
router.get('/museum_info', async (req, res) => {
  try {
    const museum = await db.MuseumInfo.findAll();
    const museumInfo = museum.length > 0 ? { data: museum } : { message: 'no results found' };
    res.json(museumInfo);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/museum_info/:museum_id', async (req, res) => {
  try {
    const museumID = await db.MuseumInfo.findAll({
      where: {
        museum_id: req.params.museum_id
      }
    });

    res.json(museumID);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/museum_info', async (req, res) => {
  const museum = await db.MuseumInfo.findAll();
  const currentMuseumId = (await museum.length) + 1;
  try {
    const newMuseum = await db.MuseumInfo.create({
      museum_id: currentMuseumId,
      museum_name: req.body.museum_name,
      museum_email: req.body.museum_email,
      museum_url: req.body.museum_url,
			museum_phone_num: req.body.museum_phone_num,
			museum_entry_fee: req.body.museum_entry_fee,
			museum_open_time: req.body.museum_open_time,
			date_museum_opened: req.body.date_museum_opened,
			museum_capacity: req.body.museum_capacity,
			museum_size: req.body.museum_size,
			museum_parent: req.body.museum_parent,
			museum_close_time: req.body.museum_close_time,
			museum_budget: req.body.museum_budget,
			museum_address: req.body.museum_address,
			museum_city: req.body.museum_city,
			museum_zipcode: req.body.museum_zipcode,
			ada_id: req.body.ada_id
    });
    res.json(newMuseum);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/museum_info/:museum_id', async (req, res) => {
  try {
    await db.MuseumInfo.destroy({
      where: {
        museum_id: req.params.museum_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/museum_info', async (req, res) => { // Where I left off 19:18 4/6/2021
  try {
    await db.MuseumInfo.update(
      {
				museum_name: req.body.museum_name,
        museum_email: req.body.museum_email,
      	museum_url: req.body.museum_url,
				museum_phone_num: req.body.museum_phone_num,
				museum_entry_fee: req.body.museum_entry_fee,
				museum_open_time: req.body.museum_open_time,
				date_museum_opened: req.body.date_museum_opened,
				museum_capacity: req.body.museum_capacity,
				museum_size: req.body.museum_size,
				museum_parent: req.body.museum_parent,
				museum_close_time: req.body.museum_close_time,
				museum_budget: req.body.museum_budget,
				museum_address: req.body.museum_address,
				museum_city: req.body.museum_city,
				museum_zipcode: req.body.museum_zipcode,
				ada_id: req.body.ada_id 
      },
      {
        where: {
          museum_id: req.body.museum_id
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
