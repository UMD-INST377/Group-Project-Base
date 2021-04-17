/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the spotify playlists API');
});
/// /////////////////////////////////
/// ////artist_info  Endpoints////////
/// /////////////////////////////////
router.get("/artistInfo", async (req, res) => {
  try {
    const artists = await db.ArtistInfo.findAll();
    const reply =
      artists.length > 0 ? { data: artists } : { message: "no results found" };
    console.log(artist_name)
    res.json(reply);
  } catch (err) {
    console.error(err);
    response.error("Server error");
  }
});

router.get("/artistInfo/:artist_id", async (req, res) => {
  try {
    const artists = await db.ArtistInfo.findAll({
      where: {
        artist_id: req.params.artist_id,
      },
    });
    res.json(artist_id);
  } catch (err) {
    console.error(err);
    response.error("Server error");
  }
});


router.post('/artistInfo', async (req, res) => {
  const artists = await db.ArtistInfo.findAll();
  const currentId = (await artists.length) + 1;
  try {
    const newArtist = await db.ArtistInfo.create({
      artist_id: currentId,
      monthly_listeners: req.body.monthly_listeners,
      followers: req.body.followers,
      world_ranking: req.body.world_ranking,
      artist_name: req.body.artist_name
    });
    res.json(newArtist);
  } catch (err) {
    console.error(err);
    response.error('Server error');
  }
});

router.delete('/artistInfo/:artist_id', async (req, res) => {
  try {
    await db.ArtistInfo.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    response.error('Server error');
  }
});

router.put('/artistInfo', async (req, res) => {
  try {
    await db.ArtistInfo.update(
      {
        monthly_listeners: req.body.monthly_listeners,
        followers: req.body.followers,
        world_ranking: req.body.world_ranking,
        artist_name: req.body.artist_name

      },
      {
        where: {
          artist_id: req.body.artist_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    response.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Playlists Endpoints//////////
/// /////////////////////////////////
router.get('/playlists', async (req, res) => {
  try {
    const playlist = await db.playlists.findAll();
    res.json(playlist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlists/:playlist_id', async (req, res) => {
  try {
    const playlist = await db.playlists.findAll({
      where: {
        playlist_id: req.params.playlist_id
      }
    });
    res.json(playlist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////songs Endpoints/////////
/// /////////////////////////////////
router.get('/songs', async (req, res) => {
  try {
    const songs = await db.songs.findAll();
    res.send(songs);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songs/:song_id', async (req, res) => {
  try {
    const playlists = await db.songs.findAll({
      where: {
        song_id: req.params.song_id
      }
    });
    res.json(playlists);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/songs', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.songs.update(
      {
        genre: req.body.genre,
        date_released: req.body.date_released,
        album_name: req.body.album_name,
        explicit: req.body.explicit,
      },
      {
        where: {
          song_id: req.body.song_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////songs Endpoints/////////
/// /////////////////////////////////
router.get('/songs', async (req, res) => {
  try {
    const songs = await db.songs.findAll();
    res.send(songs);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songs/:song_id', async (req, res) => {
  try {
    const playlists = await db.songs.findAll({
      where: {
        song_id: req.params.song_id
      }
    });
    res.json(playlists);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/songs', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.songs.update(
      {
        genre: req.body.genre,
        date_released: req.body.date_released,
        album_name: req.body.album_name,
        explicit: req.body.explicit,
      },
      {
        where: {
          song_id: req.body.song_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
/// /////////////////////////////////
/// ///playlistDetails Endpoints////
/// /////////////////////////////////
router.get('/playlistDetails', async (req, res) => {
  try {
    const pDetails = await db.playlistDetails.findAll();
    res.json(pDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlistDetails/:playlistDetails_id', async (req, res) => {
  try {
    const pDetails = await db.playlistDetails.findAll({
      where: {
        pDetails_id: req.params.pDetails_id
      }
    });
    res.json(pDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ///songDetails Endpoints////
/// /////////////////////////////////
router.get('/songDetails', async (req, res) => {
  try {
    const sDetails = await db.song_details.findAll();
    res.json(sDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songDetails/:song_details_id', async (req, res) => {
  try {
    const sDetails = await db.song_details.findAll({
      where: {
        sDetails_id: req.params.sDetails_id
      }
    });
    res.json(sDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
