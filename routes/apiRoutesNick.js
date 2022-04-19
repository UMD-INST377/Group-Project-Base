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



export default router;
