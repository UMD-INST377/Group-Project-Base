import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import macrosQuery from '../controller/macros_query.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result = await db.sequelizeDB.query(macrosQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (error) {
      console.log('sqlDemo get error', error);
    }
  });

export default router;
