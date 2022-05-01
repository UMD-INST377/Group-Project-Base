/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

import tracks from '../controllers/trackList_query.js';

const router = express.Router();

/// ////Tracks Endpoints////////
router.route('/tracks')
  .get(async (req, res) => {
    try {
      console.log('Touched /tracks with GET');
      const trackList = await db.sequelizeDB.query(
        tracks.get
      );
      res.send(trackList);
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log('Touched /tracks with PUT');
      const insertTracks = await db.sequelizeDB.query(
        tracks.insert
      );
      res.send(insertTracks);
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log('Touched /tracks with POST');
      const updateTracks = await db.sequelizeDB.query(
        tracks.update
      );
      res.send(updateTracks);
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  })

  .delete(async(req, res) => {
    try {
      console.log('Touched /tracks with DELETE');
      const deleteTracks = await db.sequelizeDB.query(
        tracks.remove
      );
      res.send(deleteTracks);
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  });
export default router;