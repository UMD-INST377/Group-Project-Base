import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import dietary_restrictionsQuery from '../controller/dietaryrestrictions_query.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result = await db.sequelizeDB.query(dietary_restrictionsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (error) {
      console.log('Touched sqlDemo get', error);
      res.json({message: 'error in sqlDemo'});
    }
  });

export default router;