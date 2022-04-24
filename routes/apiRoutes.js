/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////START:GROUP 23////////
/// /////////////////////////////////
// Sravya GET requests

router.get('/', (req, res) => {
  res.send('Welcome to the College Park Restaurants API!');
});

// retrieve the data in restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await db.restaurants.findAll();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
// retrieve the restaurants with the specified cuisine using cuisine id
router.get('/restaurants/cuisine/:cuisine_id', async (req, res) => {
  try {
    const { cuisine_id } = req.params;
    const result = await db.sequelizeDB.query(
      `SELECT * FROM restaurants where cuisine_id = ${ cuisine_id }`
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
router.get('/restaurants/:rest_id', async (req, res) => {
  try {
    const { rest_id } = req.params;
    const result = await db.sequelizeDB.query(
      `SELECT * FROM restaurants where restaurant_id = ${ rest_id }`
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
///
/// Sravya IC2 REQUESTS
///
// POST request RESTAURANTS
router.post('/restaurants', async (req, res) => {
  try {
    const newRest = await db.restaurants.create({
      restaurant_id: currentId,
      restaurant_name: req.body.restaurant_name,
      phone_number: req.body.phone_number,
      price: req.body.price,
      description: req.body.description,
      website: req.body.website,
      cuisine_id: req.body.cuisine_id,
      rating_id: req.body.rating_id,
      description_id: req.body.description_id
    });
    res.json(newRest);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// PUT request
router.put('/restaurants', async (req, res) => {
  try {
    await db.restaurants.update(
      {
        restaurant_name: req.body.restaurant_name,
        description: req.body.description
      },
      {
        where: {
          restaurant_id: req.body.restaurant_id
        }
      }
    );
    res.send('Successfully Updated Restaurant');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// DELETE request
router.delete('/restaurant/:rest_id', async (req, res) => {
  try {
    await db.restaurants.destroy({
      where: {
        restaurant_id: req.params.restaurant_id
      }
    });
    res.send('Successfully Deleted Restaurant id');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
export default router;
