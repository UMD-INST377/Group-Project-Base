import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

router.route('/food_type')
    .get(async (req, res) => {

    })

    router.get('/food_type', async (req, res) => {
        try {
          const food_type = await db.food_type.findAll();
          res.json(food_type);
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });
      
      router.get('/food_type/:food_type_id', async (req, res) => {
        try {
          const food_type = await db.food_type.findAll({
            where: {
              type_id: req.params.type_id
            }
          });
          res.json(food_type);
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });
      
      router.put('/food_type', async (req, res) => {
        try {
          await db.food_type.update(
            {
              meal_name: req.body.meal_name,
              meal_category: req.body.meal_category
            },
            {
              where: {
                type_id: req.body.type_id
              }
            }
          );
          res.send('Meal Successfully Updated');
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });