/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the UMD Movies API!');
});

router.get('/movies', async (req, res) => {
    try {
        const movies = await db.movies.findAll();
        res.json({ data: movies });
    } catch (error) {
        console.error(error);
        res.send('Something went wrong.');
    }
});

router.get('/movies/:movies_id', async(req, res) => {
    try {
        const movies=await db.movies.findAll({
            where:{
                movies_id:req.params.movies_id
            }
        });
        res.json({data:movies});
    }
    catch (err){
        cocnsole.error(err);
        res.error("Error has occurred in '/movies' or in '/movies_id'");
    }
});

export default router;
