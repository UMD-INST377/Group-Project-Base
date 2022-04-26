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

router.get('/meals/:meal_id', async (req, res) => {
  try {
    const meal = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meal);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

export default router;