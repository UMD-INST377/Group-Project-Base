/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

/*const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
}); */

// //////////////////////
// yiling branch: add the animals' lifestyle endpoint
// ////////////////////////

router.route('/lifestyle')  //choose animals' lifestyle table
  .get(async (req, res) => {
    try { 
      const url = //DATALINK;
      const data = await fetch(url);
      console.log('touched /lifestyle with GET');
      res.json({message: 'get lifestyle endpoint'})
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .put(async (req, res) => {
    try { 
      const url = //DATALINK;
      const data = await fetch(url);
      console.log('touched /lifestyle with PUT');
      res.json({message: 'put lifestyle endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post(async (req, res) => {
    try { 
      const url = //DATALINK;
      const data = await fetch(url);
      console.log('touched /lifestyle with POST');
      res.json({message: 'post lifestyle endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete(async (req, res) => {
    try { 
      const url = //DATALINK;
      const data = await fetch(url);
      console.log('touched /lifestyle with DELETE');
      res.json({message: 'delete lifestyle endpoint'});
    } catch (err) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })

export default router;
