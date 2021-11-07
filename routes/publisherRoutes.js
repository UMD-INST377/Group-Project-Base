/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

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
          res.json({message: "put publisher endpoint"});
      } 
      catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  .post(async (req, res) =>{
    try {
        res.json({message: "post publisher endpoint"});
    } 
    catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  .delete(async (req, res) =>{
    try {
        res.json({message: "delete publisher endpoint"});
    } 
    catch (err) {
        console.log(error);
        res.json({error: 'Something went wrong on the server'});
  })
  ;


