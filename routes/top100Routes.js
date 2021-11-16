/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import top100FilmTableCustom from '../controllers/top100Controller.js';

const router = express.Router();

// /////////////////////////////////////
// ///.. Modified Endpoint Top 100 Movies ////
// /////////////////////////////////////////////
router.route('/top100')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(top100FilmTableCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('Touched our modified Top100 films table with GET');
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Failed to GET the modified Top100 films table'});
    }
  });

export default router;