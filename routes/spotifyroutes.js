/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import albums from '../models/albums.js';

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

/// /////////////////////////////////
/// ////GlobalTop50 Endpoints////////////
/// /////////////////////////////////

router.route('/global')
    .get(async (req, res) => {
        try {
            const globaltop50 = await db.GlobalTop50.findAll();
            const reply = playlists.length > 0 ? { data: globaltop50 } : { message: 'no results found' };
            res.json(reply);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .post(async (req, res) => {
        const globaltop50 = await db.GlobalTop50.findAll();
        const currentId = (await globaltop50.length) + 1;
        try {
            const newSong = await db.GlobalTop50.create({
            global_top50_rank: currentId,
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
            await db.GlobalTop50.update(
              {
                streams: req.body.streams
              },
              {
                where: {
                  global_top50_rank: req.body.global_top50_rank
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

router.route('/global:global_top50_rank')
    .get(async (req, res) => {
        try {
            const rank = await db.GlobalTop50.findAll({
              where: {
                global_top50_rank: req.params.global_top50_rank
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


/// /////////////////////////////////
/// ////Albums Endpoints////////////
/// /////////////////////////////////

router.route('/albums')
    .get(async (req, res) => {
        try {
            const albums = await Albums.findAll();
            const reply = albums.length > 0 ? { data: albums } : { message: 'no results found' };
            res.json(reply);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .post(async (req, res) => {
        const albums = await db.Albums.findAll();
        const currentId = (await albums.length) + 1;
        try {
            const newAlbum = await db.Albums.create({
            albums_id: currentId,
            album_name: req.body.streams,
            number_songs: req.body.playlist_id,
            genre: req.body.artist_id,
            artist_id: req.body.song_id
            });
            res.json(newAlbum);
        } catch (err) {
            console.error(err);
            res.error('Server error');
        }
    })
    .put(async (req, res) => {
        try {
            await db.Albums.update(
              {
                album_name: req.body.album_name,
                genre: req.body.genre,
                artist_id: req.body.artist_id
              },
              {
                where: {
                  albums_id: req.body.albums_id
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
