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

router.post('/directors', async (req, res) => {
    try {
      const directors = await db.sequelizeDB.query(
        `SELECT * FROM directors WHERE last_name LIKE '%${req.body.lastname}%'`
      );
      res.send({ data: directors[0] });
    } catch (error) {
      console.error(error);
      res.send('Server error');
    }
  });
   
router.put('/directors', async (req, res) => {
    try {
      const directors = await db.sequelizeDB.query(
        `SELECT * FROM directors WHERE age_of_person <= ${req.body.age}`
      );
      res.send({ data: directors[0] });
    } catch (error) {
      console.error(error);
      res.send('Server error');
    }
  });

router.delete('/directors', async (req, res) => {
    try {
      const director_id = req.body.director_id;
      const directors = await db.directors.destroy({
        where: {
          director_id: director_id
        }
      });
      res.send(`Successfully deleted records with 'director_id = ${director_id}'!`);
    } catch (err) {
      console.error(err);
      res.error("Error in DELETE '/directors' or 'director_id' is invalid!");
    }
  });
  export default router;
  