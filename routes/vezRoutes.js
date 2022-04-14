import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import DietaryRestrictionsQuery from '../controller/dietaryrestrictions_query.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(DietaryRestrictionsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (error) {
      console.log('error', error);
    }
  });

export default router;