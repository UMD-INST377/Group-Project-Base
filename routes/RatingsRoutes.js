import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/ratings')
  .get(async (req, res) => {
    try {
      const rating = await db.ratings.findAll();
      const reply = rating.length > 0 ? { data: rating} : { message: 'No results'};
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.send('Error in Server');
    }
  });
router.route('/ratings/:rating_id').get(async(req, res) => {
  try {
    const rating = await db.ratings.findAll({
      where: {
        rating_id: req.params.rating_id
      }
    });
    res.json(rating);
  } catch (err) {
    console.error(err);
    res.send('Error in server');
  }
});
export default router;