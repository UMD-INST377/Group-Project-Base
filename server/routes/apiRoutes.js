/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import PgSpendingRoutes from './PgSpendingRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the PG Spending API!');
});


// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/PgSpending', PgSpendingRoutes);

export default router;
