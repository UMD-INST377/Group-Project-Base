/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the CPs resturant API!');
});

router.route('/resturants')
    .get(async (req, res) => {

    })


///ENDPOINTS
    router.get('/location', async (req, res) => {
        try {
          const location = await db.Location.findAll();
          res.json(locations);
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });
      
      router.get('/locations/:location_id', async (req, res) => {
        try {
          const locations = await db.Locations.findAll({
            where: {
              location_id: req.params.location_id
            }
          });
          res.json(locations);
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });
      
      router.put('/locations', async (req, res) => {
        try {
          await db.Locations.update(
            {
              location_name: req.body.location_name,
              location_category: req.body.location_category
            },
            {
              where: {
                location_id: req.body.location_id
              }
            }
          );
          res.send('Location Successfully Updated');
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });
///ENDPOINTS 
