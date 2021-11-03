/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Directors Endpoints////////
/// /////////////////////////////////
router.route('/director')
  .get(async (req, res) => {
    try {
      console.log('touched /director with GET');
      res.json({message: 'touched /director with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log('touched /director with PUT');
      res.json({message: 'touched /director with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /director with POST');
      res.json({message: 'touched /director with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /director with DELETE');
      res.json({message: 'touched /director with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;