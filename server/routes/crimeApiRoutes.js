/* eslint-disable no-console */
import express from 'express';
import path from 'path';

import CrimeDataRoutes from './CrimeDataRoutes';

const router = express.Router();

/* eslint-disable max-len */
/*
  ## What is this file?
  This is the main "router" for the server-side of your application.
  It listens for address requests - like 'http://your-app.heroku.com/api' - and sends a response.
  The response can be anything.

  In this file we have three demonstrations, an HTML page, a basic external API request, and a SQL request.

  For a long time, when we did a "get" request - asked for an address - JUST an HTML page would come back.
  Now, though, most clients are built of Javascript, which changes our route structure a lot.

  In this class, we separate our data routes and our content routes.

  Content is available at 'http://your-app.heroku.com/'
  Data is available at 'http://your-app.heroku.com/api'

  This is set up in server.js at about line 46, where it says `app.use(express.static(staticFolder));`
*/
/* eslint-enable max-len */

/*
    To send an HTML response, our server needs to know where to find the file
    on our local computer. This command resolves that `path` so the file can load.
*/
const __dirname = path.resolve();

// localhost:3000/api when developing locally
// This is the first API you touch in the HTML Forms lab, using a Get request
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

/* How To Include A Sub-Route */

// these routes have their actual methods and controllers stored in a different file
// which we specify at the top of this one with an 'import' statement
// When we use these routes, we don't repeat ourselves, which reduces the risk of breakage

/* /api/foodServicePG is the main route we use in labs */
router.use('/crimeDataPG', CrimeDataRoutes);

/* /api/sqlDemo is an advanced set of files which demonstrate
  how to use your own database - it's based on using one from 327 for this class
*/
router.use('/sqlDemo', sqlDemoRoutes);

// 'export' is how we make this file accessible to 'import' in server.js
export default router;
