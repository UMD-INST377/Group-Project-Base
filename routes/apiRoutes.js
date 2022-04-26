/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import graphquery from './graphquery.js';
import rawqueries from './rawqueries.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to group 15's Song API!");
});

/// /////////////////////////////////
/// ////Artists Endpoints////////
/// /////////////////////////////////
router.get('/artists', async (req, res) => {
  try {
    const artist = await db.artists.findAll();
    const reply = artist.length > 0 ? { data: artist } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artists/:artist_id', async (req, res) => {
  try {
    const artist = await db.artists.findAll({
      where: {
        artist_id: req.params.artist_id
      }
    });

    res.json(artist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/artists', async (req, res) => {
  const artists = await db.artists.findAll();
  const currentId = (await artists.length) + 1;
  try {
    const newArtist = await db.artist.create({
      artist_id: currentId,
      name: req.body.name
    });
    res.json(newArtist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/artists/:artist_id', async (req, res) => {
  try {
    await db.artists.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/artists', async (req, res) => {
  try {
    await db.artists.update(
      {
        name: req.body.name
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
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Genre Endpoints////////
/// /////////////////////////////////
router.get('/genres', async (req, res) => {
  try {
    const genresItems = await db.genres.findAll();
    const reply = genresItems.length > 0 ? { data: genresItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genres/:genre_id', async (req, res) => {
  try {
    const genresItems = await db.genres.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });

    res.json(genresItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/genres', async (req, res) => {
  const isNum = /^\d+$/.test(req.body.genre_name);
  const genreItems = await db.genres.findAll();
  const currentId = (await genreItems.length) + 1;
  try {
    const newGenre = await db.genres.create({
      genre_id: currentId,
      genre: req.body.genre
    });
    if (!isNum) {
      res.json(newGenre);
    } else { res.send('not valid genre name'); }
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/genres', async (req, res) => {
  try {
    await db.genres.update(
      {
        genre_id: req.body.genre_id,
        genre: req.body.genre
      },
      {
        where: {
          genre_id: req.body.genre_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/genres/:genre_id', async (req, res) => {
  try {
    await db.genres.destroy({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.delete('/genres/:genre_name', async (req, res) => {
  try {
    await db.genres.destroy({
      where: {
        genre_name: req.params.genre_name
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Playlists Endpoints////////
/// /////////////////////////////////

router.get('/playlists', async (req, res) => {
  try {
    const playlistItems = await db.playlists.findAll();
    const reply = playlistItems.length > 0 ? { data: playlistItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlists/:playlist_id', async (req, res) => {
  try {
    const hall = await db.playlists.findAll({
      where: {
        playlist_id: req.params.playlist_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/playlists', async (req, res) => {
  const playlistItems = await db.playlists.findAll();
  const currentId = (await playlistItems.length) + 1;
  try {
    const newPlay = await db.playlists.create({
      playlist_id: currentId,
      owner: req.body.owner,
      name: req.body.name,
      description: req.body.description,
      is_public: req.body.is_public,
      is_collaborative: req.body.is_collaborative
    });
    res.json(newPlay);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/playlists', async (req, res) => {
  try {
    await db.playlists.upsert(

      {
        playlist_id: req.body.playlist_id,
        owner: req.body.owner,
        name: req.body.name,
        description: req.body.description,
        is_public: req.body.is_public,
        is_collaborative: req.body.is_collaborative
      },
      {
        where: {
          playlist_id: req.body.playlist_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/playlists/:playlist_id', async (req, res) => {
  try {
    await db.playlists.destroy({
      where: {
        playlist_id: req.params.playlist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////artist_albums Endpoints/////////
/// /////////////////////////////////

router.get('/artist_albums', async (req, res) => {
  try {
    const artist_albums_items = await db.artistAlbums.findAll();
    const reply = artist_albums_items.length > 0 ? { data: artist_albums_items } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artist_albums/:artist_id', async (req, res) => {
  try {
    const artist_albums_items = await db.artistAlbums.findAll({
      where: {
        artist_id: req.params.artist_id
      }
    });

    res.json(artist_albums_items);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/artist_albums', async (req, res) => {
  const artist_albums_items = await db.artistAlbums.findAll();
  const currentId = (await artist_albums_items.length) + 1;
  try {
    const newArtist_Album = await db.artist_albums.create({
      artist_id: currentId,
      album_id: req.body.album_id
    });
    res.json(newArtist_Album);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/artist_albums', async (req, res) => {
  try {
    await db.artistAlbums.update(
      {
        artist_id: req.body.artist_id,
        album_id: req.body.album_id
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
    res.error('Server error');
  }
});

router.delete('/artist_albums/:artist_id', async (req, res) => {
  try {
    await db.artistAlbums.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Album Endpoints/////////
/// /////////////////////////////////

router.get('/albums', async (req, res) => {
  try {
    const albumItems = await db.albums.findAll();
    const reply = albumItems.length > 0 ? { data: albumItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/albums/:album_id', async (req, res) => {
  try {
    const albumItems = await db.albums.findAll({
      where: {
        album_id: req.params.album_id
      }
    });

    res.json(albumItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/albums', async (req, res) => {
  const albumItems = await db.albums.findAll();
  const currentId = (await albumItems.length) + 1;
  try {
    const newAlbum = await db.albums.create({
      album_id: currentId,
      release_date: req.body.release_date,
      label: req.body.label,
      cover_url: req.body.cover_url,
      album_name: req.body.album_name
    });
    res.json(newAlbum);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/albums', async (req, res) => {
  try {
    await db.albums.update(
      {
        release_date: req.body.release_date,
        label: req.body.label,
        cover_url: req.body.cover_url,
        album_name: req.body.album_name
      },
      {
        where: {
          album_id: req.body.album_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/albums/:album_id', async (req, res) => {
  try {
    await db.albums.destroy({
      where: {
        album_id: req.params.album_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////AlbumSongs Endpoints/////////
/// /////////////////////////////////

router.get('/album_songs', async (req, res) => {
  try {
    const genreItems = await db.albumSongs.findAll();
    const reply = genreItems.length > 0 ? { data: genreItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/album_songs/:album_id', async (req, res) => {
  try {
    const genreItems = await db.albumSongs.findAll({
      where: {
        album_id: req.params.album_id
      }
    });

    res.json(genreItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/album_songs', async (req, res) => {
  const genreItems = await db.albumSongs.findAll();
  const currentId = (await genreItems.length) + 1;
  try {
    const newGenreInfo = await db.album_songs.create({
      album_id: currentId,
      song_id: req.body.song_id
    });
    res.json(newGenreInfo);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/album_songs', async (req, res) => {
  try {
    await db.albumSongs.upsert(
      {
        song_id: req.body.song_id
      },
      {
        where: {
          album_id: req.body.album_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/album_songs/:album_id', async (req, res) => {
  try {
    await db.albumSongs.destroy({
      where: {
        album_id: req.params.album_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////ArtistSongs Endpoints/////////
/// /////////////////////////////////

router.get('/artist_songs', async (req, res) => {
  try {
    const styleItems = await db.artistSongs.findAll();
    const reply = styleItems.length > 0 ? { data: styleItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artist_songs/:artist_id', async (req, res) => {
  try {
    const styleItems = await db.artistSongs.findAll({
      where: {
        artist_id: req.params.artist_id
      }
    });

    res.json(styleItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/artist_songs', async (req, res) => {
  const styleItems = await db.artistSongs.findAll();
  const currentId = (await styleItems.length) + 1;
  try {
    const newStyle = await db.artistSongs.create({
      artist_id: currentId,
      song_id: req.body.song_id
    });
    res.json(newStyle);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/artist_songs', async (req, res) => {
  try {
    await db.artistSongs.update(
      {
        song_id: req.body.song_id
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
    res.error('Server error');
  }
});

router.delete('/artist_songs/:artist_id', async (req, res) => {
  try {
    await db.album_style_info.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
/// /////////////////////////////////
/// ////SongGenre Endpoints////////
/// /////////////////////////////////
router.get('/song_genres', async (req, res) => {
  try {
    const halls = await db.songGenres.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/song_genres/:song_id', async (req, res) => {
  try {
    const hall = await db.songGenres.findAll({
      where: {
        song_id: req.params.song_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/song_genres', async (req, res) => {
  const halls = await db.songGenres.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.playlists.create({
      song_id: currentId,
      genre_id: req.body.genre_id
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/song_genres', async (req, res) => {
  try {
    await db.songGenres.update(
      {
        genre_id: req.body.genre_id
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

router.delete('/song_genres/:song_id', async (req, res) => {
  try {
    await db.songGenres.destroy({
      where: {
        song_id: req.params.song_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////PlayListSongs Endpoints/////////
/// /////////////////////////////////

router.get('/playlist_songs', async (req, res) => {
  try {
    const styleItems = await db.playlistSongs.findAll();
    const reply = styleItems.length > 0 ? { data: styleItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlist_songs/:playlist_id', async (req, res) => {
  try {
    const styleItems = await db.playlistSongs.findAll({
      where: {
        playlist_id: req.params.playlist_id
      }
    });

    res.json(styleItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/playlist_songs', async (req, res) => {
  const styleItems = await db.playlistSongs.findAll();
  const currentId = (await styleItems.length) + 1;
  try {
    const newStyle = await db.playlistSongs.create({
      playlist_id: currentId,
      song_id: req.body.song_id,
      added_by: req.body.added_by,
      date_added: req.body.date_added
    });
    res.json(newStyle);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/playlist_songs', async (req, res) => {
  try {
    await db.playlistSongs.update(
      {
        song_id: req.body.song_id,
        added_by: req.body.added_by,
        date_added: req.body.date_added
      },
      {
        where: {
          playlist_id: req.body.playlist_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/playlist_songs/:playlist_id', async (req, res) => {
  try {
    await db.playlistSongs.destroy({
      where: {
        playlist_id: req.params.playlist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Songs Endpoints/////////
/// /////////////////////////////////

router.get('/songs', async (req, res) => {
  try {
    const styleItems = await db.songs.findAll();
    const reply = styleItems.length > 0 ? { data: styleItems } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songs/:song_id', async (req, res) => {
  try {
    const styleItems = await db.songs.findAll({
      where: {
        song_id: req.params.song_id
      }
    });

    res.json(styleItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/songs', async (req, res) => {
  const styleItems = await db.songs.findAll();
  const currentId = (await styleItems.length) + 1;
  try {
    const newStyle = await db.songs.create({
      song_id: currentId,
      name: req.body.name,
      duration: req.body.duration,
      is_explicit: req.body.is_explicit,
      danceability: req.body.danceability,
      energy: req.body.energy,
      loudness: req.body.loudness,
      speechiness: req.body.speechiness,
      acousticness: req.body.acousticness,
      instrumentalness: req.body.instrumentalness,
      liveness: req.body.liveness,
      valence: req.body.valence,
      tempo: req.body.tempo
    });
    res.json(newStyle);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/songs', async (req, res) => {
  try {
    await db.songs.update(
      {
        name: req.body.name,
        duration: req.body.duration,
        is_explicit: req.body.is_explicit,
        danceability: req.body.danceability,
        energy: req.body.energy,
        loudness: req.body.loudness,
        speechiness: req.body.speechiness,
        acousticness: req.body.acousticness,
        instrumentalness: req.body.instrumentalness,
        liveness: req.body.liveness,
        valence: req.body.valence,
        tempo: req.body.tempo
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

router.delete('/songs/:song_id', async (req, res) => {
  try {
    await db.songs.destroy({
      where: {
        song_id: req.params.song_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Supportint Endpoints////////
/// /////////////////////////////////

/// Results of Search///
const results = rawqueries;
router.get('/main', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(results, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// Num of Genres Graph///
const graphgen = graphquery;
router.get('/graphgenres', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(graphgen, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
