/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import db from '../database/initializeDB.js';

const router = express.Router();

const dbQuery = 'SELECT * FROM park_name.park_admission;';

router.route('/park_admission').get(async (req, res) => {
  let result;
  try {
    result = await db.sequelizeDB.query(dbQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/park_admission/:id', async (req, res) => {
  let result;
  try {
    result = await db.sequelizeDB.query(dbQuery, {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(result);
    const filt = result.filter((obj) => obj.park.id === req.params.id);
    res.send(filt);
  } catch (err) {
    console.log(err);
  }
});

export default router;
