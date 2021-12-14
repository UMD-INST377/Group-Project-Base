import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getMusicalInfo from './controllers/getMusicalInfo.js';

const router = express.Router();

router.route('/musical_info')
    .get(async(req, res) => {
        try {
            const result = await db.sequelizeDB.query(getMusicalInfo, { type: sequelize.QueryTypes.SELECT });
            console.log('touched musical_info with GET');
            res.json(result);
        } catch (err) {
            console.log(err);
        }
    })
export default router;