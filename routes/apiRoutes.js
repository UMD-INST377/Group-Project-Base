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
    // const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
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

export default router;