/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import label from '../models/label.js';
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/label').get(async (req, res) => {
  try {
    const art = await db.Label.findAll();
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
  const labels = await db.label.findAll();
  const currentId = (await labels.length) + 1;
  try {
    const newLabels = await db.label.create({
      label_id: currentId,
      label_name: req.body.label_name,
    });
    res.json(newLabels);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/label', async (req, res) => {
  try {
    await db.label.update(
      {
        label_name: req.body.label_name,
      },
      {
        where: {
          label_id: req.body.label_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/label/:label_id', async (req, res) => {
  try {
    await db.label.destroy({
      where: {
        label_id: req.params.label_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;