/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to Agya's portion of Group 20's project API!");
});

router.get('/roles', async (req, res) => {
    try {
        const roles = await db.roles.findAll();
        res.json({ data: roles });
    } catch (err) {
        console.error(err);
        res.send("Error in '/roles'!");
    }
});

router.get('/roles/:role_id', async (req, res) => {
    try {
        const roles = await db.roles.findAll({
            where: {
                role_id: req.params.role_id
            }
        });
        res.json({ data: roles });
    } catch (err) {
        console.error(err);
        res.error("Error in '/roles' or 'roles_id' is invalid!");
    }
});

export default router;