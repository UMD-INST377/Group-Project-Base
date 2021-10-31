/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You\'ve touched the default route!');
});

router.put('/', (req, res) => {

});

router.post('/', (req, res) => {
  
});

router.delete('/', (req, res) => {
  
});

export default router;
