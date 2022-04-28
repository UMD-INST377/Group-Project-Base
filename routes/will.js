import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import mealsQuery from '../controller/meals_query.js';


const router = express.Router();

// api/will/meals
router.get('/meals', async (req, res) => {
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

// api/will/meals/:meal_id
router.get('/meals/:meal_id', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query('SELECT * FROM meals WHERE meal_id = (:meal_id)', {
      replacements: {meal_id: req.params.meal_id},
      type: sequelize.QueryTypes.SELECT
    }); 
    res.json({ data: result});
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

export default router;