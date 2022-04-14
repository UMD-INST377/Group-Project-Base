import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/label').get(async (req, res) => {
  try {
    const art = await db.label.findAll();
    res.json({data: []]});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

router.get('/label/:label_id', async (req, res) => {
  try {
    const art = await db.label.findAll({
      where: {
        label_id: req.params.label_id
      }
    });
    res.json({data: []]});
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});
export default router;