/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

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
  .put((req, res) => {
    try {
      console.log('touched /albums route with PUT');
      res.json({message: 'PUT albums endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /albums route with POST');
      res.json({message: 'POST albums endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /albums route with DELETE');
      res.json({message: 'DELETE albums endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error'});
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

/// ////Lucas Ng Sample Endpoint/////
/// /////////////////////////////////
router.route('/songs')
  .get((req, res) => {
    try {
      console.log('You touched the songs route!');
      res.json({message: 'GET songs endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .put((req, res) => {
    try {
      console.log('You touched the songs route!');
      res.json({message: 'PUT songs endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .post((req, res) => {
    try {
      console.log('You touched the songs route!');
      res.json({message: 'POST songs endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('You touched the songs route!');
      res.json({message: 'DELETE songs endpoint!'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error!'});
    }
  });

/// //////////////////////////////////
/// ///////Nelson Mendez - Endpoints////////
/// /////////////////////////////////
/// /////////////////////////////////
/// //// Endpoints////////
/// /////////////////////////////////

router.route('/playlists')
  .get(async (req, res) => {
    try {
      const sqlStatement = 'SELECT * from playlists;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log(result);
      res.json(result);

      res.json({message: 'GET playlists endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server error, try again!'});
    }
  })
  .put(async (req, res) => {
    try {
      // add id for endpoint
      const sqlStatement = 'UPDATE playlists SET playlist_name = ? WHERE condition playlist_id = ?;';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  })
  .post(async (req, res) => {
    try {
      // add id for endpoint
      // eslint-disable-next-line quotes
      const sqlStatement = `INSERT INTO playlists playlist_name VALUES ${req.body.playlist};`;
      const playlist = {
        playlist_name: req.body.playlist
      };
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.INSERT
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.json({error: err});
    }
  })
  .delete(async (req, res) => {
    try {
      // add id for endpoint
      const sqlStatement = 'DELETE playlists SET ?';
      const result = await db.sequelizeDB.query(sqlStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.json({error: 'Server error, try again!'});
    }
  });

/// //////////////////////////Wyatts Endpoints /Artists Endpoints////////////////////////////
router.route('/artists')
  .get(async (req, res) => {
    try {
      console.log('GET on /artists route');
      res.json({data: 'GET artists endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server Error'});
    }
  })
  .put((req, res) => {
    try {
      console.log('PUT on /artists route');
      res.json({message: 'PUT artists endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server Error'});
    }
  })
  .post((req, res) => {
    try {
      console.log('POST on /artists route');
      res.json({message: 'POST artists endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server Error'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('DELETE on /artists route');
      res.json({message: 'DELETE artists endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Server Error'});
    }
  });

router.get('/dining', async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/dining/:hall_id', async (req, res) => {
  try {
    const hall = await db.DiningHall.findAll({
      where: {
        hall_id: req.params.hall_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/dining', async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/dining/:hall_id', async (req, res) => {
  try {
    await db.DiningHall.destroy({
      where: {
        hall_id: req.params.hall_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

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

/// /////////////////////////////////
/// ////////Meals Endpoints//////////
/// /////////////////////////////////
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/meals/:meal_id', async (req, res) => {
  try {
    const meals = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
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

/// /////////////////////////////////
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/macros/:meal_id', async (req, res) => {
  try {
    const meals = await db.Macros.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
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

export default router;
