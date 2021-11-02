/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

router.route('/genre')
  .get(async (req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /genres with GET'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .post((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /genres with POST'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .delete((req, res) => {
      try {
        console.log();
        res.json({message: 'Touched the /genres with DELETE'});
      } catch (error) {
        console.log(error);
        res.json({message: 'Something went wrong'});
      }
    });
  .put((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /genres with PUT'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });



  router.route('/award')
  .get(async (req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /oscars with GET'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .post((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /oscars with POST'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .delete((req, res) => {
      try {
        console.log();
        res.json({message: 'Touched the /oscars with DELETE'});
      } catch (error) {
        console.log(error);
        res.json({message: 'Something went wrong'});
      }
    });
  .put((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /oscars with PUT'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  

router.route('/director')
  .get(async (req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /director with GET'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .post((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /director with POST'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .delete((req, res) => {
      try {
        console.log();
        res.json({message: 'Touched the /director with DELETE'});
      } catch (error) {
        console.log(error);
        res.json({message: 'Something went wrong'});
      }
    });
  .put((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /director with PUT'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });


  router.route('/film')
  .get(async (req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /film with GET'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .post((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /film with POST'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });
  .delete((req, res) => {
      try {
        console.log();
        res.json({message: 'Touched the /film with DELETE'});
      } catch (error) {
        console.log(error);
        res.json({message: 'Something went wrong'});
      }
    });
  .put((req, res) => {
    try {
      console.log();
      res.json({message: 'Touched the /film with PUT'});
    } catch (error) {
      console.log(error);
      res.json({message: 'Something went wrong'});
    }
  });


