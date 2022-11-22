/* eslint-disable max-len */
import express from 'express';
import controllers from '../controllers/sqlControllers.js';

const router = express.Router();

// /api/sqlDemo
/*
  ## What is this file?

  This is a listing of all the routes you can touch when you call for an address
  Each basic address, like '/', has four possible actions
  - GET
    Accepts values through the URL, and can be bookmarked by browsers. It is therefore great for long-term pages, but not very private.
    Used for main pages, permanent item filters and so on.

  - POST
    Accepts values through a form delivery, which can be encrypted. It's not bookmarkable! You use this for more customized pages.
    It is usually used to add a new record to a database.

  ## Why is it so small?
  There are only two verbs on this file, and the actions those verbs take are stored elsewhere, in /controllers.
  This is an example of "separation of concerns" - in here, we ONLY want to list what we're doing.
  When it works, we can then move our other work into other places, so our colleagues are less likely to break our work.
*/

router
  .route('/')
  .get((req, res) => controllers.sqlRouteGet(req, res)) // this has no curly braces because it is "implicitly" calling the controller function
  .post((req, res) => controllers.sqlRoutePost(req, res));

export default router;
