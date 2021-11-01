/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// //////////////////////////////
/// Crash Data Set
/// //////////////////////////////

router.get('/', (req, res) => {
  res.send('Welcome to Crash Data API!');
});

router.route('/crashInformation')
  .get(async (req, res) => {
    try {
      console.log("You touched the crashInformation endpoint!");
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put((req, res) => {
      try {
        res.json({message: "You touched crashInformation with PUT"});
      } catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
      }
    })

    .post((req,res) => {
      try {
        res.json({message: "You touched crashInformation with POST"});
      } catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
      }
    })

    .delete((req,res) => {
      try {
        res.json({message: "You touched crashInformation with DELETE"});
      } catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
      }
    })

export default router;