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
  .post(async (req, res) => {
    const playlists = await db.Playlists.findAll();
    const currentId = (await playlists.length) + 1;
    try {
      const newPlaylist = await db.Playlists.create({
        playlist_id: currentId,
        playlist_name: req.body.playlist_name
      });
      res.json(newPlaylist);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      if (playlist_id != 1 && playlist_id != 2 && playlist_id != 3) {
        await db.Playlists.update(
          {
            playlist_name: req.body.playlist_name
          },
          {
            where: {
              playlist_id: req.body.playlist_id
            }
          }
        );
        res.send('Successfully Updated');
      }
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  })

router.route('/playlists/:playlist_id')
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
  .delete(async (req, res) => {
    try {
      if (playlist_id != 1 && playlist_id != 2 && playlist_id != 3) {
        await db.Playlists.destroy({
          where: {
            playlist_id: req.params.playlist_id
          }
        });
        res.send('Successfully Deleted');
      }
      
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })

/// /////////////////////////////////
/// ////USTop50 Endpoints////////////
/// /////////////////////////////////
router.route('/wholeUSchart')
  .get(async (req, res) => {
    try {
      const ranks = await db.USTop50.findAll();
      const artists = await db.Artists.findAll();
      const songs = await db.Songs.findAll();
      // map is like a for each
      const wholeUSChart = ranks.map((rank) => {
        const songEntry = songs.find((song) => song.song_id === rank.song_id);
        const artistEntry = artists.find((artist) => artist.artist_id === rank.artist_id);
        // console.log('stream', stream.dataValues);
        // console.log('songEntry', songEntry.dataValues);
        // console.log('artistEntry', artistEntry.dataValues);

        return {
          // spread operator
          ...rank.dataValues,
          ...songEntry.dataValues,
          ...artistEntry.dataValues
        }
      })
      res.json({data: wholeUSChart});

    } catch (err) {
      console.error(err);
      res.json({message: "Something went wrong on the server"});
    }
});

router.route('/us')
  .get(async (req, res) => {
    try {
      const ustop50 = await db.USTop50.findAll();
      const reply = ustop50.length > 0 ? { data: ustop50 } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    // users can't add new song to main db
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    // users can't update song to main db
    res.send('Action unavailable');
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  })

router.route('/us/:us_top50_rank')
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
      const reply = globaltop50.length > 0 ? { data: globaltop50 } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  })

router.route('/global/:global_top50_rank')
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
      const albums = await db.Albums.findAll();
      const reply = albums.length > 0 ? { data : albums } : { message: 'no results found' };
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
        album_name: req.body.album_name,
        number_songs: req.body.number_songs,
        genre: req.body.genre,
        artist_id: req.body.artist_id
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

router.route('/albums/:album_id')
  .get(async (req, res) => {
    try {
      const album = await db.Albums.findAll({
        where: {
          album_id: req.params.album_id
        }
      });
        
      res.json(album);
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
/// ////Songs Endpoints//////////////
/// /////////////////////////////////
router.route('/songs')
  .get(async (req, res) => {
    try {
      const songs = await db.Songs.findAll();
      const reply = songs.length > 0 ? { data: songs } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const songs = await db.Songs.findAll();
    const currentId = (await songs.length) + 1;
    try {
      const newSong = await db.Songs.create({
        song_id: currentId,
        song_name: req.body.song_name,
        explicit: req.body.explicit,
        artist_id: req.body.artist_id,
        album_id: req.body.album_id
      });
      res.json(newSong);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.Songs.update(
        {
          song_name: req.body.song_name,
          explicit: req.body.explicit
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
  })
  .delete((req, res) => {
    res.send('Action unavailable');
  })

router.route('/songs/:song_id')
  .get(async (req, res) => {
    try {
      const song = await db.Songs.findAll({
        where: {
          song_id: req.params.song_id
        }
      });
        
      res.json(song);
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
/// ////Artists Endpoints////////////
/// /////////////////////////////////

router.route('/artists')
  .get(async (req, res) => {
    try {
      const artists = await db.Artists.findAll();
      const reply = artists.length > 0 ? { data: artists } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    const artists = await db.Artists.findAll();
    const currentId = (await artists.length) + 1;
    try {
      const newArtist = await db.Artists.create({
        artist_id: currentId,
        artist_name: req.body.artist_name,
        verified: req.body.verified,
        monthly_listeners: req.body.monthly_listeners,
      });
      res.json(newArtist);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.Artists.update(
        {
          artist_name: req.body.artist_name,
          verified: req.body.verified,
          monthly_listeners: req.body.monthly_listeners,
          artist_id: req.body.artist_id
        },
        {
          where: {
            artist_id: req.body.artists_id
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

router.route('/artists/:artist_id')
  .get(async (req, res) => {
    try {
      const artist = await db.Artists.findAll({
        where: {
          artist_id: req.params.artist_id
        }
      });
 
      res.json(artist);
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

export default router;