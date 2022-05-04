// Script by Elaine Tse

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const diningHallQuery = 'SELECT * FROM dining_hall';

const router = express.Router();

// get dining halls
router.route('/').get(async (req, res) => {
  try {
    const halls = await db.sequelizeDB.query(diningHallQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(halls);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// get dining hall with specific id
router.get('/:hall_id', async (req, res) => {
  const diningHallIDQuery = `SELECT * FROM dining_hall WHERE hall_id = ${req.params.hall_id}`;
  try {
    const halls = await db.sequelizeDB.query(diningHallIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(halls);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// post new dining hall entry in dining
router.post('/post', async (req, res) => {
  // res.json('hi');
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO dining_hall (hall_id, hall_name, hall_address, hall_lat, hall_long)
    VALUES (${req.body.hall_id}, '${req.body.hall_name}', '${req.body.hall_address}', '${req.body.hall_lat}', '${req.body.hall_long}')`);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// update dining hall entry
router.put('/update', async (req, res) => {
  try {
    const put = await db.sequelizeDB.query(`UPDATE dining_hall SET hall_name = '${req.body.hall_name}', hall_address = '${req.body.hall_address}',
    hall_lat = '${req.body.hall_lat}', hall_long = '${req.body.hall_long}' WHERE hall_id = ${req.body.hall_id}`);
    res.json(put);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// delete dining hall entry in dining
router.delete('/delete/:hall_id', async (req, res) => {
  const {hall_id} = req.params
  const diningHallIDQuery = `DELETE FROM dining_hall WHERE hall_id = ${hall_id}`;
  try {
    const halls = await db.sequelizeDB.query(diningHallIDQuery, {
      type: sequelize.QueryTypes.DELETE
    });
    res.json(halls);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

export default router;