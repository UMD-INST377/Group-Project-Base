/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import genreMapCustom from '../controllers/genreController.js';

const router = express.Router();

function getGenreByValue(object, value) {
  return object.filter((item) => item.genre === value);
}

function getTableRows(table) {
  return `SELECT * FROM ${table}`;
}
  
/// /////////////////////////////////
/// ////Genre Endpoints////////
/// /////////////////////////////////
router.route('/genre')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(genreMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /genre GET'});
    }
  })

  .put(async (req, res) => {
    try {
      const updateStatement = `UPDATE genre 
      SET genre_id = '${req.body.genre_id}', genre = '${req.body.genre}'
      WHERE genre_id = '${req.body.genre}' `;
      await db.sequelizeDB.query(updateStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.send(`"${req.body.genre}" Successfully Updated`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /genre PUT'});
    }
  })

  .post(async (req, res) => {
    try {
      const genre = await db.sequelizeDB.query(genreMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });

      const currentID = (await genre.length) + 1;
      const createStatement = `INSERT INTO genre (genre_id, genre) 
        VALUES (${currentID}, '${req.body.genre}')`;
      const result = await db.sequelizeDB.query(createStatement, {
        type: sequelize.QueryTypes.INSERT
      });

      res.send(`"${req.body.genre}" Successfully Updated`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /genre POST'});
    }
  })

  .delete(async (req, res) => {
    try {
      const genreStatement = `SELECT * FROM imdb_database.genre WHERE genre = "${req.body.genre}"`;
      const selectedGenre = await db.sequelizeDB.query(genreStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const genreId = selectedGenre.map((genreID) => genreID.genre_id)[0];
      const deleteStatement = `DELETE FROM genre 
      WHERE genreid = "${genreId}"`;
      await db.sequelizeDB.query(deleteStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send(`Successfully Deleted "${req.body.genre}"`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /genre DELETE'});
    }
  });
export default router;