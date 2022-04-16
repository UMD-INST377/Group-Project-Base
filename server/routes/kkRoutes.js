// script by Krehl Kasayan

import express from "express";
import db from '../database/initializeDB.js';
import sequelize from 'sequelize';
import DiningHall from "../models/DiningHall.js";

const foodRestrictions = 'select * from meal_restrictions;'
const router = express.Router();


//get restrictions
router.route('/').get(async (req, res) => {
  try {
    const restrictions = await db.sequelizeDB.query(dininghallQuery, {
      type: sequelize.QueryTypes.SELECT
    })
    res.json(foodRestrictions);

  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// search for specific allergen
router.route('/restriction').get(async (req, res) => {
  const restrictionQuery = 'SELECT * FROM meal_restrictions WHERE restriction_id =${req.params.restriction)_id};'
  try {
    const restrictions = await db.sequelizeDB.query(restrictionQuery, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

export default router;