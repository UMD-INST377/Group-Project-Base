/* eslint-disable no-console */
import express, { response } from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

/* import controllers -- we can use to replace previous import statements below. - Walesia */
import controllers from '../controllers/controls.js';

/* start router component */
const router = express.Router();

/* Root */
router.get('/', (req, res) => {
  console.log('touched / using GET');

  res.send('You have reached the root API endpoint!');
});

/*
* Music Database Endpoints below.
*/

// Get all songs from database //
router.get('/songs_project', async (req, res) => {
  try {
    /* Get all songs */
    const songs = await db.sequelizeDB.query(
      controllers.songControls.getAllSongs,
      {
        type: sequelize.QueryTypes.SELECT
      }
    );

    /* Sending some data */
    res.json(songs);
  } catch (err) {
    /* Debugging */
    console.error(err);

    /* Sending some more data */
    res.json({
      status: 'Sorry, this failed.',
      data: null,
      message: 'Something went wrong here. Error.'
    });
  }
});

// Get songs by song_id //
router.get('/songs_project/:song_id', async (req, res) => {
  try {
    console.log('touched songs_project/:song_id with GET');

    const songs = await db.SongsProject.findAll({
      where: {
        song_id: req.params.song_id
      }
    });

    res.json(songs);
  } catch (err) {
    console.error(err);
    res.json({
      status: 'Something went wrong',
      data: null,
      message: 'Failed, error.'
    });
  }
});

router.post('/songs_project', async (req, res) => {
  const songs = await db.SongsProject.findAll();
  const currentId = (await songs.length) + 1;
  try {
    const newSong = await db.SongsProject.create({
      song_id: currentId,
      song_name: req.body.song_name,
      album_name: req.body.album_name,
      first_name: req.body.first_name,
      last_Name: req.body.last_Name,
      ratings: req.body.ratings,
      description: req.body.description,
      duration: req.body.song_duration
    });
    res.json(newSong);
  } catch (err) {
    console.error(err);
    res.error('Server error. Oops! Something went wrong.');
  }
});

router.put('/songs_project/:song_id', async (req, res) => {
  try {
    await db.SongsProject.update(
      {
        song_id: req.body.song_id,
        song_name: req.body.song_name,
        album_name: req.body.album_name,
        first_name: req.body.first_name,
        last_Name: req.body.last_Name,
        ratings: req.body.ratings,
        description: req.body.description,
        duration: req.body.duration
      },
      {
        where: {
          song_id: req.params.song_id
        }
      }
    );
    res.send('Songs database was successfully updated.');
  } catch (err) {
    console.error(err);
    res.error('Server error. Oops! Something went wrong.');
  }
});

/* Endpoint that is used to delete the song - Daniel Cutaneo */
router.delete('/songs_project/:song_id', async (req, res) => {
  try {
    // Deletes the songs
    await db.SongsProject.destroy({
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

export default router;
