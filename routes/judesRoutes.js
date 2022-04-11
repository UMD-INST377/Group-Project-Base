/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the UMD Dining API!');
});

router.get('/genres', async (req, res) => {
    try {
        const genres = await db.genres.findAll();
        res.json({ data: genres });
    } catch (error) {
        console.error(error);
        res.send('Something went wrong.');
    }
});

export default router;
