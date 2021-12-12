/* eslint-disable no-console */
import express from 'express';
// import sequelize from 'sequelize';//

import db from '../database/initializeDB.js';

import publisher from '../server/controllers/publisher.js';

const router = express.Router();
/// /// Platform Endpoints ///////
router.route('/publisher')
  .get(async(req, res) => {
    try {
      const retrievePublisher = await db.sequelizeDB.query(
        publisher.get
      );
      res.send(retrievePublisher);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      const newPublisher = await db.sequelizeDB.query(
        publisher.put
      );
      res.send(newPublisher);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post(async(req, res) => {
    try {
      const updatePublisher = await db.sequelizeDB.query(
        publisher.post
      );
      res.send(updatePublisher);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .delete(async(req, res) => {
    try {
      const removePublisher = await db.sequelizeDB.query(
        publisher.remove
      );
      res.send(removePublisher);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });
export default router;