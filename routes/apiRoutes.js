/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You\'ve touched the default route!');
});

router.put('/put', (req, res) => {
  res.send('hello from put')
  console.log('something cool happens here later')
});

router.post('/', (req, res) => {
  
});

router.delete('/', (req, res) => {
  
});

router.route('/stuff')
  .get((req, res) => {
    try {
      console.log('stuff default route reached')
      res.json({id: 123})
    }
    catch (err) {
      console.log(error)
    }
  })
  .put((req,res) => {
    try {
      console.log('put from stuff')
    }
    catch (error) {
      console.log(error)
    }
  })
  .delete((req, res) => {
    try {
      console.log('delete from stuff')
    }
    catch (error) {
      console.log(error)
    }
  })
  .post((req, res) => {
    try {
      console.log('post from stuff')
    }
    catch (error) {
      console.log(error)
    }
  })

export default router;
