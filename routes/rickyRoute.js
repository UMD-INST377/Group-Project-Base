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
export default router;
