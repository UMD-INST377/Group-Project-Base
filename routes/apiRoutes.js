/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import smithsonian from './smithsonian.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Fresh4 Final Project Smithsonian API!');
});

router.route('/smithsonian')
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

router.use('/smithsonian', smithsonian);

export default router;
