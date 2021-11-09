/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

//import { getPlatforms, putPlatforms, postPlatforms, deletePlatforms } from '../server/controllers/platforms.js';
import getPlatforms from '../server/controllers/getPlatforms.js';
////// Platform Endpoints ///////
router.route('/platforms')
    .get(async(req, res) => {
        try {
            const gamePlatforms = await db.sequelizeDB.query(
                getPlatforms, {
                    type: sequelize.QueryTypes.SELECT
                }
            )
            res.send(gamePlatforms);
        } 
        catch (err) {
            console.log(err);
            res.json({error: 'Server error'});
        }
    })
    .put(async(req, res) =>{
        try {
            console.log('touched /platforms with PUT');
            await sequelize.update(
                {
                    PC: req.body.PC,
                    Playstation: req.body.Playstation,
                    Xbox: req.body.Xbox,
                    Switch: req.body.Switch,
                    Mobile: req.body.Mobile
                },
                {
                    where: {
                        platform_id: req.body.platform_id
                    }
                }
            );
            res.send('Successfully updated');
        }
        catch (err) {
            console.log(err);
            res.json({error: 'Server error'});
        }
    })
    .post(async(req, res) =>{
        const gamePlatforms = await db.platforms.findAll();
        const currentId = (await gamePlatforms.length) + 1;
        try {
            console.log('touched /platforms with POST');
            const newGamePlatforms = await db.platforms.create({
                platform_id: currentId,
                PC: req.body.PC,
                Playstation: req.body.Playstation,
                Xbox: req.body.Xbox,
                Switch: req.body.Switch,
                Mobile: req.body.Mobile
            });
            res.send('Successfully posted');
        } 
        catch (err) {
            console.log(err);
            res.json({error: 'Server error'});
        }
    })
    .delete(async(req, res) =>{
        try {
            console.log('touched /platforms with DELETE');
            await db.platforms.destroy({
                where: {
                  platform_id: req.params.platform_id
                }
            });
            res.send('Successfully deleted');
        } 
        catch (err) {
            console.log(err);
            res.json({error: 'Server error'});
        }
    });
export default router