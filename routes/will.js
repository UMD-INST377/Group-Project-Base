import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import mealsQuery from '../controller/meals_query.js';
import locationsQuery from '../controller/locations_query.js';

const router = express.Router();

// api/will/meals
// selects all meals 
router.get('/meals', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealsQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ data: result });
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

// api/will/meals/:meal_id
// selects a single meal based on id
router.get('/meals/:meal_id', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`SELECT * FROM meals WHERE meal_id = (:meal_id)`, {
      replacements: {meal_id: req.params.meal_id},
      type: sequelize.QueryTypes.SELECT
    }); 
    res.json({ data: result});
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

// api/will/meals
// adds a new meal for the next id
router.post('/meals', async (req, res) => {
  const meals = await db.Meals.findAll();
  const currentId = (await meals.length) + 1;
  try {
    const newMeal = await db.Meals.create({
      meal_id: currentId,
      meal_name: req.body.meal_name,
      meal_category: req.body.meal_category
    });
    res.json(newMeal);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

// api/will/meals
// updates meal based on body input
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
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

// api/will/meals
// deletes meal based on body input 
router.delete('/meals/:meal_id', async (req, res) => {
  try {
    await db.Meals.destroy({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.send('Meal Successfully Deleted');
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

// extra get controller
// api/will/locations
router.get('/locations', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(locationsQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ data: result });
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

export default router;