/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import path from 'path';

const router = express.Router();

/// /////////////////////////////////
/// ////// Review Endpoints ///////// by Carter C
/// /////////////////////////////////

router.get('/review', async(req, res) => {
  try{
    const review = await db.sequelizeDB.query(
      'SELECT * FROM Reviews');
    res.json({data:review})
  }catch{res.send('error')}
})

router.get('/review/:id', async (req, res) => {
  try{
    const { id } = req.params;
    console.log(req.params);
    const result = await db.sequelizeDB.query(
      'SELECT * FROM Reviews WHERE review_id = ${id}'
    );
    res.json({data: result });
  }catch(error){
    console.error(error);
    res.send('Server error')
  }
})

router.post('/review', async (req, res) => {
  try{
    const query = 'INSERT INTO Review (review_id, review_desc, avg_star_rating, resturant_id) VALUES ('${parseInt(req.body.review_id)}','${parseInt(req.body.review_desc)}','${parseInt(req.body.avg_star_rating)}','${parseInt(req.body.resturant_id)}')';
    console.log(query);
    const newReview = await db.sequelizeDB.query(query);
    res.send('UPDATED');
  } catch (error) {
    console.error(error);
  }
});

export default router;
