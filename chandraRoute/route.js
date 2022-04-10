import express from 'express';
import Sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the group 22 database');
});

router.route('/Group22_Dining_Hall_Tracker')
  .get(async (req, res) => {
    try {
      const data = await db.Group22_Dining_Hall_Tracker.findAll();
      res.json(data);
    } catch (err) {
      console.error(err);
    }
  });