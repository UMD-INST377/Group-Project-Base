/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

const dbQuery = `SELECT * FROM earthquake.damage_assessment;`;

router.route('/damage')
  .get(async(req, res) => {
    let result;
    try {
      result = await db.sequelizeDB.query(dbQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result)
    } catch (err) {
      console.log(err)
    }
  });


router.get("/damage/:id", async(req, res) => {
  let result;
  try {
    result = await db.sequelizeDB.query(dbQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    console.log(result)
    let filt = result.filter((obj) => {
      return obj.damage_id === req.params.id
    })
    res.send(filt)
  } catch (err) {
    console.log(err)
  }
})

export default router;