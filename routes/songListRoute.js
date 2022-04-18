import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

import db from '../database/initializeDB.js';
import songListQuery from '../controllers/songList_query.js';
import songListQueryAll from '../controllers/songList_queryAll.js';
import songListPostQuery from '../controllers/songList_post_query.js';

//router.get('/', (req, res) => {
//    console.log('You touched the Song List Route.');
//    res.json({message: 'Welcome to the Group 4 Spotify Database.'});
//});

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched songDisplayRoute get');
      const result = await db.sequelizeDB.query(songListQueryAll, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log('Touched songListRoute get error', error);
      res.json({message: 'error in songListRoute'});
    }
  })

  .post(async (req, res) => {
    try {
      console.dir(req.body, {depth: null});
      console.log(req.body?.tname);
      const songName = req.body?.tname || '';
      const result = await db.sequelizeDB.query(songListPostQuery, {
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
      console.log('Touched songListRoute get');
      const result = await db.sequelizeDB.query(songListQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log('Touched songListRoute get error', error);
      res.json({message: 'error in songListRoute'});
    }
  })




  .post((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

export default router;