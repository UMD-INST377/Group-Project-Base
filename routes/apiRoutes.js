/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

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
      artist_name: req.body.artist_name,
      total_artist_albums: req.body.total_artist_albums,
      artist_link: req.body.artist_link
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
        artist_name: req.body.artist_name,
        total_artist_albums: req.body.total_artist_albums,
        artist_link: req.body.artist_link
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
/// ////AlbumGenre Endpoints////////
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
  const genreItems = await db.genres.findAll();
  const currentId = (await genreItems.length) + 1;
  try {
    const newGenre = await db.genres.create({
      genre_id: currentId,
      genre_name: req.body.genre_name
    });
    res.json(newGenre);
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
        genre_name: req.body.genre_name
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

/// /////////////////////////////////
/// ////Release Endpoints////////
/// /////////////////////////////////

router.get('/releases', async (req, res) => {
  try {
    const halls = await db.releases.findAll(); 
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/releases/:release_id', async (req, res) => {
  try {
    const hall = await db.releases.findAll({
      where: {
        release_id : req.params.release_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/releases', async (req, res) => {
  const halls = await db.releases.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.releases.create({
      release_id: currentId,
      release_country: req.body.release_country,
      release_year: req.body.release_year,
      release_link: req.body.release_link
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/releases', async (req, res) => {
  try {
    await db.releases.update(
      {
        release_id: req.body.release_id,
        release_country: req.body.release_country,
        release_year: req.body.release_year,
        release_link: req.body.release_link
      },
      {
        where: {
          release_id: req.body.release_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/releases/:release_id', async (req, res) => {
  try {
    await db.releases.destroy({
      where: {
        release_id: req.params.release_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Style Endpoints/////////
/// /////////////////////////////////

router.get('/styles', async (req, res) => {
  try {
    const styleItems = await db.styles.findAll(); 
    const reply = styleItems.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/styles/:style_id', async (req, res) => {
  try {
    const styleItems = await db.styles.findAll({
      where: {
        style_id : req.params.style_id
      }
    });

    res.json(styleItems);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/styles', async (req, res) => {
  const styleItems = await db.styles.findAll();
  const currentId = (await styleItems.length) + 1;
  try {
    const newStyle = await db.styles.create({
      style_id: currentId,
      style_name: req.body.style_name
    });
    res.json(newStyle);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/styles', async (req, res) => {
  try {
    await db.styles.update(
      {
        style_id: req.body.style_id,
        style_name: req.body.style_name
      },
      {
        where: {
          style_id: req.body.style_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/styles/:style_id', async (req, res) => {
  try {
    await db.styles.destroy({
      where: {
        style_id: req.params.style_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Albums Endpoints////////
/// /////////////////////////////////
router.get('/albums', async (req, res) => {
  try {
    const album = await db.albums.findAll();
    const reply = album.length > 0 ? { data: album } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/albums/:album_id', async (req, res) => {
  try {
    const hall = await db.albums.findAll({
      where: {
        album_id : req.params.album_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/albums', async (req, res) => {
  const album = await db.albums.findAll();
  const currentId = (await album.length) + 1;
  try {
    const newAlbum = await db.albums.create({
      album_id: currentId,
      album_name: req.body.album_name,
      number_of_songs: req.body.number_of_songs,
      average_song_length: req.body.average_song_length,
      album_link: req.body.album_link,
      album_versions: req.body.album_versions,
      release_id: req.body.release_id,
      artist_id: req.body.artist_id

    });
    res.json(newAlbum);
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

router.put('/albums', async (req, res) => {
  try {
    await db.albums.update(
      {
        album_name: req.body.album_name,
        number_of_songs: req.body.number_of_songs,
        average_song_length: req.body.average_song_length,
        album_link: req.body.album_link,
        album_versions: req.body.album_versions,
        release_id: req.body.release_id,
        artist_id: req.body.artist_id
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

export default router;
