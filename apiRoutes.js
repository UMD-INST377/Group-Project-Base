/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import speedCameras from './speedCameras.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the PG County API!');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/speedCameras', speedCameras);

export default router;
