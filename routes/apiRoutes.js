/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import smithsonian from './smithsonian.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Fresh4 Final Project Smithsonian API!');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.route('/smithsonian/owenK')
  .get(async (req, res) => {
    try {
      const url = 'https://api.si.edu/openaccess/api/v1.0/stats?api_key=bDy3ONUljbeF9nhGIgWGL3G0EMCOcOgLgPGqXpDq';
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      res.json({data: json});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put Smitsonain endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post Smithsonain endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete Smithsonain endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });
router.use('/smithsonian', smithsonian);

export default router;
