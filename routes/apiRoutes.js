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
    const memberProfiles = await db.sequelizeDB.query(GETController.memberProfiles, {
      type: sequelize.QueryTypes.SELECT
    });
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

    res.send('PUT memberProfiles endpoint')
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})
router.route('/profiles').post(async(req, res) => {
  try {
    const createNew = await db.sequelizeDB.query(POSTcontroller.addMemberProfiles, {
      type: sequelize.QueryTypes.INSERT,
      console.log('touched /profiles endpoint POST')
      res.send('POST memberProfiles endpoint')
    } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})
router.route('/profiles').delete(async(req, res) => {
  try {
    await db.sequelizeDB.destroy({
      where: {
        Group26_congress_db: req.params.Group26_congress_db
      }
    })
    console.log('touch /profiles with DELETE')
    res.send('DELETE memberProfiles endpoint');
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

/// /////////////////////////////////
/// ////Congress Endpoints////////
/// /////////////////////////////////
router.get('/contact',async(req, res) => {
  try {
    const contact = await db.sequelizeDB.query(GETcontroller.contact, {
      type: sequelize.QueryTypes.SELECT
    )};

    console.log('Touched contact with GET')

  } catch (error) {
    console.log(error);
    res.json({message: 'Something went wrong'});
  }
}); 
router.put(async(req, res) => {
  try {
    console.log('You touched /contact with PUT');
    res.json({message: 'GET Congress endpoint'});
  } catch (error) {
    console.log(error);
    res.json({message: 'Something went wrong'});
  }
});
router.post(async(req, res) => {
  try {
    const insertQuery = await db.sequelizeDB.query(POSTcontroller.addContact, {
      type: sequelize.QueryTypes.INSERT,
      console.log('touched /contact endpoint POST')
      res.send('POST contact endpoint');
  } catch (error) {
    console.log(error);
    res.json({message: 'Something went wrong'});
  }
});
router.delete(async(req, res) => {
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