/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// ////Genral Information Endpoints////////
router.get('/general_info', async (req, res) => {
    try {
        console.log("General Information with GET");
        const games = await db.general_information.findAll();
        res.json(games);
      } catch (err) {
        console.error(err);
        res.json({error: 'Something went wrong on the server'});
      }
    });
  
  
router.get('/general_info/:game_id', async (req, res) => {
    try {
        console.log("General Information with GET");
        const game = await db.general_information.findAll({
        where: {
          game_id: req.params.game_id
        }
      });
  
      res.json(game);
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server'});
    }
  });
  
router.post('/general_info', async (req, res) => {
    const games = await db.general_information.findAll();
    const currentId = (await games.length) + 1;
    try {
        console.log("General Information with POST");
      const newGame = await db.general_information.create({
        game_id: currentId,
        game_name: req.body.game_name,
        release_date: req.body.elease_date,
        free_to_play: req.body.free_to_play,
        player_population: req.body.player_population
      });
      res.json(newGame);
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server'});
    }
  });
  
router.delete('/general_info/:game_id', async (req, res) => {
    try {
        console.log("General Information with DELETE");
      await db.general_information.destroy({
        where: {
          game_id: req.params.game_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server'});
    }
  });
  
router.put('/general_info', async (req, res) => {
    try {
        console.log("General Information with PUT");
        await db.general_information.update(
        {
          game_name: req.body.game_name,
          release_date: req.body.release_date,
          free_to_play: req.body.free_to_play,
          player_population: req.body.player_population
        },
        {
          where: {
            game_id: req.body.game_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server'});
    }
  });