import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import individualQuery from '../controller/individual_query.js';

const router = express.Router();

router.get('/meals/:meal_name', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query('SELECT column FROM meals WHERE meal_name = (:meal_name)', {
      replacements: {meal_name: req.params.meal_name},
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ data: result});
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

export default router;
