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
router.route('/phone').get(async(req, res) => {
  try {
    console.log('touch /phone with GET')
    res.json({phone: 'touched /phone with GET'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/phone').put(async(req, res) => {
  try {
    console.log('touch /phone with PUT')
    res.json({phone: 'touched /phone with PUT'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/phone').post(async(req, res) => {
  try {
    console.log('touch /phone with POST')
    res.json({phone: 'touched /phone with POST'})
  } catch (error) {
    console.log(error)
    res.json({error: 'Error Occured'})
  }
})

router.route('/phone').delete(async(req, res) => {
  try {
    console.log('touch /phone with DELETE')
    res.json({phone: 'touched /phone with DELETE'})
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
router.route('/members')
.get(async(req, res) => {
  try {
    console.log('touched /members endpoint GET')
    res.send(' GET members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})
.put(async(req, res) => {
  try {
    console.log('touched /members endpoint PUT')
    res.send('PUT members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})
.post(async(req, res) => {
  try {
    console.log('touched /members endpoint POST')
    res.send('POST members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})
.delete(async(req, res) => {
  try {
    console.log('touched /members endpoint DELETE')
    res.send('DELETE members endpoint');
  } catch (error) {
    console.log(error)
    res.json({message: 'Error'})
  }
})