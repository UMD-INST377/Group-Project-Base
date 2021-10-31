/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the West Coast Hurricane API!');
});


router.get('/hurricanes', async (req, res) => {
  try {
    const hurricanes = await db.hurricane.findAll();
    const reply = hurricanes.length > 0 ? { data: hurricanes } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
