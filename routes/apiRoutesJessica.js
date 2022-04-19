import express from 'express';
// import { restart } from 'nodemon';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const restaurantQuery = 'SELECT * FROM restaurants';

const router = express.Router();

// /api/restaurant
router.route('/restaurant').get(async (req, res) => {
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
  const restaurantIDQuery = `SELECT * FROM restaurants WHERE restaurant_id = ${req.params.restaurant_id}`;
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

// post method for restaurant
router.post('/restaurantpost', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO restaurants (restaurant_id, 
      restaurant_name, phone_number, price, description, website, cuisine_id, rating_id, description_id)
      values(${req.body.id}, '${req.body.restaurant_name}', '${req.body.phone_number}','${req.body.price}',
      '${req.body.description}', '${req.body.website}', ${req.body.cuisine_id}, ${req.body.rating_id},
      ${req.body.description_id})`
    );
    res.send('Something was added.');
  } catch (err) {
    console.log(err);
    res.send({message: 'Something went wrong on the SQL request.'})
  }
});

// router.put()

export default router;