import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the CP Restaurants API!');
});

router.get('/restaurant', async (req, res) => {
  try {
    const restaurant = await db.restaurant.findAll();
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/restaurant/:restaurant_id', async (req, res) => {
  try {
    const restaurant = await db.restaurant.findAll({
      where: {
        meal_id: req.params.restaurant_id
      }
    });
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.put('/restaurant', async (req, res) => {
  try {
    await db.restaurant.update(
      {
        restaurant_name: req.body.restaurant_name,
        restaurant_category: req.body.meal_category
      },
      {
        where: {
          restaurant_id: req.body.restaurant_id
        }
      }
    );
    res.send('restaurant Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

