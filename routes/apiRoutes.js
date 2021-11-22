/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the West Coast Earthquake API!');
});

/* Magnitude endpoint */
// Get magnitude based on earthquake id
router.route('/magnitude')
  .get(async (req, res) => {
    try {
      const magnitudeData = await db.sequelizeDB.query(magnitude.getMagnitude, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(magnitudeData);
      console.log('touched /magnitude with GET');
    } catch (err) {
      console.log(err);
    }
  })

// Update magnitude data for a specific earthquake id
  .put(async (req, res) => {
    try {
      const magnitudeData = await db.sequelizeDB.query(magnitude.putMagnitude, {
        replacements: {
          magnitude: req.body.magnitude, id: req.body.earthquake_id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(magnitudeData);
      console.log('touched /magnitude with PUT');
    } catch (err) {
      console.log(err);
    }
  })

// Adding a new earthquake data
  .post(async (req, res) => {
    try {
      const magnitudeData = await db.sequelizeDB.query(magnitude.postMagnitude, {
        replacements: {
          magnitude: req.body.magnitude, id: req.body.earthquake_id
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(magnitudeData)
      console.log('touched /magnitude with POST');
    } catch (err) {
      console.log(err);
    }
  })

// Delete a earthquake data
  .delete(async (req, res) => {
    try {
      const magnitudeData = await db.sequelizeDB.query(magnitude.getMagnitude, {
        replacements: {
          id: req.body.earthquake_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(magnitudeData);
      console.log('touched /magnitude with DELETE');
    } catch (err) {
      console.log(err);
    }
  });

/* City Endpoint */
import endpoint1 from '../routes/cityControllers'

router.route('/city')
  .get(async (req, res) => {
    try {
      console.log('touched /city with GET');
      res.json({ message: 'GET endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .put(async (req, res) => {
    try {
      console.log('touched /city with PUT');
      res.json({ message: 'PUT endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /city with POST');
      res.json({ message: 'POST endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /city with DELETE');
      res.json({ message: 'DELETE endpoint' });
    } catch (err) {
      console.log(err);
    }

    router.get('/', (req, res) => {
      res.json('You have touched the city endpoint');
    });
  });

export default router; 

/* Date Endpoint */

router.route('/date')
  .get(async (req, res) => {
    try {
      console.log('touched /date with GET');
      res.json( {message: 'GET endpoint'} );
    } catch (err) {
      console.log(err);
    }      
  })

  .put(async (req, res) => {
    try {
      console.log('touched /date with PUT');
      res.json( {message: 'PUT endpoint'} );
    } catch (err) {
      console.log(err);
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /date with POST');
      res.json({ message: 'POST endpoint'} );
    } catch (err) {
        console.log(err);
    }
  })

  .delete (async (req, res) => {
    try {
      console.log('touched /date with DELETE');
      res.json({ message: 'DELETE endpoint' });
    } catch(err) {
        console.log(err);
    }
  });

  router.get('/', (req, res) => {
    res.json('You have touched the date endpoint');
  });
