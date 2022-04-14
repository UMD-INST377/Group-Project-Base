import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import mealsQuery from '../controller/meals_query.js';

const router = express.Router();

// /will
router.route('/')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(mealsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.json({ message: 'Server error' });
    }
  });

export default router;