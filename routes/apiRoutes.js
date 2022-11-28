/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import foodService from './foodService.js';
import litterService from './litterService.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to our final project');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/foodService', foodService);
router.use('/litterService', litterService);
export default router;
