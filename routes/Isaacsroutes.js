/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});
router.get('/randomgenres', async(req, res) => {
    try {
        const randomgenres = await db.genres.findAll();
        //CODE TO PICK X RANDOM GENRES FROM 'genres' array
        
        res.json({data:randomgenres});
    } catch (error){
        console.error(error);
        res.send('Something went wrong.');
    }
  });

  export default router;