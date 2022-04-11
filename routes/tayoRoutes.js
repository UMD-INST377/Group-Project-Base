import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import tayoRoutes from './tayoRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Touched tayoRoutes')
  res.json({message:'Welcome to the Group 18 API!'});
});


router.route('/genre')
.get(async (req, res) => {
    try {
        const genreList = await db.genre.findAll()
        res.json({data: genreList});
    } catch (err) {
        console.error(err);
        res.send({message: 'Error!'});
    }
})

router.route('/genre/:id')
.get(async (req, res) => {
    try {
      const {id} = req.params;
      const genreList = await db.genre.findAll()
      res.json({data: genreList[id]});
    } catch (err) {
        console.error(err);
        res.json({message: 'Error!'});
    }
})


export default router;