// Script by Elaine Tse

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const diningHallQuery = 'SELECT * FROM dining_hall';

const router = express.Router();

// update dining hall
router.put('/update', async (req, res) => {
  const updateQuery = `UPDATE dining_hall 
    SET hall_name ='${req.query.new_dining_hall}
    WHERE hall_id ='${req.query.hall_id};
    `;

  try {
    const result = await db.sequelizeDB.query(updateQuery, {
      type: sequelize.QueryTypes.UPDATE
    });

    res.json(`Updated row entry with new value: ${req.query.new_dining_hall}`);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});


// post new dining hall entry in dining
router.post('/diningpost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO dining_hall (hall_id, hall_name, hall_address, hall_lat, hall_long)
    VALUES (${req.body.hall_id}, '${req.body.hall_name}', '${req.body.hall_address}', ${req.body.hall_lat}, ${req.body.hall_long})`);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// delete dining hall entry in dining
// router.delete()



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

export default router;