/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import foodService from './foodService.js';





const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to our final project');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/foodService', foodService);

export default router;
