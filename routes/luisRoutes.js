/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
import express from 'express';

import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const dbQuery = `SELECT * FROM earthquake.buildings_impacted;`;
const dbQuery2 = `SELECT * FROM earthquake.buildings_impacted WHERE people_displaced = :people_displaced;`;

const router = express.Router();

router.route('/building')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(dbQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  }).post(async (req, res) => {
    try {
      console.dir(req.body, {depth: null});
      console.log(req.body?.people_displaced);
      const peopleDisplacedValue = req.body?.people_displaced;

      const result = await db.sequelizeDB.query(dbQuery2, {
        replacements: {people_displaced: peopleDisplacedValue},
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong with your request'});
    }
  });

router.route('/building/:building_id')
  .get(async (req, res) => {
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
  })
  .put(async (req, res) => {
    try {
      const peopleDisplacedValue = req.body?.people_displaced;

      const result = await db.sequelizeDB.query(dbQuery, {
        type: sequelize.QueryTypes.SELECT
      });

      const specificId = result.filter((obj) => {
        return obj.building_id == req.params.building_id;
      });
      specificId[0].people_displaced = peopleDisplacedValue;

      res.send(specificId);
      console.log(specificId[0].people_displaced);
    } catch (err) {
      console.log(err);
      res.send("Server Error");
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(dbQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      const specificId = result.filter((obj) => {
        return obj.building_id == req.params.building_id;
      });

      delete result[specificId[0].building_id - 1];
      res.send(result);
    } catch (err) {
      console.log(err);
      res.send("Server Error");
    }
  })

export default router;