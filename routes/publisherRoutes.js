/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';
import publisher from '../server/controllers/publisher'

const router = express.Router();

/// ////Publisher Endpoints////////
router.route('/publisher')
  .get(async (req, res) => {
    try {
      const games = await db.publisher.findAll();
      res.json(games);
      console.log('You touched the publisher route!');
      res.json({data: data});
    } catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
    }
  })
  .put(async (req, res) =>{
      try {
          //res.json({message: "put publisher endpoint"});
          await db.publisher.update(
            {
            publisher_name: req.body.publisher_name
        },
        {
            where:{
                publisher_id: req.body.publisher_id
            }
        }
        );
        res.send('Successfully Updated');
      } 
      catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  .post(async (req, res) =>{
    const games = await db.publisher.findAll();
    const currentId = (await games.length) + 1;
    try {
        //res.json({message: "post publisher endpoint"});
        const newPublisher= await db.publisher.create({
          publisher_id: currentId,
          publisher_name: req.body.publisher_name
    }); 
    res.json(games);
  }

    catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  
  
  .delete(async (req, res) =>{
    try {
      await db.platforms.destroy({
        where: {
          publisher_id: req.params.publisher_id;
        }
    });
    res.send('Successfully deleted');
        //res.json({message: "delete publisher endpoint"});
    } 
    catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  ;


