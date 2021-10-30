/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

const router = express.Router();

/// ////Publisher Endpoints////////
router.route('/publisher')
  .get((req, res) => {
    try {
      //const data = await fetch()
      console.log('You touched the publisher route!');
      res.json({data: data});
    } catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
    }
  })
  .put((req, res) =>{
      try {
          res.json({message: "put publisher endpoint"});
      } 
      catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  .post((req, res) =>{
    try {
        res.json({message: "post publisher endpoint"});
    } 
    catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  .delete((req, res) =>{
    try {
        res.json({message: "delete publisher endpoint"});
    } 
    catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  ;


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