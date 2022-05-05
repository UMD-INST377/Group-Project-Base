// updated ethan apiroutes
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

const locationQuery = 'SELECT * FROM restaurant LEFT JOIN location using (location_id)';

router.route('/location').get(async (req, res) => {
  try {
    const location = await db.sequelizeDB.query(locationQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(location);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});
// get location with id, /api/locationid#
router.get('/:location_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const locationIDQuery = `SELECT * FROM location WHERE location_id = ${req.params.location_id}`;
  try {
    const location = await db.sequelizeDB.query(locationIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(location);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});
// post method for location for adding a location
router.post('/locationpost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO location (location_id, 
      location, city, state, zip_code, restaurant_id)
      values(${req.body.location_id}, '${req.body.street_address}', '${req.body.city}',
      '${req.body.state}', '${req.body.zip_code}')`
    );
    res.send('Something was added.');
  } catch (err) {
    console.log(err);
    res.send({message: err})
  }
});
// for updating an entry
router.put('/locationput', async (req, res) => {
  try {
    const put = await db.sequelizeDB.query(`UPDATE location SET = 
    street_address = '${req.body.street_address}', 
    city = '${req.body.city}', 
    state = '${req.body.state}',
    zip_code = '${req.body.zip_code}', 
    WHERE location_id = ${req.body.location_id}`
    );

    res.send('Successfully Updated');
    
  } catch (err) {
    console.error(err);
    res.send('Unsuccessful');
  }
});
// for deleting an entry
router.delete('/locationdelete/:location_id', async (req, res) => {
  const {location_id } = req.params
  console.log(location_id);
  const locationIDQuery = `DELETE FROM location WHERE location_id = ${location_id}`;
  try {
    const location = await db.sequelizeDB.query(locationIDQuery, {
      type: sequelize.QueryTypes.DELETE
    });
    res.send('Deleted Successfully');
  } catch (err) {
    console.error(err);
    res.json({message: err});
  }
});

export default router;
///ENDPOINTS