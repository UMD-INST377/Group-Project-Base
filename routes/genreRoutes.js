/// //////////////////////////////////
/// ///////////Genres Endpoints////////
/// //////////////////////////////////
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/genres').get(async (req, res) => {
  try {
    const genre = await db.Genres.findAll();
    const reply = genre.length > 0 ? { data: genre } : { message: 'No results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server error1');
  }
});
router.route('/genres/:genre_id').get(async (req, res) => {
  try {
    const {genreID} = req.params;
    const genresList = await db.Genres.findOne({
      where: {
        genre_id: `${genreID}`
      }
    });
    res.json({data: genresList});
  } catch (err) {
    console.error(err);
    res.send('Server error2');
  }
});

router.route('/genres').post(async (req, res) => {
  const genreID = await db.Genres.findAll();
  const current = (await genreID.length) + 1;
  try {
    const newGenre = await db.Genres.create({
      genre_id: current,
      genre: req.body.genre,
      description: req.body.description

    });
    res.send('Genre Found and added');
  } catch (err) {
    console.log(err);
    console.log(current);
    res.send(err);
  }
});

router.route('/genres').put(async (req, res) => {
  try {
    await db.Genres.update(
      {
        genre : req.body.genre,
        description: req.body.description
      },
      {
        where: {
          genre_id: req.body.genre_id
        }
      }
    );
    res.send('Genre Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Genre not found');
  }
});
router.route('/genres/:genre_id').delete(async (req, res) => {
  try {
    await db.ratings.destroy({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});
export default router;