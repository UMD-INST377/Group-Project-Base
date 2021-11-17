/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import animalsController from '../controllers/animalsController.js';
import biomesController, {getBiomes, putBiomes, postBiomes, deleteBiomes} from '../controllers/biomesController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Group 16s API!');
});

/* Tyler D/animals table endpoint */
router
  .route('/animals')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(animalsController.animalsGET, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      console.log(result);
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .put(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(animalsController.animalPUT, {
        replacements: {
          common_name: req.body.common_name,
          weight_lbs: req.body.weight_lbs,
          species: req.body.weight_lbs,
          Animal_ID: req.body.Animal_ID
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(result);
      res.send('Database Entry Succesfully Updated');
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(animalsController.animalPOST, {
        replacements: {
          common_name: req.body.common_name,
          weight_lbs: req.body.weight_lbs,
          species: req.body.species,
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(animalsController.animalDELETE, {
        replacements:{
          Animal_ID: req.body.Animal_ID
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('touched /animals with DELETE');
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  });

// Elijah F /extinction table endpoint*/
router
  .route('/extinction')
  .get(async (req, res) => {
    try {
      console.log('touched /extinction with GET');
      res.json({ message: '/extinction GET method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('touched /extinction with PUT');
      res.json({ message: '/extinction PUT method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .post(async (req, res) => {
    try {
      console.log('touched /extinction with POST');
      res.json({ message: '/extinction POST method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .delete(async (req, res) => {
    try {
      console.log('touched /extinction with DELETE');
      res.json({ message: '/extinction DELETE method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  });

//Grant T /fight_mode

router
  .route('/fight_mode')
  .get(async (req, res) => {
    try {
      console.log('touched /animals with GET');
      res.json({ message: '/fight_mode GET method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .put(async (req, res) => {
    try {
      console.log('touched /fight_mode with PUT');
      res.json({ message: '/fight_mode PUT method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .post(async (req, res) => {
    try {
      console.log('touched /fight_mode with POST');
      res.json({ message: '/fight_mode POST method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .delete(async (req, res) => {
    try {
      console.log('touched /fight_mode with DELETE');
      res.json({ message: '/fight_mode DELETE method' });
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  });

// Jaeuk Yang -- /Biomes
router
  .route('/biomes')
  .get(async (req, res) => {
    try {
      const b = await db.sequelize.query(biomesController.getBiomes, {
        type: sequelize.QueryTypes.SELECT
      }
      )
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .put(async (req, res) => {
    try {
      const b = await db.sequelize.query(biomesController.putBiomes, {
        replacements: {
          biome_id: req.body.biome_id,
          animal_id: req.body.animal_id,
          Tropical_Rainforest: req.body.Tropical_Rainforest,
          Temperate_Forest: req.body.Temperate_Forest,
          Desert: req.body.Desert,
          Tundra: req.body.Tundra,
          Grassland: req.body.Grassland,
          Savanna: req.body.Savanna,
          Freshwater: req.body.Freshwater,
          Marine: req.body.Marine
        },
        type: sequelize.QueryTypes.INSERT
      }
      )
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .post(async (req, res) => {
    try {
      const b = await db.sequelize.query(biomesController.postBiomes, {
        replacements: {
          biome_id: req.body.biome_id,
          animal_id: req.body.animal_id,
          Tropical_Rainforest: req.body.Tropical_Rainforest,
          Temperate_Forest: req.body.Temperate_Forest,
          Desert: req.body.Desert,
          Tundra: req.body.Tundra,
          Grassland: req.body.Grassland,
          Savanna: req.body.Savanna,
          Freshwater: req.body.Freshwater,
          Marine: req.body.Marine
        },
        type: sequelize.QueryTypes.UPDATE
      }
      )
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  })
  .delete(async (req, res) => {
    try {
      const b = await db.sequelize.query(biomesController.deleteBiomes, {
        replacements: {
          biome_id: req.body.biome_id
        },
        type: sequelize.QueryTypes.DELETE
      }
      )
    } catch (err) {
      console.log(err);
      res.send('Something went wrong, sorry');
    }
  });


/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
router.get('/dining', async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply =
      halls.length > 0 ? { data: halls } : { message: 'no results found' };
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
        hall_id: req.params.hall_id,
      },
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
      hall_long: req.body.hall_long,
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
        hall_id: req.params.hall_id,
      },
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
        hall_location: req.body.hall_location,
      },
      {
        where: {
          hall_id: req.body.hall_id,
        },
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
        meal_id: req.params.meal_id,
      },
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
        meal_category: req.body.meal_category,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
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
        meal_id: req.params.meal_id,
      },
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
        fat: req.body.fat,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
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
        restriction_id: req.params.restriction_id,
      },
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
const macrosCustom =
  'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT,
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
      type: sequelize.QueryTypes.SELECT,
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
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
