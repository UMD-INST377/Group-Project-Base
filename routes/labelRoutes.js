/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/label').get(async (req, res) => {
  try {
    const art = await db.label.findAll();
    res.json(art);
  } catch (error) {
    console.error(error);
    res.send('Server Error');
  }
});

router.get('/label/:label_id', async (req, res) => {
  try {
    const art = await db.label.findAll({
      where: {
        label_id: req.params.label_id,
      },
    });
    res.json(art);
  } catch (error) {
    console.error(error);
    res.send('Server error');
  }
});

router.post('/label', async (req, res) => {
  try {
    const newlabel = await db.label.create({
      label_id: 14,
      label_name: 'Roc-A-Fella'
    });
    res.json(newlabel);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

router.put('/label', async (req, res) => {
  try {
    const labelUpdate = await db.label.update(
      {
        label_id: req.body.label_id,
        label_name: req.label_name
      },
      {
        where: {
          label_id: req.body.label_id
        }
      }
    );
    res.json('Success. Record Updated');
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
});

router.delete('/label/:label_id', async (req, res) => {
  try {
    const labelDelete = await db.label.destroy({
      where: {
        label_id: req.params.label_id
      }
    });
    res.send('Successfully Deleted');
  } catch (error) {
    console.error(error);
    res.error('Server error');
  }
});

export default router;