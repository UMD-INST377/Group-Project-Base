/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

// import loadFoodServiceData from './crime.js';
import loadFoodServiceData from './crimeData.js';
const router = express.Router();
router.use(loadFoodServiceData);

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/crimeData', loadFoodServiceData);

export default router;
