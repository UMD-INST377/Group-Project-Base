/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();
// eslint-disable-next-line no-shadow
router.get('/', (req, res) => {
  res.send('You touched the artists routes');
  res.json({message: 'Welcome to Artist API'});
});
export default router;
