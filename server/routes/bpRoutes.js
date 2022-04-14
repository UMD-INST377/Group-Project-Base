//Script by Bryan Pham 

import express from "express";
import db from '../database/initializeDB.js';
import sequelize from 'sequelize';

 

const router = express.Router();

// get all foods
router.get('/', async (req, res) => {

  const foodQuery = 
      `SELECT m.meal_name, dh.hall_name, dh.hall_address, dh.hall_lat, dh.hall_long  
            FROM meals_locations ml 
            INNER JOIN 
                meals m ON ml.meal_id = m.meal_id 
            INNER JOIN 
                dining_hall dh ON dh.hall_id = ml.hall_id
            ORDER BY dh.hall_id;
        `;
  
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

// search for specific food
router.get('/search', async (req, res) => {

  const foodQuerySpecific =
      `SELECT m.meal_name, dh.hall_name, dh.hall_address, dh.hall_lat, dh.hall_long  
          FROM 
              meals_locations ml 
          INNER JOIN 
              meals m ON ml.meal_id = m.meal_id 
          INNER JOIN 
              dining_hall dh ON dh.hall_id = ml.hall_id
          WHERE 
              m.meal_name LIKE '%${req.query['food']}' 
              OR m.meal_name LIKE "${req.query['food']}%"
              OR m.meal_name LIKE "%${req.query['food']}%" 
          ORDER BY 
              dh.hall_id;`;
  try {
       
      const result = await db.sequelizeDB.query(foodQuerySpecific, {
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

    const foodQueryId = `SELECT * FROM meals m WHERE meal_id = `+  req.params.food_id;

    try {
        const result = await db.sequelizeDB.query(foodQueryId, {  
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