import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import actorsMap from '../controllers/actorsController.js';

const expressRouter = express.Router();

/// Actor Endpoints ///
const defaultMsg = 'touched /actors with ';
const errorMsg = 'Server Error!'

expressRouter.route('/actors')
  .get(async(req, res) => {
    try {
      console.log(`${defaultMsg} GET`);
      res.json({message: `${defaultMsg} GET`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  }) 

  .put(async (req, res) => {
    try {
      console.log(`${defaultMsg} PUT`);
      res.json({message: `${defaultMsg} PUT`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .post(async (req, res) => {
    try {
      console.log(`${defaultMsg} POST`);
      res.json({message: `${defaultMsg} POST`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log(`${defaultMsg} DELETE`);
      res.json({message: `${defaultMsg} DELETE`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  });

export default expressRouter;