/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////COVID Stats Endpoint////////
/// /////////////////////////////////
router.route('/covid-stats')
  .get(async (req, res) => {
    try {
      res.json({message: "Touched /covid-stats with GET"});
      console.log("Touched /covid-stats with GET");
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: "Touched /covid-stats with PUT"});
      console.log("Touched /covid-stats with PUT");
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: "Touched /covid-stats with POST"});
      console.log("Touched /covid-stats with POST");
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: "Touched /covid-stats with DELETE"});
      console.log("Touched /covid-stats with DELETE");
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });


export default router;
