/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/album').get(async (req, res) => {
  try {
    const art = await db.Album.findAll();
    res.json({data: art});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});
router.get('/album/:album_id', async (req, res) => {
  try {
    const art = await db.Album.findAll({
      where: {
        album_id: req.params.album_id
      }
    });
    res.json({data: art});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

export default router;