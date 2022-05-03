/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

const locationQuery = 'SELECT * FROM locations';

router.route('/').get(async (req, res) => {
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
    const result = await db.sequelizeDB.query(`INSERT INTO locations (location_id, 
      location_name, phone_number, price, description, website, cuisine_id, rating_id, description_id)
      values(${req.body.id}, '${req.body.location_name}', '${req.body.phone_number}', '${req.body.price}',
      '${req.body.description}', '${req.body.website}', ${req.body.cuisine_id}, ${req.body.rating_id},
      ${req.body.description_id})`
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
    const put = await db.sequelizeDB.query(`UPDATE locations SET location_name = '${req.body.location_name}', 
    phone_number = '${req.body.phone_number}', price = '${req.body.price}',
    description = '${req.body.description}', website = '${req.body.website}', cuisine_id = ${req.body.cuisine_id},
    rating_id = ${req.body.rating_id}, description_id = ${req.body.description_id} WHERE location_id = ${req.body.id}`
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
  const locationIDQuery = `DELETE FROM locations WHERE location_id = ${location_id}`;
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
