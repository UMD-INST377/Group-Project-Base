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

export default router;