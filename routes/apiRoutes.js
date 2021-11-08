/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the default route!');
});

/// /////////////////////////////////
/// ////Car Data Endpoints////////
/// /////////////////////////////////

// Jordan's API Routes to Car Endpoint
router.route('/collisionType')
  .get(async(req, res) => {
    try {
      console.log('You touched the /collisionType route with GET');
      // res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      console.log('You touched the /collisionType route with PUT');
      // res.json({data: data});
    } catch (err) {
      console.log(EvalError);
      res.json({error: error});
    }
  })
  .post((req, res) => {
    try {
      console.log('You touched the /collisionType route with POST');
      // res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete((req, res) => {
    try {
      console.log('You touched the /collisionType route with DELETE');
      // res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

/// Mark's Endpoint CrashInformation

router.route('/crashInformation')
  .get(async (req, res) => {
    try {
      console.log('You touched the crashInformation endpoint!');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put((req, res) => {
    try {
      res.json({message: 'You touched crashInformation with PUT'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .post((req, res) => {
    try {
      res.json({message: 'You touched crashInformation with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .delete((req, res) => {
    try {
      res.json({message: 'You touched crashInformation with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

/// Matt's endpoint driverDemographics

router.route('/driverDemographics')
  .get(async(req, res) => {
    try {
      console.log('You touched the crashInformation endpoint!');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put((req, res) => {
    try {
      res.json({message: 'You touched crashInformation with PUT'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .post((req, res) => {
    try {
      res.json({message: 'You touched crashInformation with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .delete((req, res) => {
    try {
      res.json({message: 'You touched crashInformation with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

// Michael's Endpoint to the vehicleData

router.route('/vehicleData')
  .get(async(req, res) => {
    try {
      console.log('You touched the vehicleData endpoint!');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put((req, res) => {
    try {
      res.json({message: 'You touched vehicleData with PUT'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .post((req, res) => {
    try {
      res.json({message: 'You touched vehicleData with POST'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .delete((req, res) => {
    try {
      res.json({message: 'You touched vehicleData with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;