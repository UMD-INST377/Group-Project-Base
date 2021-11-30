/* eslint-disable no-console */

import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import price from '../server/controllers/price.js';

const router = express.Router();
/// /// price Endpoints ///////
router.route('/price')
  .get(async(req, res) => {
    try {
      const retrievePrice = await db.sequelizeDB.query(
        price.get
      );
      res.json(retrievePrice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post(async(req, res) => {
    try {
      const newPrice = await db.sequelizeDB.query(
        price.post
      );
      res.json(newPrice);
    }
    // const newPrice = await db.price.findAll();
    // const currentId = (await newPrice.length) + 1;
    // try {
    //   const nnewprice = await db.price.create({
    //     price_id: currentId,
    //     price_description: req.body.price_description,
    //     listed_price: req.body.listed_price
    //   });
    //   res.json(nnewprice);
    // } 
    catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      //
      const updatePrice = await db.sequelizeDB.query(
        price.put
      );
      res.send(updatePrice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  // .post(async(req, res) => {
  //   const price1 = await db.price.findAll();
  //   const currentId = (await price1.length) + 1;
  //   let explicitValue = true;
  //   if (req.body.explicitInput) {
  //     explicitValue = true;
  //   } else {
  //     explicitValue = false;
  //   }
  //   try {
  //     const newprice = await db.price.create({
  //       price_id: currentId,
  //       price_description: req.body.price_description,
  //       listed_price: req.body.listed_price,
  //       explicit: explicitValue
  //     });
  //   }
  //   catch (err) {
  //     console.log(err);
  //     res.json({error: 'Server error'});
  //   }
  // })
  .delete(async(req, res) => {
    try {
      const removePrice = await db.sequelizeDB.query(
        price.remove
      );
      res.send(removePrice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });

export default router;
