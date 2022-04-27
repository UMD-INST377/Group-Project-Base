/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import util from 'util';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/Album').get(async (req, res) => {
  try {
    const art = await db.album.findAll();
    res.json({data: art});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});
router.get('/album/:album_id', async (req, res) => {
  try {
    const art = await db.album.findAll({
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

router.post('/album', async (req, res) => {
  const art = db.album.findAll();
  const currentId = (await art.length) + 1;
  try {
    const newAlbum = await db.album.create({
      album_id: currentId,
      release_id: req.body.release_id,
      genre_id: req.body.genre_id,
      album_name: req.body.album_name
    });
    res.json(newAlbum);
  } catch (error) {
    console.log(error);
    res.send('Server Error')
  }
});

router.put('/album/', async (req, res) => {
  try {
    const albumUpdate = await db.album.upsert(
      {
        album_id: req.body.album_id,
        release_id: req.body.release_id,
        genre_id: req.body.genre_id,
        album_name: req.body.album_name
      },
      {
        where: {
          album_id: req.body.album_id,
        }
      }
    );
    res.json('Success. Record Updated')
  } catch (error) {
    console.log(error);
    res.send('Server Error')
  }
});

router.delete('/album/:album_id', async (req, res) => {
  try {
    const albumDelete = await db.album.destroy({
      where: {
        album_id: req.params.album_id
      }
    });
    res.json('Success. Record Deleted')
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});
export default router;