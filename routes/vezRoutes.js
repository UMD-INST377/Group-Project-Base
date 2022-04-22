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
      console.dir((req.body), {depth:null}); //checking that we have a body at all
      console.log(req.body?.restriction); //optionally checking for the category value on the body object
      const dietary_restrictionsType = (req.body?.restriction) || 0;
      const result = await db.sequalizeDB.query(dietary_restrictionsQuery, {
        replacements: { restriction_type: dietary_restrictionsType },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (err){
      console.log(err);
      res.send({ message: err});
    }
  })

export default router;