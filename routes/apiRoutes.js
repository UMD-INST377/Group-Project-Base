/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});



/* Jim's lab 9 routes */
router.route('/census')
  .get((req, res) => {
    try {
      console.log('touched /census with GET');
      res.json({data: []}); // get census data later
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put((req, res) => {
    try {
      console.log('touched /census with PUT');
      res.json({message: 'put census endpoint'});
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /census with POST');
      res.json({message: 'post census endpoint'});
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /census with DELETE');
      res.json({message: 'delete census endpoint'});
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  });

  /* Kaveh's lab 9 routes */

  router.route('/schools')
  .get((req,res)=>{
try{

  console.log('touched /schools with GET');
  res.json({data: []});
} catch(err){
  console.error(err);
  res.json({error: 'Smething went wrong on the server.'});
}

  })

  .post((req,res)=>{

    try{
      console.log('touched/schools with POST');
      res.json({message: 'post schools endpoint'});
    }catch(err){
      console.error(err);
      res.json({error: 'Something went wrong on the server.'})
    }
  })


  .delete((req,res)=>{
try{

  console.log('touched /schools with DELETE');
  res.json({message: 'delete census endpoint'});
} catch(err){
  console.error(err);
  res.json({error: 'Something went wrong on the server.'});
}

  })

  /*Teddy' lab 9 routes */

  router.route('/population')
  .get((req, res) => {
    try {
      console.log('touched /population with GET');
      res.json({data: []}); // get census data later
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put((req, res) => {
    try {
      console.log('touched /population with PUT');
      res.json({message: 'put census endpoint'});
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /population with POST');
      res.json({message: 'post population endpoint'});
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /population with DELETE');
      res.json({message: 'delete population endpoint'});
    } catch(err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  });

  /* Blen's lab 9 routes */


router.route('/ethnicities')
.get((req, res) => {
  try {
    console.log('touched /ethnicities with GET');
    res.json({data: []}); // get census data later
  } catch(err) {
    console.error(err);
    res.json({error: 'Something went wrong on the server.'});
  }
})
.put((req, res) => {
  try {
    console.log('touched /ethnicities with PUT');
    res.json({message: 'put ethnicities endpoint'});
  } catch(err) {
    console.error(err);
    res.json({error: 'Something went wrong on the server.'});
  }
})
.post((req, res) => {
  try {
    console.log('touched /ethnicities with POST');
    res.json({message: 'post ethnicities endpoint'});
  } catch(err) {
    console.error(err);
    res.json({error: 'Something went wrong on the server.'});
  }
})
.delete((req, res) => {
  try {
    console.log('touched /ethnicities with DELETE');
    res.json({message: 'delete ethnicities endpoint'});
  } catch(err) {
    console.error(err);
    res.json({error: 'Something went wrong on the server.'});
  }
});
	   
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
})
  .get(async(req, res) => {
    try {
      const db_response = await db.sequelizeDB.query(controllers.ethnicities.getEthnicitiesSQL);
      console.log('touched /ethnicities with GET');
      res.json(db_response); 
      return db_response;
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put(async(req, res) => {
    try {
      console.log(req.params)
      await db.sequelizeDB.query(controllers.ethnicities.putEthnicitiesSQL, {replacements: {ethnicity_zcta: req.query.ethnicity_zcta, 
        ethnicity_id: req.query.ethnicity_id, ethnic_category: req.query.ethnic_category, ethnic_count: req.query.ethnic_count }});
      console.log('touched /ethnicities with PUT');
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post(async(req, res) => {
    try {
      console.log(req.query)
      await db.sequelizeDB.query(controllers.ethnicities.postEthnicitiesSQL, {replacements: {ethnicity_zcta: req.query.ethnicity_zcta, 
         ethnic_count: req.query.ethnic_count }, type: sequelize.QueryTypes.INSERT});
      console.log('touched /ethnicities with POST');
      res.json({message: 'post ethnicities endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete(async(req, res) => {
    try {
      console.log(req.query)
      await db.sequelizeDB.query(controllers.ethnicities.deleteEthnicitiesSQL);
      console.log('touched /ethnicities with DELETE');
      res.json({message: 'delete ethnicities endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
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
