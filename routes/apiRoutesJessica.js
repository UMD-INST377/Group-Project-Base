import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const restaurantQuery = 'SELECT * FROM restaurants';

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

// get restaurant with id
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

export default router;