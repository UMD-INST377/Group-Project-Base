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
  .put(async(req, res) => {
    try {
      const newPrice = await db.sequelizeDB.query(
        price.put
      );
      res.json(newPrice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
  .post(async(req, res) => {
    try {
      // S
      const updatePrice = await db.sequelizeDB.query(
        price.post
      );
      res.send(updatePrice);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error'});
    }
  })
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

// router
//   .route('/price')
//   .get(async (req, res) => {
//     try {
//       const retrievePrice = await db.sequelizeDB.query(price.get, {
//         type: sequelize.QueryTypes.SELECT,
//       });
//       console.log('Touched the route!');
//       res.json(retrievePrice);
//     } catch (err) {
//       res.json({ error: 'something went wrong' });
//     }
//   })
//   .put(async (req, res) => {
//     try {
//       const newPrice = await db.sequelizeDB.query(price.put,{
//         replcements:{
//           price_id: req.body.price_id,
//           price_website : req.body.price_website,
//           listed_price : req.body.listed_price
//         },
//         type: sequelize.QueryTypes.UPDATE
//       });
//       res.json(newPrice);
//       console.log('Update successfully')
//     } catch (err) {
//       res.json({ error: 'something went wrong' });
//     }
//   })
//   .post(async (req, res) => {
//     try {
//       const updatePrice = await db.sequelizeDB.query(price.post,{
//         replcements:{
//           price_website : req.body.price_website,
//           listed_price : req.body.listed_price
//         },
//         type: sequelize.QueryTypes.INSERT
//       });
//       res.json(updatePrice);
//       console.log('INSERT successfully')
//     } catch (err) {
//       res.json({ error: 'something went wrong' });
//     }
//   })
//   .delete(async (req, res) => {
//     try {
//       const removePrice = await db.sequelizeDB.query(price.remove,{
//         replcements:{
//           price_id: req.body.price_id
//         },
//         type: sequelize.QueryTypes.DELETE
//       });
//       res.json(removePrice);
//       console.log('DELETE successfully')
//     } catch (err) {
//       res.json({ error: 'something went wrong' });
//     }
//   });
export default router;
