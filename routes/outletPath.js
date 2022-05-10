//comment to fix problem
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

import db from '../database/initializeDB.js';

import outletPathQueryAll from '../controllers/outletDisplayQueryAll.js'
import outletPathInsertQuery from '../controllers/outletPathPostQuery.js'
import outletDeleteQuery from '../controllers/outletPathDeleteQuery.js'

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched outletPath get');
      const result = await db.sequelizeDB.query(outletPathQueryAll, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log('Touched outletPath get error', error);
      res.json({message: 'error in outletPath'});
    }
  })

  .post(async (req, res) => {
    try {
      console.dir(req.body, {depth: null});
      console.log(req.body?.outID);
      console.log(req.body?.outName);
      console.log(req.body?.outAddress);
      console.log(req.body?.outCity);
      console.log(req.body?.outState);
      console.log(req.body?.outZip);
      const outID = req.body?.outID || '1';
      const outletName = req.body?.outName || 'example station';
      const outAddress = req.body?.outAdress || '123 example street';
      const outCity = req.body?.outCity || 'College Park';
      const outState = req.body?.outState || 'MD';
      const outZip = req.body?.outZip || '20740';
      const result = await db.sequelizeDB.query(outletPathInsertQuery, {
        replacements: {out_id: outID, out_name: outletName, out_street: outAddress, out_city: outCity, out_state: outState, out_zip: outZip},
        type: sequelize.QueryTypes.INSERT
      });
      res.json({data: result});

    } catch (err) {
      console.log(err);
      res.send({message: err})
    }
  })
  
  .delete(async (req, res) => {
    try {
    console.dir(req.body, {depth: null});
    console.log(req.body?.outID);
    const outID = req.body?.outID || '50'
    const result = await db.sequelizeDB.query(outletDeleteQuery, {
      replacements: {out_id: outID},
      type: sequelize.QueryTypes.DELETE
    });
    res.json({data: result});

  } catch (err) {
    console.log(err);
    res.send({message: err})
  }

  });

export default router;