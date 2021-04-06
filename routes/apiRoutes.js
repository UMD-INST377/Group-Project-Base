/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Group 1 Library API!');
});

/// /////////////////////////////////
/// ////ArtisticMovement Endpoints////////
/// /////////////////////////////////
router.get('/artisticMovement', async (req, res) => {
  try {
    const movement = await db.artisticMovement.findAll();
    const reply = movement.length > 0 ? { data: movement } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artisticMovement/:artistic_movement_id', async (req, res) => {
  try {
    const movement = await db.artisticMovement.findAll({
      where: {
        artistic_movement_id: req.params.artistic_movement_id
      }
    });

    res.json(movement);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artisticMovement', async (req, res) => {
  try {
    const movement = await db.artisticMovement.findAll();
    const reply = movement.length > 0 ? { data: movement } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/artisticMovement/:artistic_movement_id', async (req, res) => {
  try {
    const movement = await db.artisticMovement.findAll({
      where: {
        artistic_movement_id: req.params.artistic_movement_id
      }
    });

    res.json(movement);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


export default router;