/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

/// /////////////////////////////////
/// //////// Review Endpoints////////// by Ryan E
/// /////////////////////////////////


const router = express.Router();
router.get('/review', async(req, res) => {
  try {
    const review = await db.Reviews.findAll();
    res.json({
      data: review
    });
  } catch (error) {
    console.log(error);
    res.send('something went wrong');
  }
});
//get statement
router.get('/review/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const review = await db.Reviews.findOne({where: {review_id: `${id}`}});
    res.json({
      data: review
    });
  } catch (error) {
    console.error(error);
    res.send('something went wrong');
  }
});
//post statement
router.post('/review', async (req, res) => {
  // console.info(chalk.bgRedBright.bold('Post request to /review'), req.body);
 
  // const review = await db.Reviews.findAll();
 
  // const review = await db.Reviews.findAll();
 
  // const currentId = (await review.length) + 1;
 
  try {
    const newReview = await db.Reviews.create({
      review_id: req.body.review_id,
      review_desc: req.body.review_desc,
      avg_star_rating: req.body.avg_star_rating,
      restaurant_id: req.body.restaurant_id
    });
    // res.json(newReview);
    res.json({message: 'completed'});
  } catch (err) {
    console.error(err);
    res.json('Server error');
  }
});
//delete statement
router.delete('/reviews/:review_id', async (req, res) => {
  console.log(req.params.review_id);
  try {
    await db.Reviews.destroy({
      where: {
        review_id: req.params.review_id
      }
    });
    res.send('Successfully Deleted');
    console.log('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
//put statement
router.put('/reviews', async (req, res) => {
  console.log(chalk.bgCyanBright('touched put endpoint'));
  try {
    await db.Reviews.update(
      {
        avg_star_rating: req.body.avg_star_rating,
        review_desc: req.body.review_desc
      },
      {
        where: {
          review_id: req.body.review_id
        }
      }
    );
    res.json({update: req.body.avg_star_rating});
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});
export default router;