/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import graphquery from './graphquery.js';
import rawqueries from './rawqueries.js';
import artistGraphQuery from './artistGraphQuery.js';
import topSong from './topSong.js';
import topalbum from './topalbum.js';

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
/// ////Playlists Endpoints////////
/// /////////////////////////////////

router.get('/playlists', async (req, res) => {
  try {
    const playlistItems = await db.playlists.findAll();
    const reply = playlistItems.length > 0
      ? { data: playlistItems }
      : { message: 'no results found' };
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
    const reply = artist_albums_items.length > 0
      ? { data: artist_albums_items }
      : { message: 'no results found' };
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
  const artist_items = await db.artists.findAll();
  const album_items = await db.albums.findAll()
  const currentArtId = (await artist_items.length);
  const currentAlbId = (await album_items.length);
  try {
    const newArtist_Album = await db.artist_albums.create({
      artist_id: currentArtId,
      album_id: currentAlbId
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
    const reply = albumItems.length > 0
      ? { data: albumItems }
      : { message: 'no results found' };
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
    const albumSongsItems = await db.albumSongs.findAll();
    const reply = albumSongsItems.length > 0
      ? { data: albumSongsItems }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/album_songs/:album_id', async (req, res) => {
  try {
    const albumSongsItems = await db.albumSongs.findAll({
      where: {
        album_id: req.params.album_id
      }
    });

    res.json(albumSongsItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/album_songs', async (req, res) => {
  const albumItems = await db.albums.findAll();
  const songItems = await db.songs.findAll();
  const currentAlbId = (await albumItems.length);
  const currentSngId = (await songItems.length);
  try {
    const newAlbumSongsInfo = await db.album_songs.create({
      album_id: currentAlbId,
      song_id: currentSngId
    });
    res.json(newAlbumSongsInfo);
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
    const artSongItems = await db.artistSongs.findAll();
    const reply = artSongItems.length > 0
      ? { data: artSongItems }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artist_songs/:artist_id', async (req, res) => {
  try {
    const artSongItems = await db.artistSongs.findAll({
      where: {
        artist_id: req.params.artist_id
      }
    });

    res.json(artSongItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/artist_songs', async (req, res) => {
  const artistItems = await db.artists.findAll();
  const songItems = await db.songs.findAll();
  const currentArtId = (await artistItems.length);
  const currentSngId = (await songItems.length);
  try {
    const newStyle = await db.artistSongs.create({
      artist_id: currentArtId,
      song_id: currentSngId
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
    const songGenres = await db.songGenres.findAll();
    const reply = songGenres.length > 0 ? { data: songGenres } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/song_genres/:song_id', async (req, res) => {
  try {
    const songGenres = await db.songGenres.findAll({
      where: {
        song_id: req.params.song_id
      }
    });

    res.json(songGenres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/song_genres', async (req, res) => {
  const songItems = await db.songs.findAll();
  const genreItems = await db.genres.findAll();
  const currentSngId = (await songItems.length);
  const currentGnrId = (await genreItems.length);
  try {
    const newDining = await db.playlists.create({
      song_id: currentSngId,
      genre_id: currentGnrId
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
    const playSongItems = await db.playlistSongs.findAll();
    const reply = playSongItems.length > 0
      ? { data: playSongItems }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/playlist_songs/:playlist_id', async (req, res) => {
  try {
    const playSongItems = await db.playlistSongs.findAll({
      where: {
        playlist_id: req.params.playlist_id
      }
    });

    res.json(playSongItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/playlist_songs', async (req, res) => {
  const songItems = await db.songs.findAll();
  const currentSngId = (await songItems.length);
  try {
    const newStyle = await db.playlistSongs.create({
      playlist_id: currentPlyId,
      song_id: currentSngId,
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
    const songItems = await db.songs.findAll();
    const reply = songItems.length > 0
      ? { data: songItems }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songs/:song_id', async (req, res) => {
  try {
    const songItems = await db.songs.findAll({
      where: {
        song_id: req.params.song_id
      }
    });

    res.json(songItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/songs', async (req, res) => {
  const songItems = await db.songs.findAll();
  const currentId = (await songItems.length) + 1;
  console.log(req.body);
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
    res.send('Server error');
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
/// ////Genres Endpoints/////////
/// /////////////////////////////////

router.get('/Genres', async (req, res) => {
  try {
    const genresItems = await db.genres.findAll();
    const reply = genresItems.length > 0
      ? { data: genresItems }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/Genres/:genres_id', async (req, res) => {
  try {
    const genresItems = await db.genres.findAll({
      where: {
        genres_id: req.params.genres_id
      }
    });

    res.json(genresItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/Genres', async (req, res) => {
  const genresItems = await db.genres.findAll();
  const currentId = (await genresItems.length) + 1;
  try {
    const newStyle = await db.genres.create({
      genre_id: currentId,
      genre: req.body.genre
    });
    res.json(newStyle);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/Genres', async (req, res) => {
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

router.delete('/Genres/:genre_id', async (req, res) => {
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

/// /////////////////////////////////
/// ////Supporting Endpoints////////
/// /////////////////////////////////

/// Results of Search///
router.get('/main', async (req, res) => {
  try {
    const results = rawqueries;
    const result = await db.sequelizeDB.query(results, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// Top Genres Graph///
router.get('/graphgenres', async (req, res) => {
  try {
    const graphgen = graphquery;
    const result = await db.sequelizeDB.query(graphgen, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// Artist with Most Albums Graph///
router.get('/artistGraph', async (req, res) => {
  try {
    const artgraph = artistGraphQuery;
    const result = await db.sequelizeDB.query(artgraph, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.error('Sever error');
  }
});

router.get('/songGraph', async (req, res) => {
  try {
    const songGraph = topSong;
    const result = await db.sequelizeDB.query(songGraph, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.error('Sever error');
  }
});

router.get('/albumGraph', async (req, res) => {
  try {
    const albgraph = topalbum;
    const result = await db.sequelizeDB.query(albgraph, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.error('Sever error');
  }
});

export default router;
