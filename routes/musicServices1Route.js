/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/musicServices1Route', (req, rest) => {
  console.log('You touched the musicServices route');
  res.send('This is the musicServces API');
});

export default router;
