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
    res.json(artists);
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
    res.json(artists);
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
    const playlist = await db.Playlist.findAll();
    res.json(playlist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlists/:playlist_id', async (req, res) => {
  try {
    const playlist = await db.Playlist.findAll({
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
    const songs = await db.Songs.findAll();
    res.send(songs);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songs/:song_id', async (req, res) => {
  try {
    const playlists = await db.Songs.findAll({
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
    await db.Songs.update(
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
    const pDetails = await db.PlaylistDetails.findAll();
    res.json(pDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlistDetails/:playlist_details_id', async (req, res) => {
  try {
    const pDetails = await db.PlaylistDetails.findAll({
      where: {
        playlist_details_id: req.params.playlist_details_id
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
    const sDetails = await db.SongDetails.findAll();
    res.json(sDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songDetails/:song_details_id', async (req, res) => {
  try {
    const sDetails = await db.SongDetails.findAll({
      where: {
        song_details_id: req.params.song_details_id
      }
    });
    res.json(sDetails);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/wholePlaylist')
  .get(async (req, res) => {
    try {
      const playlists = await db.Playlist.findAll();
      const pdetails = await db.PlaylistDetails.findAll();
      const wholePlaylists = pdetails.map((play) => {
        const playEntry = playlists.find((detail) => detail.playlist_id === play.FK_playlist_id);
        return {
          ...play.dataValues,
          ...playEntry.dataValues
        };
      });
      res.json({data: wholePlaylists});
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

export default router;
