/* eslint-disable no-console */
import express from 'express';
import path from 'path';

import finServiceRoutes from './finService.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.send('default routes');
});


// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/finServices', finServiceRoutes);

export default router;
