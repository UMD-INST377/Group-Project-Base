/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

import platforms from '../server/controllers/platforms.js';

////// Platform Endpoints ///////
router.route('/platforms')
    .get((req, res) => {
        try {
            console.log('touched /platforms with GET');
            const gamePlatforms = await db.platforms.findAll();
            res.json(gamePlatforms);
        } 
        catch (err) {
            console.log(err);
            res.json({error: 'Server error'});
        }
    })
    .put((req, res) =>{
        try {
            console.log('touched /platforms with PUT');
            await db.platforms.update(
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
    .post((req, res) =>{
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
    .delete((req, res) =>{
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