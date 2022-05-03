import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';



const router = express.Router();

router.route('/').get(async (req, res) => {
  try { 
    const cuisineQuery = 'SELECT * FROM cuisine';
    const cuisine = await db.sequelizeDB.query(cuisineQuery);
   
    res.json(cuisine);
  } catch (err) {
    res.json({message: err});
  }
});

router.get('/:cuisine_id', async (req, res) => {
  const Query = `SELECT * FROM cuisine WHERE cuisine_id = ${req.cuisine_id}`;
  try {
    const cuisine = await db.sequelizeDB.query(Query);
    res.json(cuisine);
  } catch (err) {
    res.json({message: err});
  }
});

router.get('/cuisinepost', async (req, res) => {

  // const cuisineIdQuery = await db.sequelizeDB.query(`INSERT INTO cuisine (cuisine_type) values(${req.body.cuisineName})`;


  try {
    // console.log("here")
    const testQuery = 'SELECT max(cuisine_id) FROM cuisine';
    const result = await db.sequelizeDB.query(cuisineQuery);
    console.log(testQuery);
    // const Query = `SELECT * FROM cuisine WHERE cuisine_id = ${req.cuisine_id}`;
    // const cuisine = await db.sequelizeDB.query(Query);
    // console.log()
    // const cuisine = await db.sequelizeDB.query(cuisineIdQuery);
    res.json(testQuery);
  } catch (err) {
    res.json({message: err});
  }
});

export default router;
