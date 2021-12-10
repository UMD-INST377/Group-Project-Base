/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import DELETEController from '../controllers/DELETEController.js';
import GETController from '../controllers/GETController.js';
import POSTController from '../controllers/POSTController.js';
import PUTController from '../controllers/PUTController.js';

import db from '../database/initializeDB.js';

const router = express.Router();

/// //////////////////////////////////
/// ////Congress Profiles Endpoints///
/// //////////////////////////////////
router.get('/profiles',async(req, res) => {
  try {
    const profiles = await db.sequelizeDB.query(GETcontroller.profiles, {
      type: sequelize.QueryTypes.SELECT
    });
    } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
//test
router.put(async(req, res) => {
  try {
    console.log('touched /profiles endpoint PUT');
    res.send('PUT profiles endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.post(async(req, res) => {
  try {
    const insertQuery = await db.sequelizeDB.query(POSTcontroller.addProfiles, {
      type: sequelize.QueryTypes.INSERT,
  })} catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.delete(async(req, res) => {
  try {
    console.log('touched /profiles endpoint DELETE')
    res.send('DELETE profiles endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})
/// /////////////////////////////////
/// ////Congress Endpoints////////
/// /////////////////////////////////
router.get('/contact',async(req, res) => {
  try {
    const contact = await db.sequelizeDB.query(GETcontroller.contact, {
      type: sequelize.QueryTypes.SELECT
      
    });

  

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
      
  })} catch (error) {
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
    });

    
    
    } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.put(async(req, res) => {
  try {
    console.log('touched /members endpoint PUT');
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
  })} catch (error) {
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
///Chris Iemma Routes///
router.route('/personal_info').get(async(req, res) => {
  try {
    const memberProfiles = await db.sequelizeDB.query(GETcontroller.personal_info, {
      type: sequelize.QueryTypes.SELECT
    })
    console.log('touch /Personal Information with GET')
    res.json({phone: 'touched /Personal Information with GET'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/personal_info').put(async(req, res) => {
  try {
    console.log('touch /Personal Information with PUT')
    res.json({phone: 'touched /Personal Information with PUT'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/personal_info').post(async(req, res) => {
  try {
    console.log('touch /Personal Information with POST')
    res.json({phone: 'touched /Personal Information with POST'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/personal_info').delete(async(req, res) => {
  try {
    console.log('touch /Personal Information with DELETE')
    res.json({phone: 'touched /Personal Information with DELETE'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})
///Chris Iemma Congress Personal Information///
router.get('/personal_info',async(req, res) => {
  try {
    const members = await db.sequelizeDB.query(GETcontroller.personal_info, {
      type: sequelize.QueryTypes.SELECT
    });

    console.log('touched /Personal Information GET');
    
    } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.put(async(req, res) => {
  try {
    console.log('touched /Personal Information PUT')
    res.send('PUT Personal Information');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.post(async(req, res) => {
  try {
    const insertQuery = await db.sequelizeDB.query(POSTcontroller.addPersonal_Info, {
      type: sequelize.QueryTypes.INSERT,
  })} catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
});
router.delete(async(req, res) => {
  try {
    console.log('touched /Personal Information DELETE')
    res.send('DELETE Personal Information');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})

export default router;
