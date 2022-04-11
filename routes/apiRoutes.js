/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
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
    const newDining = await db.DiningArtist.create({
      artist_id: currentId,
      artist_name: req.body.artist_name,
      total_artist_albums: req.body.total_artist_albums,
      artist_link: req.body.artist_link
    });
    res.json(newDining);
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
    const halls = await db.genres.findAll(); 
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genres/:genre_id', async (req, res) => {
  try {
    const hall = await db.genres.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/genres', async (req, res) => {
  const halls = await db.genres.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.genres.create({
      genre_id: currentId,
      genre_name: req.body.genre_name
    });
    res.json(newDining);
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
        release_id : req.params.genre_id
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

export default router;