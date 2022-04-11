// Script by Elaine Tse

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const diningHallQuery = 'SELECT * FROM dining_hall';

const router = express.Router();

// Get Dining Hall
router.route('/').get(async (req, res) => {
  try {
    const halls = await db.sequelizeDB.query(diningHallQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(halls);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// Get Dining Hall with specific id
router.get('/:hall_id', async (req, res) => {
  const diningHallIDQuery = `SELECT * FROM dining_hall WHERE hall_id =${req.params.hall_id}`;
  try {
    const halls = await db.sequelizeDB.query(diningHallIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(halls);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

export default router;