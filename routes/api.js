/**
 * INST 377 TEAM 25
 * Authors: Alec Mattu, Hyeong Choi, John Iglesias, Michael Knapp
 * Date: 2021-10-31
 */

/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

// Instantiate router component
const router = express.Router();

/*
 * Root directory
 *
 * @author Alec M.
 */
router.get('/', (request, response) => {
  // Debug
  console.log("touched / with GET");

  // Send default response
  reponse.send('Touched the root API endpoint');
});

/*
 * Get all schools from the database
 *
 * NOTE:
 *   (1) No create, update, or delete methods
 *   are going to be supported for schools. As
 *   it's a fixed Top 10 list.
 *
 * @author Alec M.
 */
router.get('/schools', async (request, response) => {
  try {
    // Debug
    console.log("touched /schools with GET");

    // Send data
    response.json({status: "success", data: []});
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.json({status: "failure", data: null, message: "unknown error"});
  }
});

/**
 * Get available information about a specific school
 *
 * NOTE:
 *   (1) No create, update, or delete methods
 *   are going to be supported for schools. As
 *   it's a fixed Top 10 list.
 *
 * @author Alec M.
 * @date 2021-10-29 08:41:00am
 */
router.get('/schools/:school_id', async (request, response) => {
  try {
    // Debug
    console.log("touched /schools/:school_id with GET");

    // Send data
    response.json({status: "success", data: []});
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.json({status: "failure", data: null, message: "unknown error"});
  }
});

/**
 * Get available information about a specific school
 *
 * NOTE:
 *   (1) No create, update, or delete methods
 *   are going to be supported for schools. As
 *   it's a fixed Top 10 list.
 *
 * @author Hyeong C.
 * @date 2021-10-31 18:50:00pm
 */
router.get('/schools/:rank_id', async (request, response) => {
  try {
    // Debug
    console.log("touched /schools/:rank_id with GET");

    // Send data
    response.json({status: "success", data: []});
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.json({status: "failure", data: null, message: "unknown error"});
  }
});


/*********************
*
* Each member will set up a endpoint for our application
* and implement the necessary HTTP methods for it (GET/PUT/POST/DELTE)
*
*********************/

/*
router.post('/dining', async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/dining/:hall_id', async (req, res) => {
  try {
    await db.DiningHall.destroy({
      where: {
        hall_id: req.params.hall_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/dining', async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location
      },
      {
        where: {
          hall_id: req.body.hall_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
*/

export default router;
