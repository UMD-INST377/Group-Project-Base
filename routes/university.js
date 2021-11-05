/**
 * INST 377 TEAM 25
 * Authors: Alec Mattu
 * Date: 2021-11-02
 */

// Module Imports
import express from 'express';

// Instantiate router component
const router = express.Router();

/** TEMP CODE **/
/**
 * IMPORTANT NOTE
 * (1) The code below is a temporary solution
 * to the lack of database that we currently have
 * this is just a emulation
 */
const universities = {
  "university-of-maryland": {
    name: "University of Maryland",
    addr: "College Park, MD",
    url: "https://umd.edu"
  },
  "pennsylvania-state-university": {
    name: "Penn State University",
    addr: "State College, PA",
    url: "https://psu.edu"
  },
  "universiy-of-minnesota": {
    name: "University of Minnesota",
    addr: "Minneapolis, MN",
    url: "https://twin-cities.umn.edu"
  }
}
/** END OF TEMP CODE **/

/**
 * Root university directory
 *
 * @author Alec M.
 * @date 2021-11-01 06:32PM
 */
router.get('/:universityName', (request, response) => {
  /* Temp solution until DB is ready */
  const uni = universities[request.params.universityName];

  if (typeof(uni) === "object") {
    response.render('university', uni);
  } else {
    response.status(404).send('<h1>Requested university was not found</h1>');
  }
});

/**
 * University review page
 *
 * @author Alec M.
 * @date 2021-11-05 08:43:00
 */
router.get("/:universityName/review", (request, response) => {
  /* Temp solution until DB is ready */
  const uni = universities[request.params.universityName];

  if (typeof(uni) === "object") {
    response.render('newReview', uni);
  } else {
    response.status(404).send('<h1>Requested university was not found</h1>');
  }
});

// Export router
export default router;
