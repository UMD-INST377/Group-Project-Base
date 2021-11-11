/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

//Import Controllers
import covidStatsCustom from '../controllers/covid-stats.js';
import countyInfo from '../controllers/county-info_GET.js';
import addNewCounty from '../controllers/county-info_POST.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////COVID Stats Endpoint////////
/// /////////////////////////////////
router.route('/covid-stats')
  .get(async(req, res) => {
    try {
      const databaseResponse = await db.sequelizeDB.query(covidStatsCustom,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('Touched /covid-stats with GET');
      res.json(databaseResponse);
    } catch (err) {
      console.log(err);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: 'Touched /covid-stats with PUT' });
      console.log('Touched /covid-stats with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'Touched /covid-stats with POST' });
      console.log('Touched /covid-stats with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'Touched /covid-stats with DELETE' });
      console.log('Touched /covid-stats with DELETE');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });

/// /////////////////////////////////
/// ////Vaccine Stats Endpoint////////
/// /////////////////////////////////
router.route('/vacc-stats')
  .get(async(req, res) => {
    try {
      res.json({ message: 'Touched /vacc-stats with GET' });
      console.log('Touched /vacc-stats with GET');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: 'Touched /vacc-stats with PUT' });
      console.log('Touched /vacc-stats with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'Touched /vacc-stats with POST' });
      console.log('Touched /vacc-stats with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'Touched /vacc-stats with DELETE' });
      console.log('Touched /vacc-stats with DELETE');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });

/// /////////////////////////////////
/// ////Vaccine Sites Endpoint////////
/// /////////////////////////////////
router.route('/vacc-sites')
  .get(async(req, res) => {
    try {
      res.json({ message: 'Touched /vacc-sites with GET' });
      console.log('Touched /vacc-sites with GET');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: 'Touched /vacc-sites with PUT' });
      console.log('Touched /vacc-sites with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'Touched /vacc-sites with POST' });
      console.log('Touched /vacc-sites with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'Touched /vacc-sites with DELETE' });
      console.log('Touched /vacc-sites with DELETE');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });
/// /////////////////////////////////
/// ////County Info Endpoint////////
/// /////////////////////////////////
router.route('/county-info')
  .get(async(req, res) => {
    try {
      const dbResponse = await db.sequelizeDB.query(countyInfo,
        {
          type: sequelize.QueryTypes.SELECT
        });
      res.json(dbResponse);
      console.log('Touched /county-info with GET');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
// put request
  .put((req, res) => {
    try {
      res.json({ message: 'Touched /county-info with PUT' });
      console.log('Touched /county-info with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

// post request
  .post(async(req, res) => {
    const county = await db.County.findAll();
    try {
      const addCounty = await db.County.create({
        county_ID: 16,
        county: "Kent",
        population: 55666,
        population_density: 99
      });
      res.json(addCounty);
      console.log('Touched /county-info with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

// delete request
  .delete((req, res) => {
    try {
      res.json({ message: 'Touched /county-info with DELETE' });
      console.log('Touched /county-info with DELETE');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });

/// /////////////////////////////////
/// ////Unemployment Endpoint////////
/// //////////////////////////////////
router.route('/unemployment')
  .get(async(req, res) => {
    try {
      res.json({ message: 'Touched /unemployment with GET' });
      console.log('Touched /unemployment with GET');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: 'Touched /unemployment with PUT' });
      console.log('Touched /unemployment with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'Touched /unemployment with POST' });
      console.log('Touched /unemployment with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'Touched /unemployment with DELETE' });
      console.log('Touched /unemployment with DELETE');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });
export default router;