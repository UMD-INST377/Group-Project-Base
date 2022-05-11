// Script by Devon Milley

import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const foodInfoQuery = 'SELECT * FROM macros';

const router = express.Router();

// delete meal information record in macros
router.delete('/delete', async (req, res) => {
  const deleteQuery = 
       `DELETE FROM macros WHERE meal_id = ${req.query['meal_id']};`;
  try {
      const result = await db.sequelizeDB.query(deleteQuery, {
          type: sequelize.QueryTypes.DELETE
      });

      res.json(`Deleted row entry with meal_id:  ${req.query['meal_id']};`);
    } catch (err) {
      console.error(err);
      res.json({message: 'Error has occured'});
    }
  });

// update the macros database
router.put('/update', async (req, res) => {
  const updateQuery = `UPDATE macros 
    SET calories ='${req.query.new_calories}
    WHERE meal_id ='${req.query.meal_id};
    `;

  try {
    const result = await db.sequelizeDB.query(updateQuery, {
      type: sequelize.QueryTypes.UPDATE
    });

    res.json(`Updated row entry with new value: ${req.query.new_calories}`);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});


// post new meal information entry in macros
router.post('/post', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(`INSERT INTO macros (macro_id, calories, serving_size, cholesterol, sodium, carbs, protein, meal_id, fat)
    VALUES (${req.body.macro_id}, '${req.body.calories}', '${req.body.serving_size}', ${req.body.cholesterol}, ${req.body.sodium}, '${req.body.carbs}', '${req.body.protein}', '${req.body.meal_id}', '${req.body.fat}')`);
  } catch (err) {
    console.error(err);
    res.json({message: 'Error has occured'});
  }
});

// Get food information
router.route('/').get(async (req, res) => {
    try {
      const foodInfo = await db.sequelizeDB.query(foodInfoQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(foodInfo);
    } catch (err) {
      console.error(err);
      res.json({message: 'Error'});
    }
  });

// Get food information with meal_id
router.get('/:meal_id', async (req, res) => {
    const diningHallIDQuery = `SELECT * FROM macros WHERE meal_id =${req.params.meal_id}`;
    try {
      const foodInfo = await db.sequelizeDB.query(foodInfoQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(foodInfo);
    } catch (err) {
      console.error(err);
      res.json({message: 'Error'});
    }
  });

export default router;