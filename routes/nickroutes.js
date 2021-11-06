/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import awardMapCustom from '../controllers/awardsController.js';

const router = express.Router();

function getIDByValue(object, value) {
  return object.filter((item) => item.genre === value);
}

function getTableRows(table) {
  return `SELECT * FROM ${table}`;
}



/// /////////////////////////////////
/// ////awards Endpoints////////
/// /////////////////////////////////
router.route('/awards')
  .get(async(req, res) => {
    try{
      const result = await db.sequelizeDB.query(awardMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('touched /awards with GET');
      res.json(result);
    }
    catch (error) {
      console.error(error);
      res.send('Something went wrong on /awards at GET');
    }
  })
  .post(async(req, res) => {
    try{
      console.log('touched /awards with POST');
      res.json({message: 'touched /awards with POST'}); 
    }
    catch (error) {
      console.error(error);
      res.send('Something went wrong on /awards at POST');
    }
  })
  .put(async(req, res) => {
    try{
      console.log(res.json(req.body));
      const award = await db.sequelizeDB.query(awardMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
    
      const currentID = (await award.length) + 1;
      const awardTitle = getIDByValue(award_title, req.body.award_title);
      const awardID = awardTitle.map((awardName) => awardName.award_id)[0];
      const createStatement = `INSERT INTO awards (award_id, award_title) VALUES (${currentID}, '${req.body.award_title}', ${awardId})`;
      const result = await db.sequelizeDB.query(createStatement, {
        type: sequelize.QueryTypes.INSERT
      }) }
    catch (error) {
      console.error(error);
      res.send('Something went wrong on /awards at PUT');
    }
  })
  .delete(async(req, res) => {
    try{
      console.log('touched /awards with DELETE');
      res.json({message: 'touched /awards with DELETE'});
    }
    catch (error) {
      console.error(error);
      res.send('Something went wrong on /awards at DELETE');
    }
  });

export default router;