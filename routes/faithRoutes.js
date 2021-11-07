import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import actorsMap from '../controllers/actorsController.js';

const expressRouter = express.Router();

/// Actors Endpoints ///
const defaultMsg = 'touched /actors with ';
const errorMsg = 'Server Error with ';

expressRouter.route('/actors')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(actorsMap, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log(`${defaultMsg} GET`);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} GET`});
    }
  })
  
  .put(async (req, res) => {
    try {
      console.log(`${defaultMsg} PUT`);
      res.json({message: `${defaultMsg} PUT`});
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} PUT`});
    }
  })

  .post(async (req, res) => {
    try {
      console.log(`${defaultMsg} POST`);
      res.json({message: `${defaultMsg} POST`});
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} POST`});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log(`${defaultMsg} DELETE`);
      res.json({message: `${defaultMsg} DELETE`});
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} DELETE`});
    }
  });

export default expressRouter;