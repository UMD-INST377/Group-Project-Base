import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

import db from '../database/initializeDB.js';
import songDisplayQuery from '../controllers/songDisplay_query.js'
import songDisplayPostQuery from '../controllers/songDisplay_post_query.js'

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result = await db.sequelizeDB.query(songDisplayQuery, {
        type: sequelize.QueryTypes.SELECT
      })
      res.json({data: result})

    } catch (error) {
      console.log('Touched sqlDemo get error', error)
      res.json({message: "error in sqlDemo"})

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
  })

export default router;