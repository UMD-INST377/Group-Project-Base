import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getPlacements from './controllers/getPlacement.js';

const router = express.Router()

router.route('/placements')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getPlacements, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched placement with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });
export default router