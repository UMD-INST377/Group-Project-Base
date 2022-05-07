import express from 'express';
import sequelize from 'sequelize';

import db from '../../database/initializeDB.js';

const router = express.Router();




router.get('/meals', async (req, res) => {
    try {
      const meals = await db.meals.findAll();
      res.json(meals);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
  
  router.get('/meals/:meal_id', async (req, res) => {
    try {
      const meals = await db.meals.findAll({
        where: {
          meal_id: req.params.meal_id
        }
      });
      res.json({data: meals});
    } catch (err) {
      console.error(err);
      res.error('Server error');
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