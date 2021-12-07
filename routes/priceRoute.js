/* eslint-disable no-console */

import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import price from '../server/controllers/price.js';

const router = express.Router();
/// /// price Endpoints ///////
router.route('/price')
  // Get infor
  .get(async(req, res) => {
    try {
      const retrievePrice = await db.sequelizeDB.query(
        price.get
      );
      res.json(retrievePrice);
      console.log('Get works')
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  // Update infor
  .put(async(req, res) => {
    try {
      const updatePrice = await db.sequelizeDB.query(
        price.put,{
          replacements: {
            price_id: req.body.price_id,
            price_website: req.body.price_website,
            listed_price: req.body.listed_price
          },
        }
      );
      res.json(updatePrice);
      console.log('Update works')
    }
    catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  // Insert infor
  .post(async(req, res) => {
    try {
      const newPrice = await db.sequelizeDB.query(
        price.post, {
          replacements: {
            price_id: req.body.price_id,
            price_website: req.body.price_website,
            listed_price: req.body.listed_price

          }
        }
      );
      res.send(newPrice);
      console.log('Insert works')
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  // Delete infor
  .delete(async(req, res) => {
    try {
      const removePrice = await db.sequelizeDB.query(
        price.remove, {
          replacements: {
            price_id: req.body.price_id,   
          }
        }
      );
      res.send(removePrice);
      console.log('Delete works')
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });

export default router;
