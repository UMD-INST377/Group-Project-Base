/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

// API route hello world
router.get('/', (req, res) => {
    res.send("Welcome to Jude's portion of Group 20's project API!");
});

// Get list of all genres
router.get('/genres', async (req, res) => {
    try {
        const genres = await db.genres.findAll();
        res.json({ data: genres });
    } catch (err) {
        console.error(err);
        res.send("Error in GET ' / genres'!");
    }
});

// Get genre with specific integer id
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
        res.error("Error in GET '/genres/:genre_id' or 'genre_id' is invalid!");
    }
});

// Get list of genres containing case-insensitive substring
router.post('/genres', async (req, res) => {
    try {
        const genres = await db.sequelizeDB.query(
            `SELECT * FROM genres WHERE genre LIKE '%${req.body.genre_name}%'`
        );
        res.send({ data: genres[0] });
    } catch (error) {
        console.error(error);
        res.send("Error in POST '/genres'!");
    }
});

// Get genre with specific integer id
router.put('/genres', async (req, res) => {
    try {
        const genres = await db.sequelizeDB.query(
            `SELECT * FROM genres WHERE genre_id = ${req.body.genre_id}`
        );
        res.send({ data: genres[0] });
    } catch (error) {
        console.error(error);
        res.send("Error in PUT '/genres'!");
    }
});

// Delete genre record with specific integer id
router.delete('/genres', async (req, res) => {
    try {
        const genre_id = req.body.genre_id;
        const genres = await db.genres.destroy({
            where: {
                genre_id: genre_id
            }
        })
        res.send(`Successfully deleted records with 'genre_id = ${genre_id}'!`);
    } catch (err) {
        console.error(err);
        res.error("Error in DELETE '/genres' or 'genre_id' is invalid!");
    }
});

export default router;
