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
// All endpoints should follow the basic outline of this first .get route

router.route('/collisionType')
  .get(async(req, res) => {
    try {
      const collision_type = await db.collision_type.findAll();   //This pulls from collision_type model
      console.log('You touched the /collisionType route with GET');
      res.json(collision_type);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  })
  .put((req, res) => {
    try {
      console.log('You touched the /collisionType route with PUT');
      // res.json({data: data});
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  })
  .post((req, res) => {
    try {
      console.log('You touched the /collisionType route with POST');
      // res.json({data: data});
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  })
  .delete((req, res) => {
    try {
      console.log('You touched the /collisionType route with DELETE');
      // res.json({data: data});
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  });

/// Mark's Endpoint CrashInformation

router.route('/crashInformation')
  .get(async (req, res) => {
    try {
      const crash_information = await db.crash_information.findAll();
      console.log('You touched the crashInformation endpoint!');
      res.json(crash_information);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /crashInformation');
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