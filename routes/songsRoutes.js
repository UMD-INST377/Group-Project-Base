import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getSongs from './controllers/getSongs.js';

const router = express.Router()

router.route('/songs')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getSongs, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched songs with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });
export default router