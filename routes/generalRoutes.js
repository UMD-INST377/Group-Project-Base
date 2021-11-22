/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from "chalk";
import fetch from "node-fetch";

import db from '../database/initializeDB.js';

const router = express.Router();

import general from '../server/controllers/general.js';

/// ////Genral Information Endpoints////////
router.route('/general_information')
  .get(async(req, res) => {
    try {
      const retrieveGames = await db.sequelizeDB.query(
        general.get
      );
      res.send(retrieveGames);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      const newGames = await db.sequelizeDB.query(
        general.put
      );
      res.send(newGames);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post(async(req, res) => {
    try {
      const updateGames = await db.sequelizeDB.query(
        general.post
      );
      res.send(updateGames);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .delete(async(req, res) => {
    try {
      const removeGames = await db.sequelizeDB.query(
        general.remove
      );
      res.send(removeGames);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });
export default router;