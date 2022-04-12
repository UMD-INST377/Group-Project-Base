/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();
// eslint-disable-next-line no-shadow

router.get('/country/:country_id', async (req, res) => {
  try {
    const {country_id} = req.params;
    const countrylist = await db.artists.findOne({where: {country_id: `${country_id}`}});
    res.json({data: countrylist});
  } catch (error) {
    console.error(error);
    res.send("Something went wrong on /movies end or the country_id isn't valid");
  }
});

export default router;