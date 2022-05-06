/* eslint-disable linebreak-style */
import express from 'express';
// import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/address').get(async (req, res) => {
  try {
    const testQuery = 'SELECT * FROM location';
    const test = await db.sequelizeDB.query(testQuery);

    res.json(test);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

router.route('/restaurant').get(async (req, res) => {
  try {
    const testQuery = 'SELECT * FROM restaurant';
    const test = await db.sequelizeDB.query(testQuery);

    res.json(test);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

export default router;