/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////START:GROUP 23////////
/// /////////////////////////////////
// Sravya GET requests

router.get('/', (req, res) => {
  res.send('Welcome to the College Park Restaurants API!');
});

// retrieve the data in restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await db.restaurants.findAll();
    // const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
// retrieve the restaurants with the specified cuisine using cuisine id
router.get('/restaurants/cuisine/:cuisine_id', async (req, res) => {
  try {
    const { cuisine_id } = req.params;
    const result = await db.sequelizeDB.query(
      `SELECT * FROM restaurants where cuisine_id = ${ cuisine_id }`
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
router.get('/restaurants/:rest_id', async (req, res) => {
  try {
    const { rest_id } = req.params;
    const result = await db.sequelizeDB.query(
      `SELECT * FROM restaurants where restaurant_id = ${ rest_id }`
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// POST request
router.post('/hours', async (req, res) => {
  const hours = await db.hours.findAll();
  const currentId = (await hours.length) + 1;
  try {
    const newHours = await db.hours.create({
      hours_id: currentId,
      opening_time: req.body.opening_time,
      closing_time: req.body.closing_time, 
      restaurant_id: req.body.restaurant_id
    });
    res.json(newHours);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// PUT request REVIS
router.put('/hours', async (req, res) => {
  try {
    await db.hours.update(
      {
        opening_time: req.body.opening_time,
        closing_time: req.body.closing_time
      },
      {
        where: {
          hours_id: req.body.hours_id
        }
      }
    );
    res.send('Successfully Updated Hours');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// DELETE REVIS
router.delete('/hours/:hours_id', async (req, res) => {
  try {
    await db.hours.destroy({
      where: {
        hours_id: req.params.hours_id
      }
    });
    res.send('Successfully Deleted Hours');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Sana Hassan GET requests
// endpoint 1

// make sure to make pull request

router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.json(macros);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// endpoint 2

router.get('/macros/:macro_id', async (req, res) => {
  try {
    const macros = await db.Macros.findAll({
      where: {
        macro_id: req.params.macro_id
      }
    });
    res.json(macros);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

// POST
router.post('/macros', async (req, res) => {
  const macros = await db.Macros.findAll();
  const currentId = (await macros.length) + 1;
  try {
    const newMacros = await db.Macros.create({
      macros_id: currentId,
      calories: req.body.calories,
      serving_size: req.body.serving_size, 
      cholesterol: req.body.cholesterol,
      sodium: req.body.sodium,
      carbs: req.body.carbs,
      protein: req.body.protein,
      meal_id: req.body.meal_id,
      fat: req.body.fat

    });
    res.json(newMacros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


//Put

router.put('/macros', async (req, res) => {
  try {
    await db.Macros.update(
      {
        calories: req.body.calories,
        serving_size: req.body.serving_size, 
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        meal_id: req.body.meal_id,
        fat: req.body.fat
      },
      {
        where: {
          macros_id: currentId
        }
      }
    );
    res.send('Successfully Updated Macros');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// delete

router.delete('/macros/:macros_id', async (req, res) => {
  try {
    await db.Macros.destroy({
      where: {
        macros_id: req.params.macros_id
      }
    });
    res.send('Successfully Deleted Macros');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



// Ian GET requests

// Get Endpoint 1: All records of single type
router.get('/address', async (req, res) => {
  try {
    const addresses = await db.address.findAll();
    res.json(addresses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get Endpoint 2: Specific query, getting the city
router.get('/address/:city', async (req, res) => {
  try {
    const addresses = await db.address.findAll({
      where: {
        city: req.params.city
      }
    });
    res.json(addresses);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// POST 
router.post('/address', async (req, res) => {
  const addresses = await db.address.findAll();
  const currentId = (await addresses.length) + 1;
  try {
    const newAddress = await db.address.create({
      address_id: currentId,
      address_1: req.body.address_1,
      address_2: req.body.address_2,
      city: req.body.city,
      state: req.body.state,
      zipe_code_id: req.body.zipe_code_id, 
      restaurant_id: req.body.restaurant_id
    });
    res.json(newAddress);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// PUT
router.put('/address', async (req, res) => {
  try {
    await db.address.update(
      {
        address_1: req.body.address_1,
        city: req.body.city
      },
      {
        where: {
          address_id: req.body.address_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// DELETE
router.delete('/address/:address_id', async (req, res) => {
  try {
    await db.address.destroy({
      where: {
        address_id: req.params.address_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Trieuduong IC1 GET requests 
// Endpoint 1
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Endpoint 2
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

// Trieuduong IC2
// POST
router.post('/meals', async (req, res) => {
  const meals = await db.meals.findAll();
  const currentId = (await meals.length) + 1;
  try {
    const newAddress = await db.address.create({
      meals_id: currentId,
      restaurant_id: req.body.restaurant_id
    });
    res.json(newMeals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// PUT
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

// DELETE
router.delete('/meals/:meals_id', async (req, res) => {
  try {
    await db.meals.destroy({
      where: {
        meals_id: req.params.meals_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;
