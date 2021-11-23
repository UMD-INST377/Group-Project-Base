import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import actorLinkMapCustom from '../controllers/actors_LinkingController.js';

const expressRouter = express.Router();

function getRowByIdActorLinking(object, value) {
  const rows = object.filter((item) => item.actors_linking_id === value);
  return rows;
}
function getRowByActorId(object, value) {
  const rows = object.filter((item) => item.actor_id == value);
  return rows;
}
function changeActorName(object, value) {
  object.forEach(((item) => item.actor_name = value));
  return object;
}
function updateActorInMovie(object, value) {
  const changeActor = object.actor_id = value;
  return changeActor;
}

// Actors_Linking Endpoints
const actorLinkingMsg = 'touched /actors_linking with ';
const errorMsg = 'Server Error!';

expressRouter.route('/actors_linking')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(actorLinkMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })
// change an actor id in a movie - takes args actors_linking_id and new_actor_id
  .put(async (req, res) => {
    try {
      const UpdateStatement = `Update actors_linking
      Set actor_id = '${req.body.new_actor_id}'
      where actors_linking_id = '${req.body.actors_linking_id}'
      `;
      const result = await db.sequelizeDB.query(UpdateStatement, {
        type: sequelize.QueryTypes.UPDATE
      });
      const allRows = await db.sequelizeDB.query(actorLinkMapCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      // output the new entry
      console.log(getRowByIdActorLinking(allRows, req.body.actors_linking_id));
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })
// change a film id - take args actors_linking_id and new_film_id
  .post(async (req, res) => {
    try {
      const filmStatement = `SELECT * FROM films WHERE film_title = "${req.body.film_title}"`;
      const selectedMovie = await db.sequelizeDB.query(filmStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const filmId = selectedMovie.map((movId) => movId.film_id)[0];
      const linkingStatement = 'SELECT * FROM actors_linking';
      const linkActor = await db.sequelizeDB.query(linkingStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const linkingId = (await linkActor.length) + 25 + 1;
      const actorStatement = `SELECT * FROM actors WHERE actor_name = "${req.body.actor_name}"`;
      const selectedActor = await db.sequelizeDB.query(actorStatement, {
        type: sequelize.QueryTypes.SELECT
      });
      const actorId = selectedActor.map((actor) => actor.actor_id)[0];
      const createStatement = `INSERT INTO actors_linking (actors_linking_id, actor_id, film_id)
        VALUES (${linkingId}, ${actorId}, '${filmId}')
      `;
      const result = await db.sequelizeDB.query(createStatement, {
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

// delete a row based on actors_linking_id arg
  .delete(async (req, res) => {
    try {
      const idToDelete = req.body.actors_linking_id;
      const deleteStatement = `DELETE FROM actors_linking
      WHERE actors_linking_id = ${idToDelete}`;
      res.json({message: `${actorLinkingMsg} DELETE`});
      await db.sequelizeDB.query(deleteStatement, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send('Deleted "${req.body.acrots_linking_id');
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  });

// Awards_Linking Endpoints
const awardsLinkingMsg = 'touched /awards_linking with ';

expressRouter.route('/awards_linking')
  .get(async(req, res) => {
    try {
      console.log(`${awardsLinkingMsg} GET`);
      res.json({message: `${awardsLinkingMsg} GET`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .put(async (req, res) => {
    try {
      console.log(`${awardsLinkingMsg} PUT`);
      res.json({message: `${awardsLinkingMsg} PUT`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .post(async (req, res) => {
    try {
      console.log(`${awardsLinkingMsg} POST`);
      res.json({message: `${awardsLinkingMsg} POST`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log(`${awardsLinkingMsg} DELETE`);
      res.json({message: `${awardsLinkingMsg} DELETE`});
    } catch (error) {
      console.log(error);
      res.json({error: errorMsg});
    }
  });

export default expressRouter;