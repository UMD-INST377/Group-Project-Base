/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////START:GROUP23////////
/// /////////////////////////////////
// Sravya GET requests

router.get('/', (req, res) => {
  res.send('Welcome to the College Park Restaurants API!');
});

router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await db.restaurants.findAll();
    // const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/restaurants/:rest_id', async (req, res) => {
  try {
    const hall = await db.restaurants.findAll({
      where: {
        restaurant_id: req.params.restaurant_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Ian GET requests

// Get Endpoint 1: All records of single type
router.get('/address', async (req, res) => {
  try {
    const addresses = await db.address.findAll();
    res.json(addresses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get Endpoint 2: Specific query, getting the city
router.get('/address/:city', async (req, res) => {
  try {
    const addresses = await db.address.findAll({
      where: {
        city: req.params.city
      }
    });
    res.json(addresses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// POST 
router.post('/address', async (req, res) => {
  try {
    const newAddress = await db.address.create({
      address_1: req.body.address_1,
      address_2: req.body.address_2,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code, 
      restaurant_id: req.body.restaurant_id
    });
    res.json(newAddress);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// PUT
router.put('/address', async (req, res) => {
  try {
    await db.address.update(
      {
        address_1: req.body.address_1,
        city: req.body.city
      },
      {
        where: {
          address_id: req.body.address_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// DELETE
router.delete('/address/:address_id', async (req, res) => {
  try {
    await db.address.destroy({
      where: {
        address_id: req.params.address_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Trieuduong GET requests 
// Endpoint 1
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Endpoint 2
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
export default router;
