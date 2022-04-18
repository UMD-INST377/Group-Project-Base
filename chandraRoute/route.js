import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import hallQuery from '../controllers/halls_query.js';
import hallUpdate from '../controllers/halls_update.js';
// import { UPDATE } from 'sequelize/types/query-types';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the group 22 database');
});

router.get('/Group22_Dining_Hall_Tracker', async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no dining hall found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/Group22_Dining_Hall_Tracker/:hall_hours_id', async (req, res) => {
  try {
    const hour = await db.HallHours.findAll({
      where: {
        hall_hours_id: req.params.hall_hours_id
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
      replacements: { hall_hours_id: hallId},
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
      replacements: { hall_hours_id: hallId},
      type: Sequelize.QueryTypes.UPDATE
    });
    res.json({ data: result });
  } catch (err) {
    console.log(err);
    res.send({ message: err});
  }
});

export default router;