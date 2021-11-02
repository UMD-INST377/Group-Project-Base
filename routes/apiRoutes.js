/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

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
<<<<<<< HEAD
      res.json({ message: 'Touched /covid-stats with GET' });
      console.log('Touched /covid-stats with GET');
=======
      res.json({ message: "Touched /covid-stats with GET" });
      console.log("Touched /covid-stats with GET");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /covid-stats with PUT' });
      console.log('Touched /covid-stats with PUT');
=======
      res.json({ message: "Touched /covid-stats with PUT" });
      console.log("Touched /covid-stats with PUT");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /covid-stats with POST' });
      console.log('Touched /covid-stats with POST');
=======
      res.json({ message: "Touched /covid-stats with POST" });
      console.log("Touched /covid-stats with POST");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /covid-stats with DELETE' });
      console.log('Touched /covid-stats with DELETE');
=======
      res.json({ message: "Touched /covid-stats with DELETE" });
      console.log("Touched /covid-stats with DELETE");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
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
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-stats with GET' });
      console.log('Touched /vacc-stats with GET');
=======
      res.json({ message: "Touched /vacc-stats with GET" });
      console.log("Touched /vacc-stats with GET");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-stats with PUT' });
      console.log('Touched /vacc-stats with PUT');
=======
      res.json({ message: "Touched /vacc-stats with PUT" });
      console.log("Touched /vacc-stats with PUT");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-stats with POST' });
      console.log('Touched /vacc-stats with POST');
=======
      res.json({ message: "Touched /vacc-stats with POST" });
      console.log("Touched /vacc-stats with POST");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-stats with DELETE' });
      console.log('Touched /vacc-stats with DELETE');
=======
      res.json({ message: "Touched /vacc-stats with DELETE" });
      console.log("Touched /vacc-stats with DELETE");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
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
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-sites with GET' });
      console.log('Touched /vacc-sites with GET');
=======
      res.json({ message: "Touched /vacc-sites with GET" });
      console.log("Touched /vacc-sites with GET");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-sites with PUT' });
      console.log('Touched /vacc-sites with PUT');
=======
      res.json({ message: "Touched /vacc-sites with PUT" });
      console.log("Touched /vacc-sites with PUT");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-sites with POST' });
      console.log('Touched /vacc-sites with POST');
=======
      res.json({ message: "Touched /vacc-sites with POST" });
      console.log("Touched /vacc-sites with POST");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /vacc-sites with DELETE' });
      console.log('Touched /vacc-sites with DELETE');
=======
      res.json({ message: "Touched /vacc-sites with DELETE" });
      console.log("Touched /vacc-sites with DELETE");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
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
<<<<<<< HEAD
      res.json({ message: 'Touched /county-info with GET' });
      console.log('Touched /county-info with GET');
=======
      res.json({ message: "Touched /county-info with GET" });
      console.log("Touched /county-info with GET");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
<<<<<<< HEAD
// put request
  .put((req, res) => {
    try {
      res.json({ message: 'Touched /county-info with PUT' });
      console.log('Touched /county-info with PUT');
=======
//put request
  .put((req, res) => {
    try {
      res.json({ message: "Touched /county-info with PUT" });
      console.log("Touched /county-info with PUT");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

<<<<<<< HEAD
// post request
  .post((req, res) => {
    try {
      res.json({ message: 'Touched /county-info with POST' });
      console.log('Touched /county-info with POST');
=======
//post request
  .post((req, res) => {
    try {
      res.json({ message: "Touched /county-info with POST" });
      console.log("Touched /county-info with POST");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })

<<<<<<< HEAD
// delete request
  .delete((req, res) => {
    try {
      res.json({ message: 'Touched /county-info with DELETE' });
      console.log('Touched /county-info with DELETE');
=======
//delete request
  .delete((req, res) => {
    try {
      res.json({ message: "Touched /county-info with DELETE" });
      console.log("Touched /county-info with DELETE");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
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
<<<<<<< HEAD
      res.json({ message: 'Touched /unemployment with GET' });
      console.log('Touched /unemployment with GET');
=======
      res.json({ message: "Touched /unemployment with GET" });
      console.log("Touched /unemployment with GET");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .put((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /unemployment with PUT' });
      console.log('Touched /unemployment with PUT');
=======
      res.json({ message: "Touched /unemployment with PUT" });
      console.log("Touched /unemployment with PUT");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .post((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /unemployment with POST' });
      console.log('Touched /unemployment with POST');
=======
      res.json({ message: "Touched /unemployment with POST" });
      console.log("Touched /unemployment with POST");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  })
  .delete((req, res) => {
    try {
<<<<<<< HEAD
      res.json({ message: 'Touched /unemployment with DELETE' });
      console.log('Touched /unemployment with DELETE');
=======
      res.json({ message: "Touched /unemployment with DELETE" });
      console.log("Touched /unemployment with DELETE");
>>>>>>> 773dc80963596b78743bc8103da5dbe55da3825e
    } catch (err) {
      console.log(error);
      res.json({ error: 'Something went wrong' });
    }
  });
export default router;