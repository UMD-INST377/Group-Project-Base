/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import nbaStats from './nbaroute.js';

const router = express.Router();

router.route('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/nbaStats', nbaStats);

export default router;
