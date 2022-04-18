/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Hispanic Restaurants API!');
});

/// /////////////////////////////////
/// //////// Area Endpoints////////// by Ryan E
/// /////////////////////////////////

router.get('/area', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(
      'SELECT * FROM Area'
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.get('/area/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.sequelizeDB.query(
      `SELECT * FROM Area WHERE area_id = ${id}`
    );
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send('Server error');
  }
});

router.post('/area', async (req, res) => {
  // const area = await db.Area.findAll();

  try {
    const query = `INSERT INTO Area (area_id, neighborhood, landmarks, description) VALUES (${parseInt(req.body.area_id)}, '${req.body.neighborhood}', '${req.body.landmarks}', '${req.body.description}')`;
    console.log(query);
    const newArea = await db.sequelizeDB.query(query);
    res.send('UPDATED');
  } catch (error) {
    console.error(error);
  }
});

export default router;
