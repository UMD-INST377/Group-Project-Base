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
router.get("/artist_info", async (req, res) => {
  try {
    const artists = await db.artist_info.findAll();
    const reply =
      artists.length > 0 ? { data: artists } : { message: "no results found" };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/artist_info/:artist_id", async (req, res) => {
  try {
    const artists = await db.artist_info.findAll({
      where: {
        artist_id: req.params.artist_id,
      },
    });
    res.json(artist_id);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});


router.post('/artist_info', async (req, res) => {
  const artists = await db.artist_info.findAll();
  const currentId = (await artists.length) + 1;
  try {
    const newArtist = await db.artist_info.create({
      artist_id: currentId,
      monthly_listeners: req.body.monthly_listeners,
      followers: req.body.followers,
      world_ranking: req.body.world_ranking,
      artist_name: req.body.artist_name
    });
    res.json(newArtist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/artist_info/:artist_id', async (req, res) => {
  try {
    await db.artist_info.destroy({
      where: {
        artist_info: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/artist_info', async (req, res) => {
  try {
    await db.artist_info.update(
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
    res.error('Server error');
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
/// Dietary Restrictions Endpoints///
/// /////////////////////////////////
router.get('/restrictions', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/restrictions/:restriction_id', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll({
      where: {
        restriction_id: req.params.restriction_id
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Group20_spotify_playlist`.`songs`.`song_id` AS `song_id`,`Group20_spotify_playlist`.`pla`.`_name` AS `meal_name`,`Dining_Hall_Tracker`.`songs`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
