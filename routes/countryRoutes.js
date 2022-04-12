/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import db from '../database/initializeDB.js';

const router = express.Router();
// eslint-disable-next-line no-shadow
router.get('/country', async (req, res) => {
  try {
    const countryId = await db.country.findAll();
    const reply = countryId.length > 0 ? { data: countryId } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/country/:country_id', async (req, res) => {
  try {
    const countryId = await db.country.findAll({
      where: {
        country_id: req.params.country_id
      }
    });

    res.json(countryId);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;