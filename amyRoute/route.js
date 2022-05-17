import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the group 22 database');
});

router.get('/Group22_Dining_Hall_Tracker', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    const reply = meals.length > 0 ? { data: meals } : { message: 'no meal found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/Group22_Dining_Hall_Tracker/:meal_id', async (req, res) => {
  try {
    const meals = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/Group22_Dining_Hall_Tracker', async (req, res) => {
  try {
    console.dir(req.body, {depth: null});
    console.log(req.body?.id);
    const hallId = req.body?.id || 0;
    const result = await db.sequelizeDB.query(hallUpdate, {
      replacements: { hall_hours_id: hallId },
      type: Sequelize.QueryTypes.UPDATE
    });
    res.json({ data: result });
  } catch (err) {
    console.log(err);
    res.send({ message: err});
  }
});

export default router;