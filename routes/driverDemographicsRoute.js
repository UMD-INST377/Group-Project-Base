/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();



// /////////////////////////////////
// // driverDemogrpahics ////////
// /////////////////////////////////
router.route('/driverDemographics')
  .get((req, res) => {
    try {
      console.log('You touched the destination route!');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put driverDemographics endpoint'})
    } catch(error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post driverDemographics endpoint'})
    } catch(error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete driverDemographics endpoint'})
    } catch(error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });

export default router;