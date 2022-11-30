/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import spending from '/PgSpending.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the PG Spending API!');
});

console.log("hi from apiroutes")

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/foodService', spending);

export default router;
