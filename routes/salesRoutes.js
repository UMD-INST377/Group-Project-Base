/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/// ////Price Endpoints////////
router.get('/sales', async (req, res) => {
    try {
      console.log("Touched /sales with GET");
      const gameSales = await db.sales.findAll();
      res.json(gameSales);
    } catch (err) {
      console.error(err);
      res.json({error:'There was an error on the server'});
    }
});
  
router.get('/sales/:sales_id', async (req, res) => {
    try {
        console.log("Touched /sales with GET");
        const gameSales = await db.sales.findAll({
        where: {
          sales_id: req.params.sales_id
        }
      });

      res.json(gameSales);
    } catch (err) {
      console.error(err);
      res.json({error:'There was an error on the server'});
    }
});

router.post('/sales', async (req, res) => {
    const gameSales = await db.sales.findAll();
    const currentId = (await gameSales.length) + 1;
    try {
        console.log("Touched /sales with POST");
      const newSales = await db.sales.create({
        sales_id: currentId,
        sales_game_id: req.body.sales_game_id,
        annual_sales: req.body.annual_sales,
        earnings: req.body.earnings,
        budget: req.body.budget
      });
      res.json(newSales);
    } catch (err) {
      console.error(err);
      res.json({error:'There was an error on the server'});
    }
  });

router.delete('/sales/:sales_id', async (req, res) => {
    try {
      console.log("Touched /sales with DELETE");
      await db.sales.destroy({
        where: {
          sales_id: req.params.sales_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.json({error:'There was an error on the server'});
    }
});

router.put('/sales', async (req, res) => {
    try {
        console.log("Touched /sales with PUT");
        await db.sales.update(
        {
          sales_game_id: req.body.sales_game_id,
          annual_sales: req.body.annual_sales,
          earnings: req.body.earnings,
          budget: req.body.budget
        },
        {
          where: {
            sales_id: req.body.sales_id
          }
        }
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.json({error:'There was an error on the server'});
    }
});