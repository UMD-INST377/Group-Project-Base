/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the ourMusic Search APP!');
});

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
router.get('/albums', async (req, res) => {
  try {
    const albums = await db.Albums.findAll();
    const reply = albums.length > 0 ? { data: albums } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});




router.get('/albums/:album_id', async (req, res) => {
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
});



router.post('/albums', async (req, res) => {
  const album = await db.Albums.findAll();
  const currentId = (await album.length) + 1;
  try {
      const newAlbum = await db.Albums.create({
      album_id: currentId,
      album_name: req.body.album_name
    });
    res.json(newAlbum); ///TODO:TEST THIS OUT LATER
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/albums/:album_id', async (req, res) => {
  try {
    await db.Albums.destroy({
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
    await db.Albums.update(
      {
        album_name: req.body.album_name,
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



/// /////////////////////////////////
/// ////////Albumss Endpoints//////////
/// /////////////////////////////////
router.get('/artist', async (req, res) => {
  try {
    const artists = await db.Artists.findAll();
    res.json(artists);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artist/:artist_id', async (req, res) => {
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
});

router.post('/artists', async (req, res) => {
  const artist = await db.Artists.findAll();
  const currentId = (await artist.length) + 1;
  try {
    const newArtist = await db.Artists.create({
      artist_id: currentId,
      artist_name: req.body.artist_name
    });
    res.json(newArtist);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/artists/:artist_id', async (req, res) => {
  try {
    await db.Artists.destroy({
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
    await db.Artists.update(
      {
        artist_name: req.body.artist_name,
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

///////Artist////////////
/////////////////////////////
//////////////////////////////////

router.get('/lyrics', async (req, res) => {
  try {
    const lyr = await db.Lyrics.findAll({      
    });
    res.json(lyr);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



/// /////////////////////////////////
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get('/songs', async (req, res) => {
  try {
    const song = await db.Songs.findAll();
    res.send(song);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/songs/:song_id', async (req, res) => {
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
});

/** 

router.put('/macros', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat
      },
      {
        where: {
          meal_id: req.body.meal_id
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
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
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
 **/
export default router;
