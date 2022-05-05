// updated ethan apiroutes
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

const addressQuery = 'SELECT * FROM restaurants LEFT JOIN address using (restaurant_id)';

router.route('/address').get(async (req, res) => {
  try {
    const address = await db.sequelizeDB.query(addressQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});

// get address with id, /api/addressid#
router.get('/:address_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const addressIDQuery = `SELECT * FROM address WHERE address_id = ${req.params.address_id}`;
  try {
    const address = await db.sequelizeDB.query(addressIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});

// post method for address for adding a address
router.post('/addresspost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO address (address_id, 
      address_1, address_2, city, state, zip_code, restaurant_id)
      values(${req.body.address_id}, '${req.body.address_1}', '${req.body.address_2}', '${req.body.city}',
      '${req.body.state}', '${req.body.zip_code}', ${req.body.restaurant_id})`
    );
    res.send('Something was added.');
  } catch (err) {
    console.log(err);
    res.send({message: err})
  }
});

// for updating an entry
router.put('/addressput', async (req, res) => {
  try {
    const put = await db.sequelizeDB.query(`UPDATE address SET = 
    address_1 = '${req.body.address_1}',
    address_2 = '${req.body.address_2}', 
    city = '${req.body.city}', 
    state = '${req.body.state}',
    zip_code = '${req.body.zip_code}', 
    restaurant_id = ${req.body.restaurant_id} WHERE address_id = ${req.body.address_id}`
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Unsuccessful');
  }
});

// for deleting an entry
router.delete('/addressdelete/:address_id', async (req, res) => {
  const {address_id } = req.params
  console.log(address_id);
  const addressIDQuery = `DELETE FROM address WHERE address_id = ${address_id}`;
  try {
    const address = await db.sequelizeDB.query(addressIDQuery, {
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

