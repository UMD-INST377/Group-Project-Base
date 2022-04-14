import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the group 22 database');
});

router.get('/Group22_Dining_Hall_Tracker', async (req, res) => {
  try {
    const schedule = await db.DiningHall.findAll();
    const reply = schedule.length > 0 ? { data: schedule } : { message: 'no schedule(s) found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/Group22_Dining_Hall_Tracker/:schedule_id', async (req, res) => {
  try {
    const hall_schedule = await db.HallHours.findAll({
      where: {
        schedule_id: req.params.schedule_id
      }
    });
    res.json(hour);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;