import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getCertifications from './controllers/getCertifications.js';

const router = express.Router()

router.route('/certifications')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getCertifications, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched certification with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });
export default router