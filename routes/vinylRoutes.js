import express, { application } from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getVinylInfo from './controllers/getVinylInfo.js';

const router = express.Router()

router.route('/vinyl')
    .get(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(getVinylInfo, {
                type: sequelize.QueryTypes.SELECT
            });
            console.log('touched vinyl with GET');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async(req, res) => {
        try {
            const deleteQuery = `DELETE FROM vinyl WHERE vinyl_id = ${req.body.vinyl_id};`
            const result = await db.sequelizeDB.query(deleteQuery, {
                type: sequelize.QueryTypes.DELETE
            });
            console.log('touched vinyl with DELETE');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .post(async(req, res) => {
        try {
            const insertQuery = `INSERT INTO vinyl (vinyl_id, singer_id, album_name, genre, track_amount, producer_id, runtime, first_available, weight, is_explicit)
                SELECT MAX(vinyl_id) + 1,${req.body.singer_id},'${req.body.album_name}','${req.body.genre}',${req.body.track_amount},${req.body.producer_id},'${req.body.runtime}',STR_TO_DATE('${req.body.first_available}','%m-%d-%Y'),${req.body.weight},${req.body.is_explicit} FROM vinyl;`
            const result = await db.sequelizeDB.query(insertQuery, {
                type: sequelize.QueryTypes.POST
            });
            console.log('touched vinyl with POST');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
    .put(async(req, res) => {
        try {
            const updateQuery = `UPDATE vinyl
            SET singer_id=${req.body.singer_id}, album_name='${req.body.album_name}', genre='${req.body.genre}', track_amount=${req.body.track_amount}, producer_id=${req.body.producer_id}, runtime='${req.body.runtime}', first_available=STR_TO_DATE('${req.body.first_available}','%m-%d-%Y'),weight=${req.body.weight}, is_explicit=${req.body.is_explicit}
            WHERE vinyl_id=${req.body.vinyl_id};
            `
            const result = await db.sequelizeDB.query(updateQuery, { type: sequelize.QueryTypes.PUT });
            console.log('touched vinyl with PUT');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    });

export default router;