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

router.get('/movies/:movie_id', async(req, res) => {
    try {
        const movies=await db.movies.findAll({
            where:{
                movie_id:req.params.movie_id
            }
        });
        res.json({data:movies});
    }
    catch (err){
        cocnsole.error(err);
        res.error("Error has occurred in '/movie' or in '/movie_id'");
    }
});

export default router;
