/* eslint-disable no-console */
import express, { response } from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import restaurantMapCustom from '../server/controllers/restaurantsController.js';

const router = express.Router();
// sample endpoint
// router.route('/any table name we're using')
// router.route('/res-name')
//   .get(async(req,res)=>{
//     try{
//       const resName = await db./*tablename*/.findAll({
//         where:{
//           res-name:req.params.res-name
//         }
//       });
//       res.json(resName);
//     }catch(err){
//       console.error(err);
//       res.error('Server error');
//     }
//   })
//   .post((req,res)=>{
//     res.send('Action unavailable');
//   })
//   .put((req,res)=>{
//     res.send('Action unavailable');
//   })
//   .delete((req,res)=>{
//     res.send('Action unavailable');
//   })

router.get('/', (req, res) => {
  res.send('Welcome to the Restaurant Inspection API!');
});

/// /////////////////////////////////
/// ////Food Inspection Endpoints////////
/// /////////////////////////////////

router.get('/listofRestaurants', async (req, res) => {
  try {
    // console.log(restaurantMapCustom);
    const restaurant = await db.sequelizeDB.query(restaurantMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/listofRestaurants/:Establishment_id', async (req, res) => {
  try {
    const restaurants = await db.sequelizeDB.query(restaurantMapCustom, {
      replacements: {
        Establishment_id: req.params.Establishment_id
      }
    });
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.error('Something went wrong on /listofRestaurants/:Establishment_id at get');
  }
});

router.put('/listofRestaurants', async (req, res) => {
  try {
    await db.sequelizeDB.query(restaurantMapCustom, {
      Name: req.body.Name,
      City: req.body.City,
      Zip: req.body.Zip
    });
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Something went wrong on /listofRestaurants at put');
  }
});

router.post('/listofRestaurants', async (req, res) => {
  const restaurant = await db.sequelizeDB.query(restaurantMapCustom, {
    type: sequelize.QueryTypes.INSERT
  });
  const currentId = (await restaurant.length) + 1;
  try {
    const newRestaurant = await db.sequelizeDB.query(restaurantMapCustom, {
      Establishment_id: currentId,
      Name: req.body.Name,
      City: req.body.City,
      Zip: req.body.Zip
    });
    res.json(newRestaurant);
  } catch (err) {
    console.error((err));
    res.send('Something went wrong on /listofRestaurants at post');
  }
});

router.delete('/listofRestaurants/:Establishment_id', async (req, res) => {
  try {
    await db.sequelizeDB.query(restaurantMapCustom, {
      replacements: {
        Establishment_id: req.params.Establishment_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Something went wrong on /listofRestaurants/:Establishment_id at delete');
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
