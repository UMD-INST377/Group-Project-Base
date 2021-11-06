/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

import awardsData from '../controllers/awardsController.js';

const router = express.Router();

/// /////////////////////////////////
/// ////awards Endpoints////////
/// /////////////////////////////////
router.route('/awards')
  .get(async (req, res) => {
    try {
      console.log('touched /awards with GET');
      res.json({message: 'touched /awards with GET'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on awards GET'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log('touched /awards with PUT');
      res.json({message: 'touched /awards with PUT'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on awards PUT'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /awards with POST');
      res.json({message: 'touched /awards with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on awards POST'});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /awards with DELETE');
      res.json({message: 'touched /awards with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on awards DELETE'});
    }
  });

export default router;