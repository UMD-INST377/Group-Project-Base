import express from 'express';
// import { restart } from 'nodemon';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const restaurantQuery = 'SELECT * FROM restaurant';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const restaurant = await db.sequelizeDB.query(restaurantQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});

// get restaurant with id, /api/restaurantid#
router.get('/:restaurant_id', async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const restaurantIDQuery = `SELECT * FROM restaurant WHERE restaurant_id = ${req.params.restaurant_id}`;
  try {
    const restaurant = await db.sequelizeDB.query(restaurantIDQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.json({message: 'Server error'});
  }
});

// post method for restaurant for adding a restaurant
router.post('/restaurantpost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO restaurant (restaurant_id, 
      restaurant_info_id, restaurant_name, location_id)
      values(${req.body.restaurant_id}, ${req.body.restaurant_info_id},'${req.body.restaurant_name}', ${req.body.location_id}`
    );
    res.send('Something was added.');
  } catch (err) {
    console.log(err);
    res.send({message: err})
  }
});

// for updating an entry
router.put('/restaurantput', async (req, res) => {
  try {
    const put = await db.sequelizeDB.query(`UPDATE restaurant SET restaurant_info_id = ${restaurant_info_id}, 
    restaurant_name = '${req.body.restaurant_name}', 
    location_id = ${req.body.location_id} WHERE restaurant_id = ${req.body.restaurant_id}`
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.send('Unsuccessful');
  }
});

// for deleting an entry
router.delete('/restaurantdelete/:restaurant_id', async (req, res) => {
  const {restaurant_id } = req.params
  console.log(restaurant_id);
  const restaurantIDQuery = `DELETE FROM restaurant WHERE restaurant_id = ${restaurant_id}`;
  try {
    const restaurant = await db.sequelizeDB.query(restaurantIDQuery, {
      type: sequelize.QueryTypes.DELETE
    });
    res.send('Deleted Successfully');
  } catch (err) {
    console.error(err);
    res.json({message: err});
  }
});

export default router;