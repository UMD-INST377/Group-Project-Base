/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import filmMapCustom from '../controllers/filmsController.js';
import customFilm from '../controllers/customFilms.js';

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
      const result = await db.sequelizeDB.query(filmMapCustom.filmGet, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films GET '});
    }
  })

  .put(async (req, res) => {
    // PUT should UPDATE
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
      // const updateStatement = `UPDATE films
      // eslint-disable-next-line max-len
      //   SET film_title = '${req.body.film_title}', release_date = '${req.body.release_date}', genre_id = ${genreId}
      //   WHERE film_id = '${filmId}' `;
      await db.sequelizeDB.query(filmMapCustom.filmPut, {
        replacements: {
          film_title: req.body.film_title,
          release_date: req.body.release_date,
          genreid: genreId,
          filmid: filmId
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.send(`"${req.body.film_title}" Successfully Updated`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films POST'});
    }
  })

  .post(async (req, res) => {
    // POST should CREATE
    try {
      const film = await db.sequelizeDB.query(filmMapCustom.filmGet, {
        type: sequelize.QueryTypes.SELECT
      });
      const genre = await db.sequelizeDB.query(getTableRows('genre'), {
        type: sequelize.QueryTypes.SELECT
      });
      const directors = await db.sequelizeDB.query(getTableRows('directors'), {
        type: sequelize.QueryTypes.SELECT
      });
      const directorID = await (directors.length);
      const currentID = await (film.length) + 1;
      const genreName = getGenreIdByValue(genre, req.body.genre);
      const genreID = genreName.map((movGenre) => movGenre.genre_id)[0];
      await db.sequelizeDB.query(filmMapCustom.filmPost, {
        replacements: {
          currentId: currentID,
          film_title: req.body.film_title,
          releaseDate: req.body.release_date,
          genreId: genreID,
          imdbRating: req.body.rating,
          directorId: directorID
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.send(`Successfully added ${req.body.film_title}`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films PUT'});
    }
  })

  .delete(async (req, res) => {
    try {
      const filmStatement = `SELECT * FROM films WHERE film_title = "${req.body.film_title}"`;
      const selectedMovie = await db.sequelizeDB.query(filmStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const filmId = selectedMovie.map((movId) => movId.film_id)[0];
      // const deleteStatement = `DELETE FROM films
      // WHERE film_id = "${filmId}"`;
      await db.sequelizeDB.query(filmMapCustom.filmDelete, {
        replacements: {
          filmid: filmId
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.send(`Successfully Deleted "${req.body.film_title}"`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /films DELETE'});
    }
  });

router.route('/customMap')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(customFilm.customAwardsFilm, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /customMap GET '});
    }
  })
  .post(async (req, res) => {
    try {
      const filmStatement = `SELECT * FROM films WHERE film_title = "${req.body.film_title}"`;
      const selectedMovie = await db.sequelizeDB.query(filmStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const filmId = selectedMovie.map((movId) => movId.film_id)[0];
      const results = await db.sequelizeDB.query(customFilm.customFilmActor, {
        replacements: {
          filmid: filmId
        },
        type: sequelize.QueryTypes.SELECT
      });
      res.json(results);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /customMap POST '});
    }
  });

export default router;