/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

// Created by Viphu Nguyen
// Access the actors table and receiving the actor's id
router.get('/actors/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const actorList = await db.Actor.findOne({
      where: {
        actor_id: `${id}`
      }
    });
    res.send({
      actorList
    });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// To delete a specific actors
router.post('/delete_actors', async (req, res) => {
  try {
    const actorList = await db.Actor.destroy({
      where: {
        actor_id: req.body.actor_id
      }
    });
    res.send(
      'Sucessfully Deleted'
    );
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// Access the actors table and receiving the actor's first name
router.route('/actors')
  .get(async (req, res) => {
    try {
      const actorList = await db.Actor.findAll({
        order: [['fname', 'DESC']]
      });
      res.json({
        data: actorList
      });
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })

// Access the actors table and create a dummy row in the actors table
  .post(async (req, res) => {
    const newActor = await db.Actor.create({
      fname: req.body.fname, 
      lname: req.body.lname,
      deathyear: req.body.deathyear, 
      birthyear: req.body.birthyear,
    });
    res.send('dummyValue')
  })
// End of Viphu Nguyen's Contribution 

// Gerson's contribution 1

router.get('/titles/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const titleList = await db.Title.findOne({
      where: {
        title_id: `${id}`
      }
    });
    res.send({
      titleList
    });
  } catch (err) {
    console.error(err);
    res.send('Server error Title get');
  }
});

// Access the titles table and receiving the title's name 
router.route('/titles')
  .get(async (req, res) => {
    try {
      const titleList = await db.Title.findAll({
        order: [['primary_title', 'DESC']]
      });
      res.json({
        data: titleList
      });
    } catch (err) {
      console.error(err);
      res.send('Server error Title route');
    }
  })

// Access the titles table and creates a dummy row in the titles table
  .post(async (req, res) => {
    const newTitle = await db.Title.create({
      primary_title: '500 Days of Summer',
      title_type: 'Movie'
    });
    res.send('dummyValue');
  })

// end of Gerson pt 1

// not sure who did this
// router.route('/crew')
//   .get(async (req, res) => {
//     try {
//       const crewList = await db.Crew.findAll({
//         order: [['fname', 'DESC']]
//       });
//       res.json({
//         data: crewList
//       });
//     } catch (err) {
//       console.error(err);
//       res.send('Server error');
//     }
//   });
// Gerson pt 2
router.get('/episodes/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const episodeList = await db.episode_details.findOne({
      where: {
        episode_id: `${id}`
      }
    });
    res.send({
      episodeList
    });
  } catch (err) {
    console.error(err);
    res.send('Server error Episode get');
  }
});

// Access the actors table and receiving the actor's first name
router.route('/episodes')
  .get(async (req, res) => {
    try {
      const episodeList = await db.episode_details.findAll({
        order: [['episode_name', 'DESC']]
      });
      res.json({
        data: episodeList
      });
    } catch (err) {
      console.error(err);
      res.send('Server error episode route');
    }
  })

// Access the actors table and create a dummy row in the actors table
  .post(async (req, res) => {
    const newEpisode = await db.episode_details.create({
      episode_name: 'firstDummy', 
      season_number: 'secondDummy' 
    });
    res.send('dummyValue')
  })

// end of Gerson pt 2

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
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
