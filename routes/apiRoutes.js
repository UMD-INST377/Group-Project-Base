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
