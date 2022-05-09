/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/dining2', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});
console.log('hello');

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
router.get("/area", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query("SELECT * FROM Area");
    res.json({ data: result[0] });
  } catch (err) {
    console.error(err);
    res.send("Server error");
  }
});
export default router;
