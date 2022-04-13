/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const dbQuery = `SELECT * FROM earthquake.buildings_impacted;`;

const router = express.Router();

router.route('/building').get(async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(dbQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.route('/building/:building_id').get(async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(dbQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    const specificId = result.filter((obj) => {
      return obj.building_id == req.params.building_id;
    });
    res.send(specificId);
  } catch (err) {
    console.log(err);
  }
});
export default router;