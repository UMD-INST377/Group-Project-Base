/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Genre Endpoints////////
/// /////////////////////////////////
router.route('/genre')
  .get(async (req, res) => {
    try {
      console.log('touched /genre with GET');
      res.json({message: 'touched /genre with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log('touched /genre with PUT');
      res.json({message: 'touched /genre with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /genre with POST');
      res.json({message: 'touched /genre with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /genre with DELETE');
      res.json({message: 'touched /genre with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;