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
    const {ratingId} = req.params;
    const ratingList = await db.ratings.findOne({
      where: {
        rating_id: `${ratingId}`
      }
    });
    res.json({data: ratingList});
  } catch (err) {
    console.error(err);
    res.send('Error in server');
  }
});
router.post('/ratings', async (req, res) => {
  const ratingsId = await db.ratings.findAll();
  const current = (await ratingsId.length) + 1;
  try {
    const newRatings = await db.ratings.create({
      rating_id: req.body.rating_id,
      rating: req.body.rating,
      description: req.body.description

    });
    res.send('rating added');
  } catch (err) {
    console.log(err);
    console.log(current);
    res.send(err);
  }
});
router.put('/ratings', async (req, res) => {
  try {
    await db.ratings.update(
      {
        rating : req.body.rating,
        description: req.body.description
      },
      {
        where: {
          rating_id: req.body.rating_id
        }
      }
    );
    res.send('Rating Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Rating not found');
  }
});

router.delete('ratings/:rating_id', async (req, res) => {
  try {
    await db.ratings.destroy({
      where: {
        rating_id : req.params.rating_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.send('Server Error');
  }
});
export default router;