/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../../database/initializeDB.js';
import hallIdQuery from '../../models/Reviews.js';

const router = express.Router();
router.get('/review', async(req, res)=>{
  try{
    const review = await db.Reviews.findAll();
    res.json({
      data:review
    });
  }
  catch(error){
    console.error(error)
    res.send('something went wrong')
  }
})
router.get('/review/:id', async(req, res)=> {
  try{
    const{id}= req.params
    const review = await db.Reviews.findOne({where: {review_id: `${id}`}});
    res.json({
      data:review
    });
  }
  catch(error){
    console.error(error)
    res.send('something went wrong')
  }
});


router.post('/review', async (req, res) => {

  console.info(chalk.bgRedBright.bold('Post request to /review'), req.body);
 
  const review = await db.Reviews.findAll();
 
   
  // const review = await db.Reviews.findAll();
 
  
  const currentId = (await review.length) + 1;
  
  try {
    const newReview = await db.Reviews.create({
      review_id: currentId,
      review_desc: req.body.review_desc,
      avg_star_rating: req.body.avg_star_rating,
      restaurant_id: req.body.restaurant_id,
    });
    // res.json(newReview);
    res.json({message: 'completed'});
  } catch (err) {
    console.error(err);
    res.json('Server error');
  }
});

// localhost:3000/api
router.get('/', (req, res) => {
  console.log('You touched the default route!');
  res.json({message: 'Welcome to the UMD Dining API!'});
  // res.send('Welcome to the UMD Dining API!');
});

// /////////////////////////////////
// Food Inspection Set Demos
// /////////////////////////////////
router.route('/foodServicesPG')
  .get(async (req, res) => {
    try {
      const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      res.json({data: json});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put FoodServices endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      console.log('Touched post endpoint', req.body);
      console.log(req.body?.resto);
      res.json({message: 'post FoodServices endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete FoodServices endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

router.route('/sqlDemo')
  .post(async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.body?.dining);
      const hallId = req.body?.dining || 0;
      const result = await db.sequelizeDB.query(hallIdQuery, {
        replacements: { hall_id: hallId },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request'});
    }
  });

// /////////////////////////////////
// ////WholeMeal demos////////
// /////////////////////////////////
router.route('/wholeMeal')
  .get(async (req, res) => {
    try {
      const meals = await db.Meals.findAll();
      const macros = await db.Macros.findAll();
      const wholeMeals = meals.map((meal) => {
        const macroEntry = macros.find((macro) => macro.meal_id === meal.meal_id);
        console.log('meal', meal);
        console.log('macroEntry', macroEntry);

        return {
          ...meal.dataValues,
          ...macroEntry.dataValues
        };
      });
      res.json({data: wholeMeals});
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong on the server'});
    }
  });

router.route('/wholeMeal2')
  .get(async (req, res) => {
    try {
      const meals = await db.Meals.findAll({ include: db.Macros, limit: 10 });

      const wholeMeals = meals.map((meal) => {
        console.log('meal', meal);
        const dataObject = {
          ...meal.dataValues,
          ...meal.Macro.dataValues
        };

        delete dataObject.Macro;
        return dataObject;
      });

      console.log(wholeMeals);
      res.json({data: wholeMeals});
    } catch (err) {
      console.error(err);
      res.json({message: err});
    }
  })
  .post(async (req, res) => {
    try {
      console.log('Received POST on /wholeMeal2', req.body);
      if (!req.body.name) {
        throw new Error('Missing name');
      }
    } catch (err) {
      console.error(err);
      res.json({message: err});
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
    res.send('Server error');
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
    res.send('Server error');
  }
});

router.post('/dining', async (req, res) => {
  console.info(chalk.bgRedBright.bold('Post request to /dining'), req.body);

  const existingHall = await db.DiningHall.findAll({
    where: {
      hall_name: req.body.hall_name
    }
  });
  const halls = await db.DiningHall.findAll();
  console.log(chalk.bgBlueBright.bold('existingHall'), existingHall);
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    // res.json(newDining);
    res.json({message: 'not yet'});
  } catch (err) {
    console.error(err);
    res.json('Server error');
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
    res.send('Server error');
  }
});

router.put('/dining', async (req, res) => {
  console.log(chalk.bgCyanBright('touched put endpoint'), req.body);
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
    res.json({update: req.body.hall_name});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
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
    res.send('Server error');
  }
});

// const mealMapCustom = `SELECT hall_name,
//   hall_address,
//   hall_lat,
//   hall_long,
//   meal_name
// FROM
//   Meals m
// INNER JOIN Meals_Locations ml
//   ON m.meal_id = ml.meal_id
// INNER JOIN Dining_Hall d
// ON d.hall_id = ml.hall_id;`;
// router.get('/map/data', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(mealMapCustom, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.send('Server error');
//   }
// });
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

export default router;
