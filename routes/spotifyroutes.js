/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Spotify Top Charts API!');
});

/// /////////////////////////////////
/// ////Playlists Endpoints//////////
/// /////////////////////////////////
router.route('/playlists')
    .get(async (req, res) => {
        try {
            const playlists = await db.Playlists.findAll();
            const reply = playlists.length > 0 ? { data: playlists } : { message: 'no results found' };
            res.json(reply);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .post((req, res) => {
        res.send('Action unavailable');
    })
    .put((req, res) => {
        res.send('Action unavailable');
    })
    .delete((req, res) => {
        res.send('Action unavailable');
    })

router.route('/playlists:playlist_id')
    .get(async (req, res) => {
        try {
            const playlist = await db.Playlists.findAll({
              where: {
                playlist_id: req.params.playlist_id
              }
            });
        
            res.json(playlist);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .post((req, res) => {
        res.send('Action unavailable');
    })
    .put((req, res) => {
        res.send('Action unavailable');
    })
    .delete((req, res) => {
        res.send('Action unavailable');
    })

/// /////////////////////////////////
/// ////USTop50 Endpoints////////////
/// /////////////////////////////////
router.route('/us')
    .get(async (req, res) => {
        try {
            const ustop50 = await db.USTop50.findAll();
            const reply = playlists.length > 0 ? { data: ustop50 } : { message: 'no results found' };
            res.json(reply);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .post(async (req, res) => {
        const ustop50 = await db.USTop50.findAll();
        const currentId = (await ustop50.length) + 1;
        try {
            const newSong = await db.USTop50.create({
            us_top50_rank: currentId,
            streams: req.body.streams,
            playlist_id: req.body.playlist_id,
            artist_id: req.body.artist_id,
            song_id: req.body.song_id
            });
            res.json(newSong);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .put(async (req, res) => {
        try {
            await db.USTop50.update(
              {
                streams: req.body.streams
              },
              {
                where: {
                  us_top50_rank: req.body.us_top50_rank
                }
              }
            );
            res.send('Successfully Updated');
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .delete((req, res) => {
        res.send('Action unavailable');
    })

router.route('/us:us_top50_rank')
    .get(async (req, res) => {
        try {
            const rank = await db.USTop50.findAll({
              where: {
                us_top50_rank: req.params.us_top50_rank
              }
            });
        
            res.json(rank);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .post((req, res) => {
        res.send('Action unavailable');
    })
    .put((req, res) => {
        res.send('Action unavailable');
    })
    .delete((req, res) => {
        res.send('Action unavailable');
    })