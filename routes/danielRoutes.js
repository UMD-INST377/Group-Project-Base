import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

const expressRouter = express.Router();

// Actors_Linking Endpoints
const actorLinkingMsg = 'touched /actors_linking with ';
const errorMsg = 'Server Error!';

expressRouter.route('/actors_linking')
  .get(async(req, res) => {
    try {
      console.log(`${actorLinkingMsg} GET`);
      res.json({message: `${actorLinkingMsg} GET`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  }) 

  .put(async (req, res) => {
    try {
      console.log(`${actorLinkingMsg} PUT`);
      res.json({message: `${actorLinkingMsg} PUT`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .post(async (req, res) => {
    try {
      console.log(`${actorLinkingMsg} POST`);
      res.json({message: `${actorLinkingMsg} POST`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log(`${actorLinkingMsg} DELETE`);
      res.json({message: `${actorLinkingMsg} DELETE`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  });

// Awards_Linking Endpoints 
const awardsLinkingMsg = 'touched /awards_linking with ';

expressRouter.route('/awards_linking')
  .get(async(req, res) => {
    try {
      console.log(`${awardsLinkingMsg} GET`);
      res.json({message: `${awardsLinkingMsg} GET`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  }) 

  .put(async (req, res) => {
    try {
      console.log(`${awardsLinkingMsg} PUT`);
      res.json({message: `${awardsLinkingMsg} PUT`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .post(async (req, res) => {
    try {
      console.log(`${awardsLinkingMsg} POST`);
      res.json({message: `${awardsLinkingMsg} POST`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log(`${awardsLinkingMsg} DELETE`);
      res.json({message: `${awardsLinkingMsg} DELETE`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  });

export default expressRouter;