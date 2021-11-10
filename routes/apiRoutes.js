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
// All endpoints should follow the basic outline of this first endpoint.
// Any instance of "db.XXX" should be your specific table as defined in the models folder.
// Make sure you add async and check that your 'catch' is formatted correctly to avoid errors.

router.route('/collisionType')
  .get(async(req, res) => {
    try {
      const collision_type = await db.collision_type.findAll();
      console.log('You touched the /collisionType route with GET');
      res.json(collision_type);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  })
  .put(async(req, res) => {
    try {
      await db.collision_type.update(
        {
          collision_desc: req.body.collision_desc
        },
        {
          where: {
            collision_type_id: req.body.collision_type_id
          }
        }
      );
      console.log('You touched the /collisionType route with PUT');
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  })
  .post(async(req, res) => {
    const collision_type = await db.collision_type.findAll();
    const currentID = (await collision_type.length) + 1;
    try {
      const collisionTypeCreate = await db.collision_type.create({
        collision_type_id: currentID,
        collision_desc: req.body.collision_desc
      });
      console.log('You touched the /collisionType route with POST');
      res.json(collisionTypeCreate);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /collisionType');
    }
  })
  .delete(async(req, res) => {
    try {
      await db.collision_type.destroy({
        where: {
          collision_type_id: req.params.collision_type_id
        }
      });
      console.log('You touched the /collisionType route with DELETE');
      res.send('Successfully deleted');
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

  .put(async(req, res) => {
    try {
      await db.crash_information.update(
        {
          report_id: req.body.report_id,
          location_id: req.body.location_id,
          report_type: req.body.report_type,
          acc_date: req.body.acc_date,
          collision_type_id: req.body.collision_type_id
        },
        {
          where: {
            report_id: req.body.report_id
          }
        }
      );
      console.log('You touched the /crashInformation route with PUT');
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /crashInformation');
    }
  })

  .post(async(req, res) => {
    const crash_information = await db.crash_information.findAll();
    const currentID = (await crash_information.length) + 1;
    try {
      const newCrashInformation = await db.crash_information.create({
        report_id: currentID,
        location_id: req.body.location_id,
        report_type: req.body.report_type,
        acc_date: req.body.acc_date,
        collision_type_id: req.body.collision_type_id
      });
      console.log('You touched the /crashInformation route with POST');
      res.json(newCrashInformation);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /crashInformation');
    }
  })

  .delete(async(req, res) => {
    try {
      await db.crash_information.destroy({
        where: {
          report_id: req.params.report_id
        }
      });
      console.log('You touched the /crashInformation route with DELETE');
      res.send('Successfully deleted');
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /crashInformation');
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