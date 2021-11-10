import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getPrices from '../client/controllers/getPrices.js';

const router = express.Router();

router.route('/prices')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getPrices, {type: sequelize.QueryTypes.SELECT});
      console.log('touched prices with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  })
export default router;