import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import macrosQuery from '../controller/macros_query.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(macrosQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log(error);
      res.json({message: 'server error'});
    }
  });
router.get('/macros/:meal_id', async (req, res) => {
  try {
    const meals = await db.macros.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.post('/macros', async (req, res) => {
  try {
    console.dir((req.body), {depth: null});
    console.log(req.body?.macros);
    const macrosType = (req.body?.macros) || 0;
    const result = await db.sequelizeDB.query(macrosQuery, {
      replacements: { macros_type: macrosType },
      type: sequelize.QueryTypes.SELECT
    });
    res.json({data: result});
  } catch (error) {
    console.log(error);
    res.send({message: 'server error'});
  }
});
router.put('/macros', async (req, res) => {
  try {
    await db.macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (error) {
    console.error(error);
    res.error('Server error');
  }
});
router.delete('/macros', async (req, res) => {
  try {
    await db.macros.destroy({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.send('Successfully Deleted');
  } catch (error) {
    console.error(error);
    res.error('Server error');
  }
});

export default router;