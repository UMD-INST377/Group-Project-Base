/* eslint-disable import/no-unresolved */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';
import res from 'express/lib/response';

const router = express.Router();
// eslint-disable-next-line no-shadow
router.get('/', (req, res) => {
  res.send('You touched the artists rotues');
  res.json({message: 'Welcome to Artist API'});
});
export default router;
