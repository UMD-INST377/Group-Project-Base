/**
 * INST 377 TEAM 25
 * Authors: Alec Mattu
 * Date: 2021-11-02
 */

// Module Imports
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import controllers from '../controllers/index.js';

// Instantiate router component
const router = express.Router();

// Response statuses
const university_404 = '<h1>Requested university was not found</h1>';

/**
 * Root university directory
 *
 * @author Alec M.
 * @date 2021-11-01 06:32PM
 */
router.get('/:rank_id', async (request, response) => {
  // Validate rank_id
  const rank_id = parseInt(request.params.rank_id);
  if (rank_id <= 0 || rank_id > 14) {
    response.status(404).send(university_404);
  }

  // Safely connect to database
  try {
    // Validate university data
    const d = await db.sequelizeDB.query(controllers.university.getUniversity, {
      replacements: { rank_id: rank_id },
      type: sequelize.QueryTypes.SELECT
    });
    if (d.length != 1 || typeof(d[0]) !== "object" || typeof(d[0].university_name) !== "string") {
      response.status(404).send(university_404);
    }

    // Validate review data
    const r = await db.sequelizeDB.query(controllers.reviews.getNReviews, {
      replacements: { rank_id: rank_id, review_limit: 2 },
      type: sequelize.QueryTypes.SELECT
    });
    if (r.length > 0) {
      d[0]["reviews"] = r;
    }

    // Render page
    response.render('university', d[0]);
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.status(404).send();
  }
});

/**
 * University review page
 *
 * @author Alec M.
 * @date 2021-11-05 08:43:00
 */
router.get("/:rank_id/review", async (request, response) => {
  // Validate rank_id
  const rank_id = parseInt(request.params.rank_id);
  if (rank_id <= 0 || rank_id > 14) {
    response.status(404).send(university_404);
  }

  // Safely connect to database
  try {
    // Validate database data
    const d = await db.sequelizeDB.query(controllers.university.getUniversityName, {
      replacements: { rank_id: rank_id },
      type: sequelize.QueryTypes.SELECT
    });
    if (d.length != 1 || typeof(d[0]) !== "object" || typeof(d[0].university_name) !== "string") {
      response.status(404).send(university_404);
    }

    // Render page
    d[0]["rank_id"] = rank_id;
    response.render('newReview', d[0]);
  } catch (e) {
    // Debug
    console.error(e);

    // Send data
    response.status(404).send();
  }
});

// Export router
export default router;
