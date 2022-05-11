/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../../database/initializeDB.js';
import DiningHall from '../../models/DiningHall.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

router.get('/mealLocation', async (req, res) => {
  try {
    const mealLocation = await db.mealLocation.findAll();
    const reply = mealLocation.length > 0 ? { data: mealLocation } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/mealLocation/:hall_id', async (req, res) => {
  try {
    const hall = await db.mealLocation.findAll({
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

router.get('/mealLocation/:meal_id', async(req,res)=>{
  try {
    const meal =await db.mealLocation.findAll({
      where:{
        meal_id:req.params.meal_id
      }
    });
    res.json(meal);
  } catch(err){
    console.error(err);
    res.error('Server error');
  }
});

router.post('mealLocation', async(req,res)=>{
  const meals = await db.mealLocation.findAll();
  const currentId = (await meals.length) + 1;
  try{
    const newDining = await db.mealLocation.create({
      meal_id : currentId,
      meal_name : req.body.meal_name,
      meal_category: req.body.meal_category,
    });
    res.json(newDining);
  }catch(err){
    console.error(err)
    res.error('Server error');
  }
});

router.delete('/mealLocation/:meal_id', async(req,res) =>{
  try{
    await db.mealLocation.destroy({
      where: {
        meal_id:req.params.meal_id
      }
    });
    res.send('Successfully Deleted')
  } catch(err){
    console.error(err)
    res.error('Server error');
  }
});

router.put('/mealLocation', async (req, res) => {
  try {
    await db.mealLocation.update(
      {
        meal_id : currentId,
        meal_name : req.body.meal_name,
        meal_category: req.body.meal_category,
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


