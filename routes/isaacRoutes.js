/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();
router.get('/actors', async (req, res) => {
  try {
    const actors = await db.actors.findAll();
    res.json({ data: actors });
  } catch (err) {
    console.error(err);
    res.send("Error in '/actors'!");
  }
});
router.get('/actors/:actor_id', async (req, res) => {
  try {
    const actors = await db.actors.findAll({
      where: {
        actor_id: req.params.actor_id
      }
    });
    res.json({ data: actors });
  } catch (err) {
    console.error(err);
    res.error("Error in '/actors' or 'actor_id' is invalid!");
  }
});

router.post('/actors', async (req, res) => {
  try {
    const actors = await db.sequelizeDB.query(
      `SELECT * FROM actors WHERE last_name LIKE '%${req.body.lastname}%'`
    );
    res.send({ data: actors[0] });
  } catch (error) {
    console.error(error);
    res.send('Server error');
  }
});

router.put('/actors', async (req, res) => {
  try {
    const actors = await db.sequelizeDB.query(
      `SELECT * FROM actors WHERE age_of_person <= ${req.body.age}`
    );
    res.send({ data: actors[0] });
  } catch (error) {
    console.error(error);
    res.send('Server error');
  }
});
// Using GET for required DELETE request so it can be used from HTML 5 forms
router.delete('/actors', async (req, res) => {
  try {
    const actor_id = req.body.actor_id;
    const actors = await db.actors.destroy({
      where: {
        actor_id: actor_id
      }
    });
    res.send(`Successfully deleted records with 'actor_id = ${actor_id}'!`);
  } catch (err) {
    console.error(err);
    res.error("Error in DELETE '/actors' or 'actor_id' is invalid!");
  }
});
export default router;