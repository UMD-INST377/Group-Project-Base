/* eslint-disable no-console */
import express, { request } from 'express';
import sequelize from 'sequelize';//

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
  // update
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
  // insert
  .post(async(req, res) => {
    try {
      let newGeneral = general.post.replace(':game_id', req.body.game_id);
      newGeneral = general.post.replace(':name', req.body.name);
      newGeneral = general.post.replace(':free_to_play', req.body.free_to_play);
      newGeneral = general.post.replace(':population', req.body.population);

      const newGames = await db.sequelizeDB.query(
        newGeneral

      );

      console.log(newGame);
      res.send(newGames);
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
