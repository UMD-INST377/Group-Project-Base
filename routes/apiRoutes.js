/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

//Import Controllers
import covidStatsCustom from '../controllers/covid-stats.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

/// /////////////////////////////////
/// ////COVID Stats Endpoint////////
/// /////////////////////////////////
// router.route('/covid-stats')
//   .get(async(req, res) => {
//     try {
//       const stats = await db.covidStatsCustom.findAll();
//       res.json(stats);
//     } catch (err) {
//       console.error(err);
//       res.error('Server error at GET');
//     }
//   })
//   .put((req, res) => {
//     try {
//       await db.covidStatsCustom.update(
//         {
//           confirmed_deaths: req.body.confirmed_deaths,
//           positive_cases: req.body.positive_cases,
//           county_death_prop: req.body.county_death_prop
//         },
//         {
//           where: {
//             county_ID: req.body.county_ID
//           }
//         }
//       );
//       res.send('COVID Stats Successfully Updated');
//     } catch (err) {
//       console.error(err);
//       res.error('Server error at PUT');
//     }
//   })
//   .post((req, res) => {
//     try {
//       res.json({ message: "Touched /covid-stats with POST" });
//       console.log("Touched /covid-stats with POST");
//     } catch (err) {
//       console.log(error);
//       res.json({ error: 'Something went wrong' });
//     }
//   })
//   .delete((req, res) => {
//     try {
//       res.json({ message: "Touched /covid-stats with DELETE" });
//       console.log("Touched /covid-stats with DELETE");
//     } catch (err) {
//       console.log(error);
//       res.json({ error: 'Something went wrong' });
//     }
//   });

/// /////////////////////////////////
/// ////Vaccine Stats Endpoint////////
/// /////////////////////////////////
router.route('/vacc-stats')
  .get(async(req, res) => {
    try {
      res.json({ message: "Touched /vacc-stats with GET" });
      console.log("Touched /vacc-stats with GET");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: "Touched /vacc-stats with PUT" });
      console.log("Touched /vacc-stats with PUT");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: "Touched /vacc-stats with POST" });
      console.log("Touched /vacc-stats with POST");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: "Touched /vacc-stats with DELETE" });
      console.log("Touched /vacc-stats with DELETE");
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
      res.json({ message: "Touched /vacc-sites with GET" });
      console.log("Touched /vacc-sites with GET");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: "Touched /vacc-sites with PUT" });
      console.log("Touched /vacc-sites with PUT");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: "Touched /vacc-sites with POST" });
      console.log("Touched /vacc-sites with POST");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: "Touched /vacc-sites with DELETE" });
      console.log("Touched /vacc-sites with DELETE");
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
      res.json({ message: "Touched /county-info with GET" });
      console.log("Touched /county-info with GET");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
//put request
  .put((req, res) => {
    try {
      res.json({ message: "Touched /county-info with PUT" });
      console.log("Touched /county-info with PUT");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

//post request
  .post((req, res) => {
    try {
      res.json({ message: "Touched /county-info with POST" });
      console.log("Touched /county-info with POST");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

//delete request
  .delete((req, res) => {
    try {
      res.json({ message: "Touched /county-info with DELETE" });
      console.log("Touched /county-info with DELETE");
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
      res.json({ message: "Touched /unemployment with GET" });
      console.log("Touched /unemployment with GET");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
      res.json({ message: "Touched /unemployment with PUT" });
      console.log("Touched /unemployment with PUT");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: "Touched /unemployment with POST" });
      console.log("Touched /unemployment with POST");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: "Touched /unemployment with DELETE" });
      console.log("Touched /unemployment with DELETE");
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });
export default router;