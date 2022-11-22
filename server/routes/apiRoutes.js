/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';

import NBARoutes from './NBARoutes.js';
import sqlDemoRoutes from './sqlDemoRoutes.js';

const router = express.Router();
const __dirname = path.resolve();
router.route('/')
  .get((req, res) => { // .get is the HTTP method for retrieving a resource using a URL
    try { // here we "try" to do some code
      console.log('You touched the default route!');
      /*
        Here, the /dirname points to the local directory on your computer, or your remote.
        It then "walks" the folders to find the address
        The address is _not_ relative to apiRoutes.js, like the imports at the top of the file
        Instead, it's found from the root of the folder, at /server/templates/demo.html
      */

      res.sendFile(path.join(__dirname, '/server/templates/demo.html'));
    } catch (err) { // and here we catch any errors that happen
      // then print a message to you on the server as to what went wrong
      console.log('Something went wrong:', err);
      // and resolve the request with a message to the client about what happened.
      res.json({message: 'TemplateDemo failed', error: err});
    }
  });

router.use('/NBA', NBARoutes);

router.use('/sqlDemo', sqlDemoRoutes);

export default router;