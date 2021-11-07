/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import directorMapCustom from '../controllers/directorsController.js';

const router = express.Router();

function getDirectoridByValue(object, value) {
  return object.filter((item) => item.director === value);
}

function getTableRows(table) {
  return `SELECT * FROM ${table}`;
}

/// /////////////////////////////////
/// ////Directors Endpoints////////
/// /////////////////////////////////
router.route('/directors')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(directorMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /directors GET '});
    }
  })

  .put(async (req, res) => {
    try {
      console.log(res.json(req.body));
      const director = await db.sequelizeDB.query(directorMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });


      const currentID = (await director.length) + 1;
      const directorName = getDirectoridByValue(director_name, req.body.director_name)
      const directorId = directorName.map((movDirector) => movDirector.director_id)[0];
      const createStatement = `INSERT INTO directors (director_id, director_name) 
        VALUES (${currentID}, ${req.body.director_name}`;  
        const result = await db.sequelizeDB.query(createStatement, {
          type: sequelize.QueryTypes.INSERT
        });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /directors PUT'});
    }
  })


  .post(async (req, res) => {
    try {
      console.log('touched /director with POST');
      res.json({message: 'touched /director with POST'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /directors POST'});
    }
  })




  .delete(async (req, res) => {
    try {
      const directorStatement = `SELECT * FROM directors WHERE director_name = "${req.body.director_name}"`;
      const selectedDirector = await db.sequelizeDB.query(directorStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const directorId = selectedDirector.map((movId) => movId.director_id)[0];
      const deleteStatement = `DELETE FROM directors 
      WHERE film_id = "${directorId}"`;
      await db.sequelizeDB.query(deleteStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send(`Successfully Deleted "${req.body.director_name}"`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server w/ /directors DELETE'});
    }
  });

export default router;