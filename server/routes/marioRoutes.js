/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Hispanic Restaurants API!');
}); 

/// /////////////////////////////////
/// //////// Review Endpoints////////// by Mario C
/// /////////////////////////////////

router.get('/review', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(
      'SELECT * FROM Review'
    );
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/review/:id', async (req, res) => {
  try {
    const {id} = req.params
    const result = await db.sequelizeDB.query(
      `SELECT * FROM Review WHERE review_id = ${id}`
    );
    res.json({data: result});
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.post('/review', async (req, res) => {
  try {
    console.log('Touched post endpoint', req.body);
    console.log(req.body?.resto);
    res.json({message: 'post FoodServices endpoint'});
  } catch (err) {
    console.log(error);
    res.json({error: 'Something went wrong on the server'});
  }
});

router.put('/review', async (req, res) => {
  try {
    res.json({message: 'put FoodServices endpoint'});
  } catch (err) {
    console.log(error);
    res.json({error: 'Something went wrong on the server'});
  }
});
router.delete('/review', async (req, res) => {
  try {
    res.json({message: 'delete FoodServices endpoint'});
  } catch (err) {
    console.log(error);
    res.json({error: 'Something went wrong on the server'});
  }
});

export default router;
