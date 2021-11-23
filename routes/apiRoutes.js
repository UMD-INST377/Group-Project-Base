/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// //////////////////////////////////
/// ///////Tyler Farmer - Albums Endpoints////////
/// /////////////////////////////////
router.route('/albums')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT * from albums;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      res.json({message: 'GET albums endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const albumId = req.body.album_id;
      const albumName = req.body.album_name;
      const sqlStatement = `UPDATE albums SET album_name = '${albumName}' WHERE album_id = ${albumId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      const albumId = req.body.album_id;
      const albumName = req.body.album_name;
      const sqlStatement = `UPDATE albums SET album_name = '${albumName}' WHERE album_id = ${albumId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const albumId = req.body.album_id;
      const sqlStatement = `DELETE from albums WHERE album_id = ${albumId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted album');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// Tyler Farmer - Lab 11 - Top 50 US Chart ///
router.route('/USchart')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT songs.song_name FROM us_top50 INNER JOIN songs ON us_top50.song_id=songs.song_id;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      res.json({message: 'GET USchart endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .put((req, res) => {
    try {
      console.log('touched /USchart route with PUT');
      res.json({message: 'PUT USchart endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /USchart route with POST');
      res.json({message: 'POST USchart endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /USchart route with DELETE');
      res.json({message: 'DELETE USchart endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  });

/// Lab 11: Lucas Ng Front Endpoint///
router.route('/songslist')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT albums.album_name FROM songs INNER JOIN albums ON songs.album_id=albums.album_id;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('You touched /songslist route with GET!');
      res.json(result);
      res.json({message: 'GET songslist endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .put((req, res) => {
    try {
      console.log('You touched /songslist route with PUT!');
      res.json({message: 'PUT songslist endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .post((req, res) => {
    try {
      console.log('You touched /songslist route with POST!');
      res.json({message: 'POST songslist endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('You touched /songslist route with DELETE!');
      res.json({message: 'DELETE songslist endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  });

/// ////Lucas Ng Sample Endpoint/////
/// /////////////////////////////////
router.route('/songs')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT * from songs;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const songName = req.body.song_name;
      const sqlStatement = `UPDATE songs SET song_name = '${songName}' WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      // eslint-disable-next-line quotes
      const sqlStatement = `INSERT INTO songs (song_name, explicit) VALUES ('${req.body.song}', '${req.body.explicit}');`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.INSERT
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({error: err});
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const songId = req.body.song_id;
      const sqlStatement = `DELETE from songs WHERE song_id = ${songId};`;
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log('deleted song');
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// //////////////////////////////////
/// ///////Nelson Mendez - Endpoints////////
/// /////////////////////////////////
/// /////////////////////////////////
/// //// Endpoints////////
/// /////////////////////////////////

router.get('/playlist/:playlist_id', async (req, res) => {
  try {
    const playlistId = req.params.playlist_id;
    const sqlStatement = `SELECT * from playlists WHERE playlist_id = ${playlistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get('/playlists', async (req, res) => {
  try {
    const sqlStatement = 'SELECT * from playlists;';
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.put('/playlist/:playlist_id/:playlist_name', async (req, res) => {
  try {
    // add id for endpoint
    const playlistId = req.params.playlist_id;
    const playlistName = req.params.playlist_name;
    const sqlStatement = `UPDATE playlists SET playlist_name = '${playlistName}' WHERE playlist_id = ${playlistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.UPDATE
    });
    res.json(result);
  } catch (err) {
    res.json({error: 'Server error, try again!'});
  }
});

router.post('/playlist', async (req, res) => {
  try {
    // eslint-disable-next-line quotes
    const sqlStatement = `INSERT INTO playlists (playlist_name) VALUES ('${req.body.playlist}');`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.INSERT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({error: err});
  }
});

router.delete('/playlist/:playlist_id', async (req, res) => {
  try {
    // add id for endpoint
    const playlistId = req.params.playlist_id;
    const sqlStatement = `DELETE from playlists WHERE playlist_id = ${playlistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    console.log('deleted playlist');
    res.json(result);
  } catch (err) {
    res.json({error: 'Server error, try again!'});
  }
});

/// //////////////////////////Wyatts Endpoints /Artists Endpoints////////////////////////////
router.get('/artists/:artist_id', async (req, res) => {
  try {
    const artistId = req.params.artist_id;
    const sqlStatement = `SELECT * from artist WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get('/artists', async (req, res) => {
  try {
    const sqlStatement = 'SELECT * from artist;';
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.put('/artists/:artist_id/:artist_name', async (req, res) => {
  try {
    // add id for endpoint
    const artistId = req.params.artist_id;
    const artistName = req.params.artist_name;
    const sqlStatement = `UPDATE artist SET artist_name = '${artistName}' WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.UPDATE
    });
    res.json(result);
  } catch (err) {
    res.json({error: 'Server error, try again!'});
  }
});

router.post('/artists', async (req, res) => {
  try {
    // eslint-disable-next-line quotes
    const sqlStatement = `INSERT INTO artist (artist_name, verified) VALUES ('${req.body.artist}', '${req.body.verified}');`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.INSERT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({error: err});
  }
});

/*
router.delete('/artists/:artist_id', async (req, res) => {
  try {
    const artistId = req.params.artist_id;
    const sqlStatement = `DELETE from artist WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    console.log('deleted artist');
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/

router.put('/dining', async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location
      },
      {
        where: {
          hall_id: req.body.hall_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/meals', async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

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

export default router;
