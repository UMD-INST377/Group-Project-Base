/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to Jude's portion of Group 20's project API!");
});

router.get('/genres', async (req, res) => {
    try {
        const genres = await db.genres.findAll();
        res.json({ data: genres });
    } catch (err) {
        console.error(err);
        res.send("Error in GET '/genres'!");
    }
});

router.get('/genres/:genre_id', async (req, res) => {
    try {
        const genres = await db.genres.findAll({
            where: {
                genre_id: req.params.genre_id
            }
        });
        res.json({ data: genres });
    } catch (err) {
        console.error(err);
        res.error("Error in GET '/genres' or 'genre_id' is invalid!");
    }
});
    }
});

export default router;
