import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

import db from '../database/initializeDB.js';
import songDisplayQuery from '../controllers/songDisplay_query.js'

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result = await db.sequelizeDB.query(songDisplayQuery, {
        type: sequelize.QueryTypes.SELECT
      })
      res.json({data: result})

    } catch (error) {
      console.log('Touched sqlDemo get error', error)
      res.json({message: "error in sqlDemo"})

    }
  })

export default router;