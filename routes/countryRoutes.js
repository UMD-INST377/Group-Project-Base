import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/country').get(async (req, res) => {
  try {
    const countryId = await db.country.findOne();
    const reply = countryId.length > 0 ? {data: countryId} : {message: 'No Result'};
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Did not get here');
  }
});
router.route('/country/:country_id').get(async(req, res) => {
  try {
    const countryId = await db.country.findAll({
      where: {
        country_id: req.params.country_id
      }

    });
    res.json(countryId);
  } catch (err) {
    console.error(err);
    res.send('Did not get here');
  }
});

export default router;