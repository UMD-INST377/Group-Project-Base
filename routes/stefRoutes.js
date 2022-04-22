/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Movies API!');
});

router.get('/movies', async (req, res) => {
  try {
    const movies = await db.movies.findAll();
    res.json({ data: movies });
  } catch (error) {
    console.error(error);
    res.send('Something went wrong.');
  }
});

router.get('/movies/:movie_id', async (req, res) => {
  try {
    const movies = await db.movies.findAll({
      where: {
        movie_id: req.params.movie_id,
      },
    });
    res.json({ data: movies });
  } catch (err) {
    cocnsole.error(err);
    res.error("Error has occurred in '/movie' or in '/movie_id'");
  }
});

// Get list of genres containing case-insensitive substring
router.post('/movies', async (req, res) => {
  try {
    const movies = await db.sequelizeDB.query(
      `SELECT * FROM movies WHERE movie_name LIKE '%${req.body.movie_name}%'`
    );
    res.send({ data: movies[0] });
  } catch (error) {
    console.error(error);
    res.send("Error in POST '/movies'!");
  }
});

// Get genre with specific integer id
router.put('/movies', async (req, res) => {
  try {
    const movies = await db.sequelizeDB.query(
      `SELECT * FROM movies WHERE movie_id = ${req.body.movie_id}`
    );
    res.send({ data: movies[0] });
  } catch (error) {
    console.error(error);
    res.send("Error in PUT '/movies'!");
  }
});

// Delete genre record with specific integer id
router.delete('/movies', async (req, res) => {
  try {
    const movie_id = req.body.movie_id;
    const movies = await db.movies.destroy({
      where: {
        movie_id: movie_id
      }
    });
    res.send(`Successfully deleted records with 'movie_id = ${movie_id}'!`);
  } catch (err) {
    console.error(err);
    res.error("Error in DELETE '/movies' or 'movie_id' is invalid!");
  }
});

export default router;
