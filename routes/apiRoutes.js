/* eslint-disable no-console */
import express, { response } from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

/* import controllers -- we can use to replace previous import statements below. - Walesia */
import controllers from '../server/controllers/controls.js';

// /* import albumCustom controller(updates) */
// import albumCustom from '../server/controllers/albumCustom.js';

// /* import ratingUpdate controller - mirandavo */
// import ratingUpdate from '../server/controllers/ratingUpdate.js';

// /* Delete for controller Daniel Cutaneo */
// import deleteCustom from '../server/controllers/deleteCustom.js';

/* start router component */
const router = express.Router();

/* Root */
router.get('/', (req, res) => {
  console.log('touched / using GET');

  res.send('You have reached the root API endpoint!');
});

/*
* Music Database Endpoints below
*/

// Trying to get all songs from DB //
router.get('/songs', async (req, res) => {
  try {
    /* Get all songs */
    const songs = await db.sequelizeDB.query(controllers.songControls.getAllSongs, {
      type: sequelize.QueryTypes.SELECT
    });

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

// Songs by song_id //
router.get('/songs/:song_id', async (req, res) => {
  try {
    // console.log('touched songs/:song_id with GET')
    // PREV - trying to get song_id from query, but that didn't work...
    // const songID = await db.sequelizeDB.query(controllers.songControls.getSongsByID, {
    //   where: {
    //     song_id: req.params.song_id
    //   }
    // });
    // res.json(songID);

    // Using the Songs table from the original database instead. // 
    const songs = await db.Songs.findAll({
      where: { 
        song_id: req.params.song_id
      }
    });
    res.json(songs);
  } catch (err) {
    console.error(err);
    res.error({status: 'Something went wrong', data: null, message: 'Failed, error.'});
  }
});

router.post('/songs', async (req, res) => {
  const halls = await db.songs.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newSong = await db.songs.create({
      song_id: currentId,
      song_name: req.body.song_name,
      duration: req.body.song_duration,
      genre_id: req.body.genre_id
    });
    res.json(newSong);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/rating', async (req, res) => {
  try {
    await db.ratingUpdate.update(
      {
        ratings: req.body.ratings
      },
      {
        where: {
          rating_id: req.body.rating_id
        }
      }
    );
    res.send('Rating Chart was Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/* Endpoint that is used to delete the song -Daniel Cutaneo */
router.delete('/songs/:song_id', async (req, res) => {
  try {
    await db.deleteCustom.destroy({
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

/* Music endpoint that used imported albumCustom controller(Updates) */
router.get('/album', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(controllers.albumCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;

/* Create songs table used imported songControls */

router.get('/songsTable', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(songTable, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
