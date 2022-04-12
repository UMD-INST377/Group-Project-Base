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
router.route('/ratings/:ratingId').get(async(req, res) => {
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
// router.post('/ratings', async (req, res) => {
//   console.info(chalk.bgRedBright.bold('Post request to /ratings'), req.body);

//   const existingRatings = await db.ratings.findAll({
//     where: {
//       rating_id: req.body.rating_id
//     }
//   });
//   const ratings = await db.ratings.findAll();
//   console.log(chalk.bgBlueBright.bold('existingRating'), existingRatings);
//   const currentRatingId = (await ratings.length) + 1;
//   try {
//     const newRating = await db.ratings.create({
//       rating_id: currentRatingId,
//       rating: req.body.rating,
//       description: req.body.description
//     });
//     // res.json(newDining);
//     res.json({message: 'not yet'});
//   } catch (err) {
//     console.error(err);
//     res.json('Server error');
//   }
// });

export default router;