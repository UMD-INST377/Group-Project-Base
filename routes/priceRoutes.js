import express from 'express';


import db from '../database/initializeDB.js';

import price from '../server/controllers/price.js';

const router = express.Router();
router.route('/price')
  .get(async(req, res) => {
    try {
      const retrieveprice = await db.sequelizeDB.query(
        price.get
      );
      res.send(retrieveprice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      const newprice= await db.sequelizeDB.query(
        price.put
      );
      res.send(newprice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post(async(req, res) => {
    try {
      const updateprice = await db.sequelizeDB.query(
        price.post
      );
      res.send(price);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .delete(async(req, res) => {
    try {
      const removeprice = await db.sequelizeDB.query(
        price.remove
      );
      res.send(removeprice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  });
export default router;