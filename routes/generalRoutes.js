/* eslint-disable no-console */
import express from 'express';
// import sequelize from 'sequelize';//

import db from '../database/initializeDB.js';

import general from '../server/controllers/general.js';

const router = express.Router();

/// ////Genral Information Endpoints////////
router.route('/general')
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
  .post(async(req, res) => {
    try {
      const newGames = await db.sequelizeDB.query(
        general.post
      );
      res.send(newGames);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      const updateGames = await db.sequelizeDB.query(
        general.put, {
          replacements: {
            game_id: req.body.id,
            name: req.body.name,
            free_to_play: req.body.free_to_play,
            population: req.body.population

          }
        }
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
