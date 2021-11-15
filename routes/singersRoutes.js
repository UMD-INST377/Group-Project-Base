import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getSingers from './controllers/getSingers.js';

const router = express.Router();

/// Jomer Paulino///

router.route('/singers')
    .get(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(getSingers, { type: sequelize.QueryTypes.SELECT });
            console.log('touched singers with GET');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .post(async(req, res) => {
        try {
            const insertQuery = `INSERT INTO singers(singer_id, artist_name)
                           SELECT MAX(singer_id) + 1 , ${req.body.artist_name} FROM singers`;
            const result = await db.sequelizeDB.query(insertQuery, { type: sequelize.QueryTypes.POST });
            console.log('touched singers with POST');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .put(async(req, res) => {
        try {
            const updateQuery = `UPDATE singers
                           SET singer_id = ${req.body.singer_id}, artist_name = ${req.body.artist_name}
                           WHERE singer_id = ${req.body.singer_id}`;
            const result = await db.sequelizeDB.query(updateQuery, { type: sequelize.QueryTypes.PUT });
            console.log('touched singers with PUT');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async(req, res) => {
        try {
            const deleteQuery = `DELETE FROM singers 
                           WHERE singer_id = ${req.body.singer_id};`;
            const result = await db.sequelizeDB.query(deleteQuery, { type: sequelize.QueryTypes.DELETE });
            console.log('touched singers with DELETE');
            res.json(result)
        } catch (err) {
            console.log(err);
        }
    });
export default router;