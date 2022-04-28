import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import dietary_restrictionsQuery from '../controller/dietaryrestrictions_query.js';

const router = express.Router();

// api/sqlDemo
router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result = await db.sequelizeDB.query(dietary_restrictionsQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (error) {
      console.log('Touched sqlDemo get', error);
      res.json({message: 'error in sqlDemo'});
    }
  })


  .post(async (req, res) => {
    //TODO - Table 'Dining_Hall_Tracker.Meals' doesnt exist
    //TOTO: we need to demonstrate hooking this to a form
    try{
      /*console.dir((req.body), {depth:null}); //checking that we have a body at all
      console.log(req.body?.restriction); //optionally checking for the category value on the body object
      const dietary_restrictionsType = (req.body?.restriction) || 0;
      const result = await db.sequelizeDB.query(dietary_restrictionsQuery, {
        replacements: { restriction_type: dietary_restrictionsType },
        type: sequelize.QueryTypes.SELECT
      });*/
      //const results = await db.sequelizeDB.query(`SELECT * FROM dietary_restrictions WHERE restriction_type != ${req.body.restriction_type}`)
      const results = await db.sequelizeDB.query(`SELECT * FROM dietary_restrictions WHERE restriction_id != ${req.body.restriction_id}`)
      res.json({ data: results[0]});
    } catch (err){
      console.log(err);
      res.send({ message: err});
    }
  })

  router.put('/mealChange', async (req, res) => {
    try{
      /*console.dir((req.body), {depth:null}); //checking that we have a body at all
      console.log(req.body?.restriction); //optionally checking for the category value on the body object
      const dietary_restrictionsType = (req.body?.restriction) || 0;
      const result = await db.sequelizeDB.query(dietary_restrictionsQuery, {
        replacements: { restriction_type: dietary_restrictionsType },
        type: sequelize.QueryTypes.SELECT
      });*/
      const results = await db.sequelizeDB.query(`UPDATE  meals SET meal_name = '${req.body.meal_name}', meal_category = '${req.body.meal_category}' WHERE meal_id = ${req.body.meal_id}`)
      res.json({ data: results[0]});
    } catch (err){
      console.log(err);
      res.send({ message: err});
    }
  })

export default router;