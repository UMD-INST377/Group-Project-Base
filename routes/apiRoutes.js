/* eslint-disable no-console */
import express, { response } from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import restaurantMapCustom from '../server/controllers/restaurantsController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Restaurant Inspection API!');
});

/// /////////////////////////////////
/// ////Food Inspection Endpoints////////
/// /////////////////////////////////

router.get('/listofRestaurants', async (req, res) => {
  try {
    // console.log(restaurantMapCustom);
    const restaurant = await db.sequelizeDB.query(restaurantMapCustom.getRestaurant, {
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
    const restaurants = await db.sequelizeDB.query(restaurantMapCustom.getRestaurant, {
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
    await db.sequelizeDB.query(restaurantMapCustom.putRestaurant, {
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
  const restaurant = await db.sequelizeDB.query(restaurantMapCustom.postRestaurant, {
    type: sequelize.QueryTypes.INSERT
  });
  const currentId = (await restaurant.length) + 1;
  try {
    const newRestaurant = await db.sequelizeDB.query(restaurantMapCustom.postRestaurant, {
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
    await db.sequelizeDB.query(restaurantMapCustom.deleteRestaurant, {
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

export default router;
