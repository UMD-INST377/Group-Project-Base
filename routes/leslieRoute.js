import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import macros_query from '../controller/macros_query.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result  = await db.sequelizeDB.query(macros_query, {
          type: sequelize.QueryTypes.SELECT
        });
        res.json({data: []});
    } catch (error) {
        console.log(error);
        res.json({message: 'server error'});
    }
  });

export default router;
