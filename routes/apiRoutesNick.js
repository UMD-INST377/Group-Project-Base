import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const cuisineQuery = 'SELECT * FROM cuisine';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const cuisine = await db.sequelizeDB.query(cuisineQuery);
   
    res.json(cuisine);
  } catch (err) {
    res.json({message: err});
  }
});

router.get('/:cuisine_id', async (req, res) => {
  const Query = `SELECT * FROM cuisine WHERE cuisine_id = ${req.cuisine_id}`;
  try {
    const cuisine = await db.sequelizeDB.query(Query);
    res.json(cuisine);
  } catch (err) {
    res.json({message: err});
  }
});

export default router;
