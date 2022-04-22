import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import mealsQuery from '../controller/meals_query.js';


const router = express.Router();

// /will
router.route('/meals')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(mealsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.json({ message: 'Server error' });
    }
  });

router.route('/meals/:meal_id')
  .get(async (req, res) => { 
    try {
      const mealResult = await db.Meals.findAll( { where: {meal_id: req.params.meal_id}});
      res.json({ data: mealResult });
    } catch (error) {
      console.log(error);
      res.json({ message: 'Something went wrong on /meals end or the meal_id is invalid.' });
    }
  });

export default router;