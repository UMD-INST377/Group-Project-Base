import express from 'express';
import Sequelize from 'sequelize';

const router = express.Router();

router.get('/Group22_Dining_Hall_Tracker', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});
