/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

import animalLifeStyle from '../server/controllers/yilingController.js';

const router = express.Router();

// //////////////////////
// ////////Animals Database - LifeStyle - Yiling Du // 
// ////////////////////////

router.route('/lifestyle')  
  .get(async (req, res) => {
    try { 
      const lifestyle = await db.LifeStyle.findAll();
      const reply = lifestyle.length > 0 ? { data: lifestyle} : { message: 'no results found' };
      console.log('touched /lifestyle with GET');
      res.json(reply);
    } catch (error) {
      console.log(error);
      res.send('Something went wrong on the server');
    }
  })
  .put(async (req, res) => {
    try { 
      await db.LifeStyle.update(
        {
          domestication: req.body.domestication,
          diet: req.body.diet
        },
        {
          where: {
            lifestyle_id: req.body.lifestyle_id
          }
        }
      );
      console.log('touched /lifestyle with PUT');
      res.send('Successfully Updated');
    } catch (error) {
      console.log(error);
      res.send('Something went wrong on the server');
    }
  })
  .post(async (req, res) => {
    const lifestyle = await db.LifeStyle.findAll();
    const currentId = (await lifestyle.length) + 1;
    try { 
      const newLifeStyle = await db.LifeStyle.create({
        lifestyle-id: currentId,
        pack: req.body.pack,
        domestication: req.body.domestication,
        diet: req.body.diet
      });
      console.log('touched /lifestyle with POST');
      res.json(newLifeStyle)
    } catch (error) {
      console.log(error);
      res.send('Something went wrong on the server');
    }
  })
  .delete(async (req, res) => {
    try { 
      await db.LifeStyle.destory({
        where: {
          lifestyle_id: req.params.lifestyle_id
        }
      });
      console.log('touched /lifestyle with DELETE');
      res.sned('Successfully Deleted');
    } catch (error) {
      console.log(error);
      res.send('Something went wrong on the server');
    }
  })

export default router;


/* code for lab 9, I updated in lab 10, comment out and keep it, just in case:

router.route('/lifestyle')  
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

*/
