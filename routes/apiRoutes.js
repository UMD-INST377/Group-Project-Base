/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import mdCensusData from '../server/controller/mdCensusData.js';
import small_dev_metro_areas from '../server/controller/small_dev_metro_areas.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Housing Database API!');
});

// router.route('/zipcode')
//   .get(async (req, res) => {
//     try {
//       const url = 'https://geodata.md.gov/imap/rest/services/Demographics/MD_CensusData/FeatureServer/1/query?outFields=*&where=1%3D1';
//       const data = await fetch(url);
//       const json = await data.json();
//       console.log(json);

//     res.json({data: data});
//   } catch (err) {
//     console.error(err);
//     res.error({error: error});
//   }
// });
// test

router.route('/mdCensusData')
  .get(async (req, res) => {
    try {
      console.log(req.body);
      const result = await db.sequelizeDB.query(mdCensusData, {
        replacements: { },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request'});
    }
  })

  .put(async (req, res) => {
    try {
      console.log(req.body);
      const result = await db.sequelizeDB.query(mdCensusData, {
        replacements: { },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request'});
    }
  })

  .post(async (req, res) => {
    try {
      console.log(req.body);
      const result = await db.sequelizeDB.query(mdCensusData, {
        replacements: { },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request'});
    }
  })

  .delete(async (req, res) => {
    try {
      console.log(req.body);
      const result = await db.sequelizeDB.query(mdCensusData, {
        replacements: { },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request'});
    }
  });

router.route('/Population')
  .get(async (req, res) => {
    try {
      res.send('Population in Maryland');
      const url = '';
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      res.json({data: data});
    } catch (err) {
      console.error(err);
      res.error({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'PUT population in Maryland'});
    } catch (err) {
      console.log(error);
      res.json({error: 'You are wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'POST population in Maryland'});
    } catch (err) {
      console.log(error);
      res.json({error: 'You are wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'DELETE population in Maryland'});
    } catch (err) {
      console.log(error);
      res.json({error: 'You are wrong'});
    }
  });

export default router;
