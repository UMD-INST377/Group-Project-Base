/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You\'ve touched the default route!');
  try {
    console.log('stuff default route reached');
    res.json({id: 123});
  } catch (err) {
    console.log(error);
  }
});

router.put('/put', (req, res) => {
  res.send('hello from put');
  console.log('something cool happens here later');
  try {
    res.send('hello from put');
    console.log('put from stuff');
  } catch (error) {
    console.log(error);
  }
});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

/*
  Testing earlier for postman ignore wink
  router.route('/stuff')
  .get((req, res) => {
    try {
      console.log('stuff default route reached');
      res.json({id: 123});
    } catch (err) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      console.log('put from stuff');
    } catch (error) {
      console.log(error);
      res.send('hello from put')
      console.log('put from stuff')
    }
    catch (error) {
      console.log(error)
    }
  })
  .delete((req, res) => {
    try {
      console.log('delete from stuff');
    } catch (error) {
      console.log(error);
      res.send('hello from delete')
      console.log('delete from stuff')
    }
    catch (error) {
      console.log(error)
    }
  })
  .post((req, res) => {
    try {
      console.log('post from stuff');
    } catch (error) {
      console.log(error);
    }
  });

      console.log('post from stuff')
      res.send('hello from post')
    }
    catch (error) {
      console.log(error)
    }
  })
 */
export default router;
