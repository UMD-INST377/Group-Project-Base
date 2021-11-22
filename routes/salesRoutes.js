/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

import sales from '../server/controllers/sales.js';

const router = express.Router();

/// ////Sales Endpoints////////
router.route('/sales')
  .get(async (req, res) => {
    try {
      console.log('Touched /sales with GET');
      const gameSales = await db.sequelizeDB.query(
        sales.get
      );
      res.send(gameSales);
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log('Touched /sales with PUT');
      const insertSales = await db.sequelizeDB.query(
        sales.insert
      );
      res.send(insertSales);
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log('Touched /sales with POST');
      const updateSales = await db.sequelizeDB.query(
        sales.update
      );
      res.send(updateSales);
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  })

  .delete(async(req, res) => {
    try {
      console.log('Touched /sales with DELETE');
      const deleteSales = await db.sequelizeDB.query(
        sales.remove
      );
      res.send(deleteSales);
    } catch (err) {
      console.error(err);
      res.json({error: 'There was an error on the server'});
    }
  });
export default router;