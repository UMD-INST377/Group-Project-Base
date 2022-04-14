// script by Krehl Kasayan

import express from "express";
import db from '../database/initializeDB.js';
import sequelize from 'sequelize';
import DiningHall from "../models/DiningHall.js";

const router = express.Router();


//search for restrictions
router.route('/restrictions').get(async (req, res) => {

  try {
    
    const restrictions = await db.sequelizeDB.query(dininghallQuery, {
      type: sequelize.Qu
    })
    
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// search for specific allergen
router.route('/allergen').get(async (req, res) => {
  try {
    //TODO SQL query goes here 
  
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});