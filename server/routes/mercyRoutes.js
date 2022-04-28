/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import db from '../../database/initializeDB.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('touched mercyRoutes get');
      res.json({data: []});
    } catch (error) {
      console.log('mercyRoutes get error', error);
      res.json({message: 'error in mercyRoutes'});
    }
  });

export default router;