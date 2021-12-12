/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

// Import Controllers
import covidStatsCustom from '../controllers/covid-stats.js';
import countyInfo from '../controllers/county-info_GET.js';
import vacByCountydata from '../controllers/vacByCountyController.js';
import vaccSitesInfo from '../controllers/vaccine-site-info.js';

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
  .put(async(req, res) => {
    try {
      await db.covidStatsCustom.update({
        confirmed_deaths: req.body.confirmed_deaths,
        positive_cases: req.body.positive_cases,
        county_death_prop: req.body.county_death_prop
      },
      {
        where: {
          county_ID: req.body.county_ID
        }
      });
      console.log('Successfully Updated with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post(async(req, res) => {
    const cStatsTable = await db.covidStatsCustom.findAll();
    const currentId = (await cStatsTable.length) + 1;
    try {
      const addCovidStats = await db.covidStatsCustom.create({
        county_ID: currentId,
        confirmed_deaths: req.body.confirmed_deaths,
        positive_cases: req.body.positive_cases,
        county_death_prop: req.body.county_death_prop
      });
      console.log('Touched /covid-stats with POST');
      res.send('Successfully added with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete(async(req, res) => {
    try {
      await db.covidStatsCustom.destroy({
        where: {
          county_ID: req.params.county_ID
        }
      });
      console.log('Successfully Deleted with DELETE');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });

/// /////////////////////////////////
/// ////Vaccine Stats Endpoint////////
/// /////////////////////////////////
router.route('/vacByCountyController')
  .get(async(req, res) => {
    try {
      const dataResponse = await db.sequelizeDB.query(vacByCountydata, 
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('Reached /vacByCounty endpoint with GET')
      res.json(dataResponse);
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put(async(req, res) => {
    try {
      await db.vacByCountydata.update({
        first_dose_count: req.body.first_dose_count,
        first_dose_prop: req.body.first_dose_prop,
        second_dose_count: req.body.second_dose_count,
        second_dose_prop: req.body.second_dose_prop,
      },
      {
        where: {
          county_ID: req.body.county_ID
        }
      }); 
      console.log('Successfully Updated Vaccine County Data with PUT')
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post(async(req, res) => {
    const vacByCountyTable = await db.covidStatsCustom.findAll();
    const currentID = (await vacByCountyTable.length) + 1; 
    try {
      const addVacByCountyStats = await db.vacByCountydata.create({
        county_ID: currentID, 
        first_dose_count: req.body.first_dose_count,
        first_dose_prop: req.body.first_dose_prop,
        second_dose_count: req.body.second_dose_count,
        second_dose_prop: req.body.second_dose_prop, 
      });
      console.log('Reached /vacByCounty endpoint with POST')
      res.send('Successfully added to Vaccine Data By County with POST')
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete(async(req, res) => {
    try {
      await db.vacByCountydata.destroy({
        where: {
          county_ID: req.params.county_ID
        }
      });
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });

/// /////////////////////////////////
/// ////Vaccine Sites Endpoint////////
/// /////////////////////////////////
router.route('/vaccine-site-info')
  .get(async(req, res) => {
    try {
      const databaseResponse = await db.sequelizeDB.query (vaccSitesInfo,
        {
          type: sequelize.QueryTypes.SELECT
        });
      res.json(databaseResponse);
      console.log('Touched /vacc-sites with GET');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put(async(req, res) => {
    try {
      await db.vaccSitesInfo.update({
        site_name: req.body.site_name,
        street_address: req.body.street_address,
        street_address2: req.body.street_address2,
        city: req.body.city,
        zip_code: req.body.zip_code,
        active: req.body.active,
        site_type: req.body.site_type,
        operating_hours: req.body.operating_hours,
        contact_phone: req.body.contact_phone,
        website: req.body.website,
      },
      {
        where: {
          site_ID: req.body.site_ID
        }
      });
      console.log('Successfully updated with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post(async(req, res) => {
    const vaccSitesTable = await db.vaccSitesInfo.findAll();
    const currentID = (await vaccSitesTable.length) + 1;
    try {
      const addVaccSitesStats = await db.vaccSitesInfo.create({
        site_ID: currentID,
        site_name: req.body.site_name,
        street_address: req.body.street_address,
        street_address2: req.body.street_address2,
        city: req.body.city,
        zip_code: req.body.zip_code,
        active: req.body.active,
        site_type: req.body.site_type,
        operating_hours: req.body.operating_hours,
        contact_phone: req.body.contact_phone,
        website: req.body.website,
      });
      res.send('Successfully added with POST');
      console.log('Touched /vacc-sites with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete(async(req, res) => {
    try {
      await db.vaccSitesInfo.destroy({
        where: {
          site_ID: req.params.site_ID
        }
      });
      console.log('Successfully deleted with DELETE');
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
  .put(async(req, res) => {
    try {
      await db.County.update(
        {
          population_density: req.body.population_density,
          uninsured: req.body.uninsured,
          poverty_rate: req.body.poverty_rate
        },
        {
          where: {
            county_ID: req.body.county_ID
          }
        }
      );
      res.send({ message: 'Updated county' });
      console.log('Touched /county-info with PUT');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

// post request
  .post(async(req, res) => {
    const countyInfoTable = await db.County.findAll();
    const currentID = await countyInfoTable.length + 1;
    try {
      const addCounty = await db.County.create({
        county_ID: currentID,
        county: req.body.county,
        population: req.body.population,
        population_density: req.body.population_density
      });
      res.json(addCounty);
      console.log('Touched /county-info with POST');
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

// delete request
  .delete(async(req, res) => {
    try {
      await db.County.destroy({
        where: {
          county_ID: req.params.county_ID
        }
      });
      res.json({ message: 'Touched /county-info with DELETE' });
      console.log('Successfully deleted a county');
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