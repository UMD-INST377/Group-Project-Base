/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

// import { getPlatforms, putPlatforms, postPlatforms, deletePlatforms}
// from '../server/controllers/platforms.js';
import getPlatforms from '../server/controllers/platforms/getPlatforms.js';
import putPlatforms from '../server/controllers/platforms/putPlatforms.js';
import postPlatforms from '../server/controllers/platforms/postPlatforms.js';
import deletePlatforms from '../server/controllers/platforms/deletePlatforms.js';

const router = express.Router();
/// /// Platform Endpoints ///////
router.route('/platforms')
  .get(async(req, res) => {
    try {
      const retrievePlatforms = await db.sequelizeDB.query(
        getPlatforms, {
          type: sequelize.QueryTypes.SELECT
        }
      );
      res.send(retrievePlatforms);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      const newPlatforms = await db.sequelizeDB.query(
        putPlatforms, {
          type: sequelize.QueryTypes.INSERT // change later
        }
      );
      res.send(newPlatforms);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post(async(req, res) => {
    try {
      const updatePlatforms = await db.sequelizeDB.query(
        postPlatforms, {
          type: sequelize.QueryTypes.UPDATE // change later
        }
      );
      res.send(updatePlatforms);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .delete(async(req, res) => {
    try {
      const removePlatforms = await db.sequelizeDB.query(
        deletePlatforms, {
          type: sequelize.QueryTypes.DELETE // change later
        }
      );
      res.send(removePlatforms);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });
export default router;