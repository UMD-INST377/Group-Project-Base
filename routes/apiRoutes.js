/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import controllers from '../controllers/index.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/* Jim's lab 9 routes */
router.route('/census')
  .get(async (req, res) => { // make async because we want to await for the response
    try {
      const db_response = await db.sequelizeDB.query(controllers.census.getCensusSQL);
      console.log('touched /census with GET');
      res.json(db_response); // get census data later
      return db_response; // maybe we need this later idk
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put(async (req, res) => { // in postman things hangs for some reason, but I can see the value being updated
    try {
      console.log(req.params)
      await db.sequelizeDB.query(controllers.census.putCensusSQL, {replacements: {census_zcta: req.query.census_zcta,
										  total_population: req.query.total_population}});
      console.log('touched /census with PUT');
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post(async (req, res) => {
    try {
      console.log(req.query)
      console.log(req.query.census_zcta)
      await db.sequelizeDB.query(controllers.census.postCensusSQL,
				 { replacements: {census_zcta: req.query.census_zcta,
					       census_id: req.query.census_id,
					       median_age: req.query.median_age,
					       num_person_over_65: req.query.num_person_over_65,
				                total_population: req.query.total_population,
					       homeowner_rate: req.query.homeowner_rate,
                                                   percent_homeowner_without_mortgage: req.query.percent_homeowner_without_mortgage,
						percent_rent: req.query.percent_rent},
				   type: sequelize.QueryTypes.INSERT });
      console.log('touched /census with POST');
      res.json({message: 'post census endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete(async (req, res) => {
    try {
      await db.sequelizeDB.query(controllers.census.deleteCensusSQL); // currently simply deletes last element
      console.log('touched /census with DELETE');
      res.json({message: 'delete census endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  }); 

/* Kaveh's lab 9 routes */

router.route('/community')
  .get(async(req, res) => {
    try {
      const dbResponse = await db.sequelizeDB.query(controllers.community.communityData);
      console.log('touched /community with GET');
      res.json(dbResponse);
      return dbResponse;
    } catch (err) {
      console.error(err);
      res.json({error: 'Smething went wrong on the server.'});
    }
  })

  .post((req, res) => {
    try {
      console.log('touched/community with POST');
      res.json({message: 'post community endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })

  .delete((req, res) => {
    try {
      console.log('touched /community with DELETE');
      res.json({message: 'delete census endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  });

/* Teddy' lab 9 routes */

router.route('/population')
  .get((req, res) => {
    try {
      console.log('touched /population with GET');
      res.json({data: []}); // get census data later
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put((req, res) => {
    try {
      console.log('touched /population with PUT');
      res.json({message: 'put census endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /population with POST');
      res.json({message: 'post population endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /population with DELETE');
      res.json({message: 'delete population endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  });

/* Blen's lab 9 routes */

router.route('/ethnicities')
  .get((req, res) => {
    try {
      console.log('touched /ethnicities with GET');
      res.json({data: []}); // get census data later
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put((req, res) => {
    try {
      console.log('touched /ethnicities with PUT');
      res.json({message: 'put ethnicities endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post((req, res) => {
    try {
      console.log('touched /ethnicities with POST');
      res.json({message: 'post ethnicities endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete((req, res) => {
    try {
      console.log('touched /ethnicities with DELETE');
      res.json({message: 'delete ethnicities endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  });

/* Desmond's Lab 9 routes */

router.route('/metro')
  .get(async (req, res) => {
    try {
      const db_response = await db.sequelizeDB.query(controllers.metro.getMetroSQL);
      console.log('touched /metro with GET');
      res.json(db_response); 
      return db_response;
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .put(async (req, res) => {
    try {
      console.log(req.params)
      await db.sequelizeDB.query(controllers.metro.putMetroSQL, {replacements: {metro_zcta: req.query.metro_zcta,
										  metro_area: req.query.metro_area}});
      console.log('touched /metro with PUT');
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .post(async (req, res) => {
    try {
      console.log(req.query)
      console.log(req.query.metro_zcta)
      await db.sequelizeDB.query(controllers.metro.postMetroSQL,
				 { replacements: {metro_zcta: req.query.metro_zcta,
					       metro_area: req.query.metro_area
         },
				   type: sequelize.QueryTypes.INSERT });
      console.log('touched /metro with POST');
      res.json({message: 'post metro endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  })
  .delete(async (req, res) => {
    try {
      await db.sequelizeDB.query(controllers.metro.deleteMetroSQL);
      console.log('touched /metro with DELETE');
      res.json({message: 'delete metro endpoint'});
    } catch (err) {
      console.error(err);
      res.json({error: 'Something went wrong on the server.'});
    }
  });





// put all code before export default router
export default router;
