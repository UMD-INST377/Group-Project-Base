/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/reviews', async (req, res) => {
  try {
	var restaurant_id = req.query.restaurant_id;
	const query = 'select * from Reviews r inner join Restaurant f on (r.restaurant_id = f.restaurant_id) where r.restaurant_id = '+restaurant_id;
	const result = await db.sequelizeDB.query(query);
	res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.send("Server error");
  }
});




