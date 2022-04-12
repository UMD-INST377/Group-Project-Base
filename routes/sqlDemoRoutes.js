import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();


router.route('/')
.get(async (req, res) => {
    try {
        console.log('Touched sqlDemo get');
        res.json({data: []})
        
    } catch (error) {
        console.log('Touched sqlDemo get error', error)
        res.json({message: "error in sqlDemo"})
        
    }
})

export default router;