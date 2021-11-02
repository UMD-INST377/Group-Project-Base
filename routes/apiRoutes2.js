/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Black Musicians API!');
});

/// /////////////////////////////////////
/// ///blackmusicians database///////////
/// /////////////////////////////////////

router.route('/album')
  .get((rec, res) => {
    try {
      console.log('touched /album with GET');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((rec, res) => {
    try {
      console.log('touched /album with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post((rec, res) => {
    try {
      console.log('touched /album with POST');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete((rec, res) => {
    try {
      console.log('touched /album with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });
export default router;