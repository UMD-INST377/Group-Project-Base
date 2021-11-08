import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Extinction Endpoints////////
/// /////////////////////////////////
router.get('/extinction', async (req, res) => {
  try {
    const extinction = await db.extinction.findAll();
    const reply = extinction.length > 0 ? { data: extinction } : { message: 'no results found' };
    console.log('touched /extinction with GET');
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/extinction', async (req, res) => {
  const extinction = await db.extinction.findAll();
  const currentId = (await extinction.length) + 1;
  try {
    const newExtinction = await db.extinction.create({
      extinction_id: currentId,
      cause: req.body.cause,
      age_species_went_extinct: req.body.age_species_went_extinct
    });
    res.json(newExtinction);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/extinction', async (req, res) => {
  try {
    await db.extinction.destroy({
      where: {
        extinction_id: req.params.extinction_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/extinction', async (req, res) => {
  try {
    await db.extinction.update(
      {
        cause: req.body.cause,
        age_species_went_extinct: req.body.age_species_went_extinct
      },
      {
        where: {
          extinction_id: req.body.extinction_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
