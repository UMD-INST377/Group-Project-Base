/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the spotify playlists API');
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

router.post("/playlists", async (req, res) => {
  try {
    const play = await db.Playlist.create({
      playlist_id: req.body.playlist_id,
      playlist_name: req.body.playlist_name,
      number_of_followers: req.body.number_of_followers,
      user_id: req.body.user_id,
      number_of_songs: req.body.number_of_songs,
      total_time: req.body.total_time
    });
    res.json(play);
  } catch (err) {
    console.error(err);
    res.error("Server error");
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

router.delete('/playlists/:playlist_id', async (req, res) => {
  try {
    await db.Playlist.destroy({
      where: {
        playlist_id: req.params.playlist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    response.error('Server error');
  }
});

router.put('/playlists', async (req, res) => {
  console.info('POST Request to /playlists', req.body)
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Playlist.update(
      {
        playlist_id: req.body.playlist_id,
        playlist_name: req.body.playlist_name,
        number_of_followers: req.body.number_of_followers,
        user_id: req.body.user_id,
        number_of_songs: req.body.number_of_songs,
        total_time: req.body.total_time
      },
      {
        where: {
          playlist_name: req.body.playlist_name
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
    const songs = await db.Songs.findAll();
    res.send(songs);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post("/songs", async (req, res) => {
  try {
    const song = await db.Songs.create({
      song_id: req.body.song_id,
      genre: req.body.genre,
      date_released: req.body.date_released,
      album_name: req.body.album_name,
      explicit: req.body.explicit,
      artist_id: req.body.artist_id
    });
    res.json(song);
  } catch (err) {
    console.error(err);
    res.error("Server error");
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

router.delete('/songs/:song_id', async (req, res) => {
  try {
    await db.Songs.destroy({
      where: {
        song_id: req.params.song_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    response.error('Server error');
  }
});

router.put('/songs', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Songs.update(
      {
        song_id: req.body.song_id,
        genre: req.body.genre,
        date_released: req.body.date_released,
        album_name: req.body.album_name,
        explicit: req.body.explicit,
        artist_id: req.body.artist_id
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

router.post("/playlistDetails", async (req, res) => {
 console.info(req.body)
  try {
    const playlistd = await db.PlaylistDetails.create({
      // playlist_details_id: req.body.playlist_details_id,
      FK_song_id: req.body.FK_song_id,
      song_title: req.body.song_title,
      artist_id: req.body.artist_id,
      song_duration: req.body.song_duration,
      FK_playlist_id: req.body.FK_playlist_id
    });
    res.json(playlistd);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete('/playlistDetails/:playlist_details_id', async (req, res) => {
  try {
    await db.PlaylistDetails.destroy({
      where: {
        playlist_details_id: req.params.playlist_details_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    response.error('Server error');
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

router.put('/playlistDetails', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.PlaylistDetails.update(
      {
        playlist_details_id: req.body.playlist_details_id,
        FK_song_id: req.body.FK_song_id,
        song_title: req.body.song_title,
        artist_id: req.body.artist_id,
        song_duration: req.body.song_duration,
        FK_playlist_id: req.body.FK_playlist_id
      },
      {
        where: {
          playlist_details_id: req.body.playlist_details_id
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
/// ////Whole Playlist Endpoints////////
/// /////////////////////////////////
router.route('/wholePlaylist')
  .get(async (req, res) => {
    try {
      const playlists = await db.Playlist.findAll();
      const pdetails = await db.PlaylistDetails.findAll();
      const songs = await db.Songs.findAll();
      const wholePlaylists = pdetails.map((play) => {
        const playEntry = playlists.find((detail) => detail.playlist_id === play.FK_playlist_id);
        const songEntry = songs.find((song) => song.song_id === play.FK_song_id);
        return {
          ...play.dataValues,
          ...playEntry.dataValues,
          ...songEntry.dataValues
        };
      });
      res.json({data: wholePlaylists});
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

export default router;
