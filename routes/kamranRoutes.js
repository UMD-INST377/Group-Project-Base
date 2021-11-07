/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import filmMapCustom from '../controllers/filmsController.js';

const router = express.Router();

function getGenreIdByValue(object, value) {
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
      res.json({error: 'Something went wrong on the server w/ /films GET '});
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
      const genreName = getGenreIdByValue(genre, req.body.genre);
      const genreId = genreName.map((movGenre) => movGenre.genre_id)[0];
      const createStatement = `INSERT INTO films (film_id, film_title, release_date, genre_id) 
        VALUES (${currentID}, '${req.body.film_title}', '${req.body.release_date}', ${genreId})`;
      const result = await db.sequelizeDB.query(createStatement, {
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films PUT'});
    }
  })

  .post(async (req, res) => {
    try {
      const genre = await db.sequelizeDB.query(getTableRows('genre'), {
        type: sequelize.QueryTypes.SELECT
      });
      const filmStatement = `SELECT * FROM films WHERE film_title = "${req.body.film_title}"`;
      const selectedMovie = await db.sequelizeDB.query(filmStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const filmId = selectedMovie.map((movId) => movId.film_id)[0];
      const genreName = getGenreIdByValue(genre, req.body.genre);
      const genreId = genreName.map((movGenre) => movGenre.genre_id)[0];
      const updateStatement = `UPDATE films 
        SET film_title = '${req.body.film_title}', release_date = '${req.body.release_date}', genre_id = ${genreId}
        WHERE film_id = '${filmId}' `;
      await db.sequelizeDB.query(updateStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.send(`"${req.body.film_title}" Successfully Updated`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films POST'});
    }
  })

  .delete(async (req, res) => {
    try {
      const filmStatement = `SELECT * FROM films WHERE film_title = "${req.body.film_title}"`;
      const selectedMovie = await db.sequelizeDB.query(filmStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const filmId = selectedMovie.map((movId) => movId.film_id)[0];
      const deleteStatement = `DELETE FROM films 
      WHERE film_id = "${filmId}"`;
      await db.sequelizeDB.query(deleteStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send(`Successfully Deleted "${req.body.film_title}"`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films DELETE'});
    }
  });

export default router;