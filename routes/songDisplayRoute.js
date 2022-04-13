import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

//router.get('/', (req, res) => {
//    console.log('You touched the Song Display Route.');
//    res.json({message: 'Welcome to the Group 4 Spotify Database.'});
//});

router.route('/')
.get(async (req, res) => {

})
.post((req, res) => {

})
.put((req, res) => {

})
.delete((req, res) => {

});

export default router;