import express from 'express';
import sequelize from 'sequelize';

import db from '../../database/initializeDB.js';

const router = express.Router();




router.get('/meals', async (req, res) => {
    try {
      const meals = await db.meals.findAll();
      res.json(meals);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
  
  router.get('/meals/:meal_id', async (req, res) => {
    try {
      const meals = await db.meals.findAll({
        where: {
          meal_id: req.params.meal_id
        }
      });
      res.json({data: meals});
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });