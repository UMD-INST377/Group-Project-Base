import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import date from '../controllers/date.js';

/* eslint-disable no-console */

const router = express.Router();

/* Date Endpoint */

router.get('/date', async (req, res) => {
    try {
      console.log('touched /date with GET');
      const result = await db.sequelizeDB.query(date.getActor, {
        type: sequelize.QueryTypes.SELECT
      })
      res.json(result);
    } catch (err) {
      console.log(err);
    }      
  })

  // .put(async (req, res) => {
  //   try {
  //     console.log('touched /date with PUT');
  //     res.json( {message: 'PUT endpoint'} );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })
  // .post(async (req, res) => {
  //   try {
  //     console.log('touched /date with POST');
  //     res.json({ message: 'POST endpoint'} );
  //   } catch (err) {
  //       console.log(err);
  //   }
  // })
  // .delete (async (req, res) => {
  //   try {
  //     console.log('touched /date with DELETE');
  //     res.json({ message: 'DELETE endpoint' });
  //   } catch(err) {
  //       console.log(err);
  //   }
  // });

  router.get('/', (req, res) => {
    res.json('You have touched the date endpoint');
  });
  
  export default router;