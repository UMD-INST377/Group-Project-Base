/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();
// eslint-disable-next-line no-shadow
router.get('/', (req, res) => {
  res.send('You touched the country rotues');
  res.json({message: 'Welcome to Country API'});
});
export default router;