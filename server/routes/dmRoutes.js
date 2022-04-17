// Script by Devon Milley

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const foodInfoQuery = 'SELECT * FROM macros';

const router = express.Router();

// Get food information
router.route('/').get(async (req, res) => {
    try {
      const foodInfo = await db.sequelizeDB.query(foodInfoQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(foodInfo);
    } catch (err) {
      console.error(err);
      res.json({message: 'Error'});
    }
  });

// Get food information with meal_id
router.get('/:meal_id', async (req, res) => {
    const diningHallIDQuery = `SELECT * FROM macros WHERE meal_id =${req.params.meal_id}`;
    try {
      const foodInfo = await db.sequelizeDB.query(foodInfoQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(foodInfo);
    } catch (err) {
      console.error(err);
      res.json({message: 'Error'});
    }
  });

export default router;