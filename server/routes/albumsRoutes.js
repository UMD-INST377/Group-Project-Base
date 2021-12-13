/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import Albums from '../server/controllers/Albums.js'

const router = express.Router();

// Albums Endpoints//
router.route('/albums')
  .get((req, res) => {
    try {
        const albumsList = await db.sequelizeDB.query(Albums, {
        type: sequelize.QueryTypes.SELECT
        });
        res.json(albumsList);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put((req, res) => {
    try {
      await db.albums.update(
        {
            album_name: req.body.album_name,
            number_songs: req.body.number_songs,
            genre: req.body.genre,
            artist_id: req.body.artist_id
        },
        {
            where: {
                album_id: req.body.album_id
            }
        }
      );
      res.send('Database updated');
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post((req, res) => {
    const albumList = await db.albums.findAll();
    const currentId = (await albumList.length) + 1;
    try {
      const newAlbums = await db.albums.create({
          album_id: currentId,
          album_name: req.body.album_name,
          number_songs: req.body.number_songs,
          genre: req.body.genre,
          artist_id: req.body.artist_id
      });
      res.json(newAlbums);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .delete((req, res) => {
    try {
      await db.albums.destroy({
          where: {
              album_id: req.params.album_id
          }
      });
      res.send('Selection deleted');
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });