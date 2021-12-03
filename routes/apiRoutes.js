/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import DELETEController from '../controllers/DELETEController.js';
import GETController from '../controllers/GETController.js';
import POSTController from '../controllers/POSTController.js';
import PUTController from '../controllers/PUTController.js';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Congress Member Endpoints////
/// /////////////////////////////////
router.route('/profiles').get(async(req, res) => {
  try {
    console.log('touch /profiles with GET')
    res.json({profiles: 'touched /profiles with GET'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/profiles').put(async(req, res) => {
  try {
    console.log('touch /profiles with PUT')
    res.json({profiles: 'touched /profiles with PUT'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/profiles').post(async(req, res) => {
  try {
    console.log('touch /profiles with POST')
    res.json({profiles: 'touched /profiles with POST'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/profiles').delete(async(req, res) => {
  try {
    console.log('touch /profiles with DELETE')
    res.json({profiles: 'touched /profiles with DELETE'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

/// /////////////////////////////////
/// ////Congress Endpoints////////
/// /////////////////////////////////
router.route('/contact')
  .get(async(req, res) => {
    try {
      console.log('You touched /contact with GET');
      res.json({message: 'GET Congress endpoint'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  })
  .put(async(req, res) => {
    try {
      console.log('You touched /contact with PUT');
      res.json({message: 'GET Congress endpoint'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  })
  .post(async(req, res) => {
    try {
      console.log('You touched /contact with POST');
      res.json({message: 'GET Congress endpoint'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  })
  .delete(async(req, res) => {
    try {
      console.log('You touched /contact with DELETE');
      res.json({message: 'GET Congress endpoint'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });

  //Jake Stark General Congress Members Table Endpoint
router.get('/members',async(req, res) => {
  try {
    const members = await db.sequelizeDB.query(GETcontroller.members, {
      type: sequelize.QueryTypes.SELECT
    )};

    console.long('Touched general members with GET');
    
    } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.put(async(req, res) => {
  try {
    console.log('touched /members endpoint PUT')
    res.send('PUT members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.post(async(req, res) => {
  try {
    const insertQuery = await db.sequelizeDB.query(POSTcontroller.addMember, {
      type: sequelize.QueryTypes.INSERT,
      console.log('touched /members endpoint POST')
      res.send('POST members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.delete(async(req, res) => {
  try {
    console.log('touched /members endpoint DELETE')
    res.send('DELETE members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})