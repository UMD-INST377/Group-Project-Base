import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
 
const router = express.Router();
 
router.get('/directors', async (req, res) => {
  try {
    const directors = await db.directors.findAll();
    res.json({ data: directors });
  } catch (err) {
    console.error(err);
    res.send("Error in '/directors'!");
  }
});
 
router.get('/directors/:director_id', async (req, res) => {
  try {
    const directors = await db.directors.findAll({
      where: {
        director_id: req.params.director_id
      }
    });
    res.json({ data: directors });
  } catch (err) {
    console.error(err);
    res.error("Error in '/directors' or 'director_id' is invalid!");
  }
});
