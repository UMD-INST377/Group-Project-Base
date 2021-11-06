/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import filmMapCustom from '../controllers/filmsController.js';

const router = express.Router();

function getIDByValue(object, value) {
  return object.filter((item) => item.genre === value);
}

function getTableRows(table) {
  return `SELECT * FROM ${table}`;
}

/// /////////////////////////////////
/// ////Films Endpoints////////
/// /////////////////////////////////
router.route('/films')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(filmMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log(res.json(req.body));
      const film = await db.sequelizeDB.query(filmMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      const genre = await db.sequelizeDB.query(getTableRows('genre'), {
        type: sequelize.QueryTypes.SELECT
      });
      // didn't add directors will check back later
      const currentID = (await film.length) + 1;
      const genreName = getIDByValue(genre, req.body.genre);
      const genreId = genreName.map((movGenre) => movGenre.genre_id)[0];
      const createStatement = `INSERT INTO films (film_id, film_title, release_date, genre_id) VALUES (${currentID}, '${req.body.film_title}', '${req.body.release_date}', ${genreId})`;
      const result = await db.sequelizeDB.query(createStatement, {
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /films with POST');
      res.json({message: 'touched /films with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /films with DELETE');
      res.json({message: 'touched /films with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;