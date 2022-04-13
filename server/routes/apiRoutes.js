/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import hallIdQuery from '../controllers/diningHall.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Hispanic Restaurants API!');
});

/// /////////////////////////////////
/// //////// Area Endpoints////////// by Ryan E
/// /////////////////////////////////

router.get('/area', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(
      'SELECT * FROM Area'
    );
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

<<<<<<< Updated upstream
router.get('/area/:id', async (req, res) => {
  try {
    const {id} = req.params
    const result = await db.sequelizeDB.query(
      `SELECT * FROM Area WHERE area_id = ${id}`
    );
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
=======


export default router;


>>>>>>> Stashed changes

export default router;
