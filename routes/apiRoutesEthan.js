// updated ethan apiroutes
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

<<<<<<< HEAD
const locationQuery = 'SELECT * FROM restaurant LEFT JOIN location using (location_id)';

router.route('/location').get(async (req, res) => {
=======
const locationQuery = 'SELECT * FROM locations';

router.route('/').get(async (req, res) => {
>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
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
<<<<<<< HEAD
// get location with id, /api/locationid#
router.get('/:location_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const locationIDQuery = `SELECT * FROM location WHERE location_id = ${req.params.location_id}`;
=======

// get location with id, /api/locationid#
router.get('/:location_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const locationIDQuery = `SELECT * FROM locations WHERE location_id = ${req.params.location_id}`;
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


// get location with id, /api/locationid#
router.get('/:location_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const locationIDQuery = `SELECT * FROM locations WHERE location_id = ${req.params.location_id}`;
>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
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
<<<<<<< HEAD
// post method for location for adding a location
router.post('/locationpost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO location (location_id, 
      location, city, state, zip_code, restaurant_id)
      values(${req.body.location_id}, '${req.body.street_address}', '${req.body.city}',
      '${req.body.state}', '${req.body.zip_code}')`
=======

// post method for location for adding a location
router.post('/locationpost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO locations (location_id, 
      location_name, phone_number, price, description, website, cuisine_id, rating_id, description_id)
      values(${req.body.id}, '${req.body.location_name}', '${req.body.phone_number}', '${req.body.price}',
      '${req.body.description}', '${req.body.website}', ${req.body.cuisine_id}, ${req.body.rating_id},
      ${req.body.description_id})`
>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
    );
    res.send('Something was added.');
  } catch (err) {
    console.log(err);
    res.send({message: err})
  }
});
<<<<<<< HEAD
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
    
=======

// for updating an entry
router.put('/locationput', async (req, res) => {
  try {
    const put = await db.sequelizeDB.query(`UPDATE locations SET location_name = '${req.body.location_name}', 
    phone_number = '${req.body.phone_number}', price = '${req.body.price}',
    description = '${req.body.description}', website = '${req.body.website}', cuisine_id = ${req.body.cuisine_id},
    rating_id = ${req.body.rating_id}, description_id = ${req.body.description_id} WHERE location_id = ${req.body.id}`
    );
    res.send('Successfully Updated');
>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
  } catch (err) {
    console.error(err);
    res.send('Unsuccessful');
  }
});
<<<<<<< HEAD
=======

>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
// for deleting an entry
router.delete('/locationdelete/:location_id', async (req, res) => {
  const {location_id } = req.params
  console.log(location_id);
<<<<<<< HEAD
  const locationIDQuery = `DELETE FROM location WHERE location_id = ${location_id}`;
=======
  const locationIDQuery = `DELETE FROM locations WHERE location_id = ${location_id}`;
>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
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
<<<<<<< HEAD
///ENDPOINTS
=======
///ENDPOINTS 
>>>>>>> 1182e4d514b975649e8156c2704a2cf96b9b9b39
