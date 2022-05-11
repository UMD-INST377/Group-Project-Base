import express from 'express';
import sequelize, { QueryTypes } from 'sequelize';

import db from '../database/initializeDB.js';

import dietaryRestrictionsQuery from '../controller/dietaryrestrictions_query.js';

const router = express.Router();

// vez/restrictions
router.route('/restrictions')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(dietaryRestrictionsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (error) {
      console.log('error', error);
    }
  });

// vez/restriction?restriction_id=
router.get('/restriction', async (req, res) => {
  try {
    const results = await db.sequelizeDB.query(`SELECT * FROM dietary_restrictions WHERE restriction_id = ${req.body.restriction_id}`);
    res.json({ data: results[0]});
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

router.get('/mealsinfo', async (req, res) => {
  try {
    /*const results = await db.sequelizeDB.query(`SELECT meal_id, meal_name, restriction_type, meal_category, restriction_id FROM meals INNER JOIN meal_restrictions on(meal_id) left join dietary_restrictions using(restriction_id)`);
    const results = await db.sequelizeDB.query(`SELECT meal_name, restriction_type, calories FROM meal_restriction_names INNER JOIN macros on(meal_id)`);
    const results = await db.sequelizeDB.query(`SELECT distinct hall_name, restriction_type, meal_name, calories from meals inner join macros using(meal_id)  left join meal_restrictions  on(meal_id) left join dietary_restrictions using (restriction_id) left join dining_hall on(hall_id)`);*/
    const results = await db.sequelizeDB.query(`SELECT distinct hall_name, restriction_id, restriction_type, meal_name, calories from meals inner join macros using(meal_id)  left join meal_restrict  on meal_id = meal_restrict.mealID left join dietary_restrictions using (restriction_id) left join dining_hall on(hall_id)`);
    res.json({ data: results[0]});
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});


// vez/nonrestriction?restriction_id=
router.post('/nonrestriction', async (req, res) => {
    try{
      //const results = await db.sequelizeDB.query(`SELECT * FROM dietary_restrictions WHERE restriction_type != ${req.body.restriction_type}`)
      const results = await db.sequelizeDB.query(`SELECT * FROM dietary_restrictions `);
      const results2 = await results[0];
      const primaryKey = results2[results2.length - 1]['restriction_id'] + 1;
      const restrictionPost = await db.sequelizeDB.query(`INSERT INTO dietary_restrictions VALUES (${primaryKey}, ${req.body.restriction_type})`, 
      {
        type: QueryTypes.INSERT
      });
      res.send("Successfully Posted")
    } catch (err){
      console.log(err);
      res.send({ message: err});
    }
  })
  

// vez/mealChange?meal_name= &meal_category= &meal_id=
  router.put('/mealChange', async (req, res) => {
    try{
      const results = await db.sequelizeDB.query(`UPDATE  meals SET meal_name = '${req.body.meal_name}', meal_category = '${req.body.meal_category}' WHERE meal_id = ${req.body.meal_id}`);
      res.json({ data: results[0]});
    } catch (err){
      console.log(err);
      res.send({ message: err});
    }
  })

export default router;