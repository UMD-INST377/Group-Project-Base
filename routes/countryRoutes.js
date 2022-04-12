/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();
// eslint-disable-next-line no-shadow

router.get('/country/:countryId', async (req, res) => {
  try {
    const {countryId} = req.params;
    const countrylist = await db.artists.findOne({where: {country_id: `${countryId}`}});
    res.json({data: countrylist});
  } catch (error) {
    console.error(error);
    res.send("Something went wrong on /movies end or the country_id isn't valid");
  }
});

export default router;