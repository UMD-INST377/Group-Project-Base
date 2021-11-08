import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import actorsMap from '../controllers/actorsController.js';

const expressRouter = express.Router();

/// Actors Endpoints ///
const defaultMsg = 'touched /actors with ';
const errorMsg = 'Server Error with ';

// Get the table
function getTable(tableName) {
  return `SELECT * FROM ${tableName}`;
}

// get the actorId by value
function getActorIdByValue(rows, value) {
  return rows.filter((item) => item.actor_name === value);
}

expressRouter.route('/actors')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(actorsMap, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log(`${defaultMsg} GET`);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} GET`});
    }
  })

  .put(async (req, res) => { // UPDATE ACTOR NAME in the possibility that actor changed their name
    try {
      // will connect this to the films table later
      const actors = await db.sequelizeDB.query(getTable('actors'), {
        type: sequelize.QueryTypes.SELECT
      });
      const actorName = `SELECT * FROM actors WHERE actor_name = "${req.body.actor_name}"`;
      const selectActor = await db.sequelizeDB.query(actorName, {
        type: sequelize.QueryTypes.SELECT
      });
      const actorId = getActorIdByValue(actor_name, req.body.actor_name);
      const update = `UPDATE actors 
        SET actor_name = '${req.body.actor_name}'
        WHERE actor_id = '${actorId}
      `;
      await db.sequelizeDB.query(update, {
        type: sequelize.QueryTypes.UPDATE
      });

      res.send(`"${req.body.actor_name}" has been sucessfully updated!`);
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} PUT`});
    }
  })

  .post(async (req, res) => { // Create a new actor
    try {
      const actor = await db.sequelizeDB.query(actorsMap, {
        type: sequelize.QueryTypes.SELECT
      });

      // create new actor_name and new actor_id
      const newActorId = (await actor.length) + 1;
      const create = `INSERT INTO actors (actor_id, actor_name)
        VALUES (${newActorId}, '${req.body.actor_name}')
      `;
      const result = await db.sequelizeDB.query(create, {
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} POST`});
    }
  })

  .delete(async (req, res) => { // DELETE an actor's name
    try {
      const actorToFind = `SELECT * FROM actors WHERE actor_name = "${req.body.actor_name}"`;
      const selectActor = await db.sequelizeDB.query(actorToFind, {
        type: sequelize.QueryTypes.SELECT
      });
      const actorId = selectActor.map((actorDets) => actorDets.actor_id)[0];
      const deleteActor = `DELETE FROM actors
        WHERE actor_id = "${actorId}"
      `;
      await db.sequelizeDB.query(deleteActor, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send(`"${req.body.actor_name}" was deleted successfully!`)
    } catch (error) {
      console.log(error);
      res.json({error: `${errorMsg} DELETE`});
    }
  });

export default expressRouter;