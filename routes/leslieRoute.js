import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import macros_query from '../controller/macros_query.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      const result  = await db.sequelizeDB.query(macros_query, {
          type: sequelize.QueryTypes.SELECT
        });
        res.json({data: result});
    } catch (error) {
        console.log(error);
        res.json({message: 'server error'});
    }
  });

.post(async (req, res) => {
    try {
        console.dir((req.body), {depth:null});
        console.log(req.body?.macros);
        const macrosType = (req.body?.macros) || 0;
        const result = await db.sequalizeDB.query(macros_query, {
            replacements: { macros_type: macrosType },
            type: sequelize.QueryTypes.SELECT
        });
        res.json({data: result});
    } catch (error) {
        console.log(error);
        res.send({message: 'server error'});
    }
});

export default router;