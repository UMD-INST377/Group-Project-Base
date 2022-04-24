import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the group 22 database');
});

//TODO: call route /"Schedule" because its clearer to the user. Use hyphens for route names instead of underscores or camelCase
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

router.post('/Group22_Dining_Hall_Tracker', async (req, res) => {
  try {
    console.dir(req.body, {depth: null});
    console.log(req.body?.id);
    const hallId = req.body?.id || 0;
    const result = await db.sequelizeDB.query(hallQuery, {
      replacements: { hall_schedule: hallId},
      type: Sequelize.QueryTypes.SELECT
    });
    res.json({ data: result });
  } catch (err) {
    console.log(err);
    res.send({ message: err});
  }
});

router.put('/Group22_Dining_Hall_Tracker', async (req, res) => {
  try {
    console.dir(req.body, {depth: null});
    console.log(req.body?.id);
    const hallId = req.body?.id || 0;
    const result = await db.sequelizeDB.query(hallUpdate, {
      replacements: { hall_schedule: hallId },
      type: Sequelize.QueryTypes.UPDATE
    });
    res.json({ data: result });
  } catch (err) {
    console.log(err);
    res.send({ message: err});
  }
});

export default router;