/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import crash_information from '../models/crash_information.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the default route!');
});

/// /////////////////////////////////
/// ////Car Data Endpoints////////
/// /////////////////////////////////

// Jordan's API Routes to Collision Type Endpoint
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
    try {
      const newCrashInformation = await db.crash_information.create({
        report_id: req.body.report_id,
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
      const driver_demographics = await db.driver_demographics.findAll();
      console.log('You touched the driverDemographics endpoint!');
      res.json(driver_demographics);
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on /driverDemographics'});
    }
  })

  .put(async(req, res) => {
    try {
      await db.driver_demographics.update(
        {
          person_id: req.body.person_id,
          report_id: req.body.report_id,
          sex_code: req.body.sex_code,
          date_of_birth: req.body.date_of_birth,
          culpability_id: req.body.culpability_id
        },
        {
          where: {
            person_id: req.body.person_id
          }
        }
      );
      console.log('You touched the /driverDemographics with PUT');
      res.send('Successfuly updated');
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on /driverDemographics'});
    }
  })

  .post(async(req, res) => {
    try {
      const newDriverDemographics = await db.driver_demographics.create({
        person_id: req.body.person_id,
        report_id: req.body.report_id,
        sex_code: req.body.sex_code,
        date_of_birth: req.body.date_of_birth,
        culpability_id: req.body.culpability_id
      });
      console.log('You touched the /driverDemographics route with POST');
      res.json(newDriverDemographics);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /driverDemographics');
    }
  })

  .delete(async(req, res) => {
    try {
      await db.driver_demographics.destroy({
        where: {
          person_id: req.body.person_id
        }
      });
      console.log('You touched the /driverDemographics route with DELETE');
      res.send('Successfully deleted');
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /driverDemographics');
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

// Teyojessam's Endpoint to the roadConditions

router.route('/roadConditions')
  .get(async (req, res) => {
    try {
      const road_conditions = await db.road_conditions.findAll();
      console.log('You touched the /roadConditions endpoint!');
      res.json(road_conditions);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /roadConditions');
    }
  })
  .put(async(req, res) => {
    try {
      await db.road_conditions.update(
        {
          junction_code: req.body.junction_code,
          junction_desc: req.body.junction_desc,
          surf_cond_code: req.body.surf_cond_code,
          surf_cond_desc: req.body.surf_cond_desc,
          rd_div_code: req.body.rd_div_code,
          rd_div_desc: req.body.rd_div_desc
        },
        {
          where: {
            junction_code: req.body.junction_code
          }
        }
      );
      console.log('You touched the /roadConditions route with PUT');
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /roadConditions');
    }
  })

  .post(async(req, res) => {
    const road_conditions = await db.road_conditions.findAll();
    const currentID = (await road_conditions.length) + 1;
    try {
      const newRoadConditions = await db.road_conditions.create({
        junction_code: currentID,
        junction_desc: req.body.junction_desc,
        surf_cond_code: req.body.surf_cond_code,
        surf_cond_desc: req.body.surf_cond_desc,
        rd_div_code: req.body.rd_div_code,
        rd_div_desc: req.body.rd_div_desc
      });
      console.log('You touched the /roadConditions route with POST');
      res.json(newRoadConditions);
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /roadConditions');
    }
  })

  .delete(async(req, res) => {
    try {
      await db.road_conditions.destroy({
        where: {
          junction_code: req.params.junction_code
        }
      });
      console.log('You touched the /roadConditions route with DELETE');
      res.send('Successfully deleted');
    } catch (err) {
      console.error(err);
      res.send('Something went wrong on /roadConditions');
    }
  });
export default router;