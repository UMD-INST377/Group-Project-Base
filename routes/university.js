/**
 * INST 377 TEAM 25
 * Authors: Alec Mattu
 * Date: 2021-11-02
 */

// Module Imports
import express from 'express';

// Instantiate router component
const router = express.Router();

/*
 * Root directory
 *
 * @author Alec M.
 * @date 2021-11-01 06:32PM
 */
router.get('/:universityName', (request, response) => {
  //https://stackoverflow.com/questions/55088519/how-to-render-express-views-dynamically
  response.render('university', {
    title: request.params.universityName
  });
});

// Export router
export default router;
