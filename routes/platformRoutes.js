/* eslint-disable no-console */
import express from 'express';
// import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import platforms from '../server/controllers/platforms.js';

const router = express.Router();
/// /// Platform Endpoints ///////
router.route('/platforms')
  .get(async(req, res) => {
    try {
      const retrievePlatforms = await db.sequelizeDB.query(
        platforms.get
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
        platforms.put
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
        platforms.post
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
        platforms.remove
      );
      res.send(removePlatforms);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });
export default router;