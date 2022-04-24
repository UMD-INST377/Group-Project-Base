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
        res.error("Error in '/roles' or 'role_id' is invalid!");
    }
});

export default router;

/*  Write Interactive Controllers For Your Route: ```  */
/*  role_id, actor_id, movie_id, role    */
router.post("/roles", async (req, res) => {
    try {
        const roles = await db.sequelizeDB.query(
            `SELECT * FROM roles WHERE role LIKE '%${req.body.role}%'`
        );
        res.send({ data: roles[0] });
    } catch (error) {
        console.error(error);
        res.send("Server error");
    }
});

router.put("/roles", async (req, res) => {
    try {
        const roles = await db.sequelizeDB.query(
            `SELECT * FROM roles WHERE role_id = ${req.body.role_id}`
        );
        res.send({ data: roles[0] });
    } catch (error) {
        console.error(error);
        res.send("Server error");
    }
});

// Delete roles record with specific role id
router.delete('/roles', async (req, res) => {
    try {
        const role_id = req.body.role_id;
        const roles = await db.roles.destroy({
            where: {
                role_id: role_id
            }
        })
        res.send(`Successfully deleted records with 'role_id = ${role_id}'!`);
    } catch (err) {
        console.error(err);
        res.error("Error in DELETE '/roles' or 'role_id' is invalid!");
    }
});