import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import macrosQuery from '../controller/macros_query.js';

const router = express.Router();

router.route('/macros')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result = await db.sequelizeDB.query(macrosQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({ data: result});
    } catch (error) {
      console.log('sqlDemo get error', error);
    }
  });
router.get('/macros/:macro_id', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query('SELECT * FROM macros WHERE macro_id = (:macro_id)', {
      replacements: {macro_id: req.params.macro_id},
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ data: result});
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

router.post('/macros', async (req, res) => {
  const macros = await db.macros.findAll();
  const currentId = (await macros.length) + 1;
  try {
    const newMacro = await db.macros.create({
      macro_id: currentId,
      calories: req.body.calories,
      cholesterol: req.body.cholesterol
    });
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});
router.put('/macros', async (req, res) => {
  try {
    console.log(req.body);
    const parsing = JSON.parse(JSON.stringify(req.body));
    console.log(parsed.meal_id);
    await db.sequelizeDB.query(
      `UPDATE macros SET cholesterol = "${parsing.cholesterol}", calories =  "${parsing.calories}" WHERE macro_id = ${parsing.macro_id}`);
    res.send('Macro Updated');
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});
router.delete('/macros/:macro_id', async (req, res) => {
  try {
    await db.macros.destroy({
      where: {
        macro_id: req.params.macro_id
      }
    });
    res.send('Macro Deleted');
  } catch (error) {
    console.log(error);
    res.json({ message: 'Server error' });
  }
});

export default router;
