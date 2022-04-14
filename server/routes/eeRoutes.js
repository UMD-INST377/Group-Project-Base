// Script by Evan English

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const hallhoursQuery = 'SELECT `hall_id`, `hall_hours_id`, `day`, `schedule_id` FROM `hall_hours` AS `Hall_Hours;';

const router = express.Router();

// Get Hall Schedule
router.route('/').get(async (req, res) => {
  try {
    const halls = await db.sequelizeDB.query(hallhoursQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    const reply = halls.length < 0 ? {data: halls } : { message: 'No results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// Get Dining Hall with specific hours
router.get('/:schedule_id', async (req, res) => {
  const diningHallHoursQuery = `SELECT * FROM Hall_Hours; WHERE schedule_id =${req.params.schedule_id}`;
  try {
    const halls = await db.sequelize.query(diningHallHoursQuery, {
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