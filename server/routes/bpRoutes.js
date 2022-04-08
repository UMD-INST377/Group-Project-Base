//Script by Bryan Pham 

import express from "express";
import db from '../database/initializeDB.js';
import sequelize from 'sequelize';

const selectDatabase = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`';
const foodQuery = `SELECT * FROM meals m`;

const router = express.Router();

// get food
router.get('/', async (req, res) => {
  
  try {
       
      const result = await db.sequelizeDB.query(foodQuery, {

        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
      //res.json({message: "The database has received your food request!"})
  } catch(e){
      console.log('The following error has occured ' + e );
      res.send('Result could not be furfilled because of ' + e);
  } 
})


//get food with specific id
router.get('/:food_id', async (req, res) => {

    const foodQuery2 = `SELECT * FROM meals m WHERE meal_id = `+  req.params.food_id;

    try {
        const result = await db.sequelizeDB.query(foodQuery2, {  
          type: sequelize.QueryTypes.SELECT
        });
        res.json(result);

        //res.json({message: "The database has received your food request!"})
    } catch(e){
        console.log('The following error has occured ' + e );
        res.send('Result could not be furfilled because of ' + e);
    } 
  })


export default router;