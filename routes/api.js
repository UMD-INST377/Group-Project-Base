/**
 * INST 377 TEAM 25
 * Authors: Alec Mattu, Hyeong Choi, John Iglesias, Michael Knapp
 * Date: 2021-10-31
 */

/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import controllers from '../controllers/index.js';

// Instantiate router component
const router = express.Router();

/**
 * Root directory
 *
 * @author Alec M.
 */
router.get('/', (request, response) => {
  // Debug
  console.log("touched / with GET");

  // Send default response
  response.send('Touched the root API endpoint');
});

/**
 * Get all schools from the database
 *
 * NOTE:
 *   (1) No create, update, or delete methods
 *   are going to be supported for schools. As
 *   it's a fixed Top 10 list.
 *
 * @author Alec M.
 * @date 2021-11-04 08:43:00
 */
router.get('/schools', async (request, response) => {
  try {
    // Fetch all schools
    const d = await db.sequelizeDB.query(controllers.university.getAllUniversities, {
      type: sequelize.QueryTypes.SELECT
    });

    // Send data
    response.json({status: "success", data: d});
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
 * @author Hyeong C.
 * @date 2021-11-07 18:40:00pm
 */

router.get('/schools/:rank_id', async (request, response) => {
  try {
    // Debug
    console.log('touched /schools/:rank_id with GET');

    // Send data
    response.json({status: 'success', data: []});
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.json({status: 'failure', data: null, message: 'unknown error'});
  }
});

/**
 * Fetch School Reviews by Rank ID
 *
 * @author Alec M.
 * @date 2021-11-08 11:41:00
 */
router.get('/schools/:rank_id/reviews', async (request, response) => {
  // Validate rank_id
  const rank_id = parseInt(request.params.rank_id);
  if (rank_id <= 0 || rank_id > 14) {
    response.json({status: 'failure', data: null, message: 'unknown error'});
  }

  // Safely connect to database
  try {
    const r = await db.sequelizeDB.query(controllers.reviews.getNReviews, {
      replacements: { rank_id: rank_id, review_limit: 20 },
      type: sequelize.QueryTypes.SELECT
    });

    // Send data
    response.json({status: 'success', data: r});
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.json({status: 'failure', data: null, message: 'unknown error'});
  }
});

router.get('/schools/:rank_id/univ_location', async (request, response) => {
  try {
    // Fetch univ rankings
    const d = await db.sequelizeDB.query(controllers.university.getUniversityLoc, {
      type: sequelize.QueryTypes.SELECT
    });

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
 * Get available avg SAT scores for a school
 *
 * @author John I.
 */
router.get('/schools/:rank_id/sat_scores', async (request, response) => {
  try {
    // Debug
    console.log('touched /schools/:rank_id/sat_scores with GET');

    // Send data
    response.json({status: 'success', data: []});
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.json({status: 'failure', data: null, message: 'unknown error'});
  }
});

// Export Express Router
export default router;
