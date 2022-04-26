import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const descriptionQuery = 'SELECT * FROM descriptions'
const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
    const description = await db.sequelizeDB.query(descriptionQuery, {
        type: sequelize.QueryTypes.SELECT
        });
        res.json(description);
    } catch (err) {
        console.error(err);
        res.json({message: 'Server error'});
    }
});


router.get('/:description_id', async (req, res) => {
    // eslint-disable-next-line no-template-curly-in-string
    const descriptionIDQuery = `SELECT * FROM descriptions WHERE description_id = ${req.params.description_id}`;
    try {
      const description = await db.sequelizeDB.query(descriptionIDQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(description);
    } catch (err) {
      console.error(err);
      res.json({message: 'Server error'});
    }
  });  
      
      router.put('/food_type', async (req, res) => {
        try {
          await db.food_type.update(
            {
              meal_name: req.body.meal_name,
              meal_category: req.body.meal_category
            },
            {
              where: {
                type_id: req.body.type_id
              }
            }
          );
          res.send('Meal Successfully Updated');
        } catch (err) {
          console.error(err);
          res.error('Server error');
        }
      });