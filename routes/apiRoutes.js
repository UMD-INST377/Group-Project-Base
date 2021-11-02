/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

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