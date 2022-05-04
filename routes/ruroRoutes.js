import express from 'express';
import sequilize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import ruroRoutes from './ruroRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Touched ruroRoutes')
  res.json({message:'Welcome to the Group 18 API!'});
});



