import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

import db from '../database/initializeDB.js';
import songDisplayQuery from '../controllers/songDisplay_query.js';
import songDisplayQueryAll from '../controllers/songDisplay_queryAll.js';
import songDisplayPostQuery from '../controllers/songDisplay_post_query.js';

//router.get('/', (req, res) => {
//    console.log('You touched the Song Display Route.');
//    res.json({message: 'Welcome to the Group 4 Spotify Database.'});
//});

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched songDisplayRoute get');
      const result = await db.sequelizeDB.query(songDisplayQueryAll, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log('Touched songDisplayRoute get error', error);
      res.json({message: 'error in songDisplayRoute'});
    }
  })

  .post(async (req, res) => {
    try {
      console.dir(req.body, {depth: null});
      console.log(req.body?.tname);
      const songName = req.body?.tname || '';
      const result = await db.sequelizeDB.query(songDisplayPostQuery, {
        replacements: {track_name: songName},
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
      
    } catch (err) {
      console.log(err);
      res.send({message: err})
      
    }
  });

router.route('/Implant/')
  .get(async (req, res) => {
    try {
      console.log('Touched songDisplayRoute get');
      const result = await db.sequelizeDB.query(songDisplayQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log('Touched songDisplayRoute get error', error);
      res.json({message: 'error in songDisplayRoute'});
    }
  })




  .post((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

export default router;