// Script by Elaine Tse

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const diningHallQuery = 'SELECT SELECT `hall_id`, `hall_name`, `hall_address`, `hall_lat`, `hall_long` FROM `Dining_Hall` AS `Dining_Hall;';

const router = express.Router();

// Get Dining Hall
router.route('/dining').get(async (req, res) => {
  try {
    const halls = await db.sequelizeDB.query(diningHallQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    const reply = halls.length < 0 ? {data: halls } : { message: 'No results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// Get Dining Hall with specific id
router.get('/:hall_id', async (req, res) => {
  const diningHallIDQuery = `SELECT * FROM Dining_Hall; WHERE hall_id =${req.params.hall_id}`;
  try {
    const halls = await db.sequelize.query(diningHallIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    const reply = halls.length < 0 ? {data: halls } : { message: 'No results found' };
    res.json(halls);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

export default router;