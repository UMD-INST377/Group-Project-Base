/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import AlbumsQuery from '../controllers/Albums_query.js';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sql get');
      const result = await db.sequelizeDB.query(AlbumsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result });
    } catch (error) {
      console.log('sql get error', error);
      res.json({ message: 'error in sql'});
    }
  });

export default router;