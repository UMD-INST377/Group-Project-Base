/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import awardMapCustom from '../controllers/awardsController.js';

const router = express.Router();

function getIDByValue(object, value) {
  return object.filter((item) => item.award_title === value);
}

function getTableRows(table) {
  return `SELECT * FROM ${table}`;
}



/// /////////////////////////////////
/// ////awards Endpoints////////
/// /////////////////////////////////
router.route('/awards')
  .get(async(req, res) => {
    try {
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
  .put(async(req, res) => {
    try {
      const awards = await db.sequelizeDB.query(getTableRows('awards'), {
        type: sequelize.QueryTypes.SELECT
      });
      const awardStatement = `SELECT * FROM awards WHERE award_title = "${req.body.award_title}"`;
      const selectedMovie = await db.sequelizeDB.query(awardStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const awardID = awardTitle.map((awardName) => awardName.award_id)[0];
      const awardNameMap = awardName.map((movAward) => movAward.award_id)[0];
      const updateStatement = `UPDATE awards
        SET award_title = '${req.body.award_title}'
        WHERE award_id = '${awardId}' `;
      await db.sequelizeDB.query(updateStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      res.send(`"${req.body.award_title}" Successfully Updated`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server /awards POST'});
    }
  })
  .post(async(req, res) => {
    try {
      console.log(res.json(req.body));
      const award = await db.sequelizeDB.query(awardMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
    
      const currentID = (await award.length) + 1;
      const awardTitle = getIDByValue(award_title, req.body.award_title);
      
      const createStatement = `INSERT INTO awards (award_id, award_title) VALUES (${currentID})`;
      const result = await db.sequelizeDB.query(createStatement, {
        type: sequelize.QueryTypes.INSERT
      }) }
    catch (error) {
      console.error(error);
      res.send('Something went wrong on /awards at PUT');
    }
  })
  
  .delete(async(req, res) => {
    try {
      const awardStatement = `SELECT * FROM awards WHERE award_title = "${req.body.award_title}"`;
      const selectedMovie = await db.sequelizeDB.query(awardStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const awardId = selectedMovie.map((movId) => movId.award_id)[0];
      const deleteStatement = `DELETE FROM awards
      WHERE award_id = "${awardId}"`;
      await db.sequelizeDB.query(deleteStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send(`Successfully Deleted "${req.body.award_title}"`);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server /awards DELETE'});
    }
  });

export default router;