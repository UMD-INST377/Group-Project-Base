/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import fetch from 'node-fetch';

import PgSpendingRoutes from './PgSpendingRoutes.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

console.log("hi from apiroutes")

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/foodService', spending);

export default router;
