import express from 'express';

import { loadNbaStats } from '../midware/loadNbaStats.js';

const router = express.Router();

router.use(loadNbaStats);

router
  .route('/') // /api/foodServicePG - this address is set in /apiRoutes!
  .get(async (req, res) => {
    /*
          GET is what happens when you load a route with no other requests
          It might take a moment to load, because we are asking a third party for information
          Then we will structure our information on the server
          And pass what we need to our client
        */
    try {
      console.log('You touched the nbaroute Route!');
      console.log('req.nbaStatsData results in foodServicePG GET', req.nbaStatsData.length); // this information comes in through the middleware above

      let reply;
      if (req.query?.resto) {
        console.log('query parameters if any', req.query);

        // A `.filter` function will return the all elements in an array that match a truth check.
        // Here, our truth check is: 'does any element contain our form query'
        // so... 'is there a restaurant with pizza (or steak or so on) in the name in this data set'
        reply = req.nbaStatsData.filter((item) => {
          const lowerCaseName = item.number.toLowerCase();
          const lowerCaseQuery = req.query?.resto.toLowerCase();

          // Once both our functions are in lower case
          // we can check if the current item's name includes the query
          // And we return the _first_ item that is "true" from that check
          return lowerCaseName.includes(lowerCaseQuery);
        });

        console.log('how many restaurants match the query?', reply.length);
      } else {
        reply = req.nbaStatsData;
      }

      /*
              Here we're closing the request to the route by passing back our "reply":
              All array items if we have no query
              Only the matches if we have a query - which means
              nothing if the query did not match anything
            */
      res.json({ data: reply });
    } catch (err) {
      // Catch: if our above code breaks, this will fire,
      // and send a response to our client saying what happened.
      console.log(err); // Show the server our error

      // Send a reply to make sure our request from our front-end does not hang open
      res.json({
        message: 'Something went wrong in our foodServicePG GET request',
        error: err
      });
    }
  }) // Other controllers live in the basicControllers file, for legibility
// - you can even separate them by file if they get very complex
  .post((req, res) => foodServiceControllers.handlePostRequest(req, res))
  .put((req, res) => foodServiceControllers.handlePutRequest(req, res))
  .delete((req, res) => foodServiceControllers.handleDeleteRequest(req, res));

/*
  This route is separated out because it is a 'sub-route' of /foodServicePG
  It turns up if you add an optional string after the main URL
   - which will be interpreted as "category" of restaurant
  http://localhost:3000/api/foodServicePG/fastfood, for example
  URLs like this are convenient because they can be bookmarked
in the browser, and still use basic GET methods
*/
router.route('/:category')
  .get(async (req, res) => {
    try {
      console.log('Touched foodServices /:category');
      // + req.params.category
      // TODO: if category does not exist, return

      /*
              The following two lines "destructure" information from an object
              in this case, 'req,' which has both `req.params.category` and `req.foodServiceData`
              req.params.whatever is set in our route - here, /:category
              req.foodServiceData is set in our middleware
              for more on destructuring: https://wesbos.com/destructuring-renaming
            */
      const { nbaStatsData: data } = req;
      const { category } = req.params;

      // console.log('data', data); // debug logs to check what we're getting back
      // console.log('category', category);

      // this is a data filter!
      // it will run more quickly on your server than your client
      // because your server has more power to run loops than a small, hot phone
      // This is a small data set, but it is useful for an example
      const filteredData = data.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );

      // console.log(filteredData);

      // this response "closes" our request to the ID
      // route, and sends back an object with the key of .data set
      res.json({ data: filteredData });
    } catch (err) {
      console.log(err);
      res.json({ message: 'Something went wrong', error: err });
    }
  }).post((req, res) => {
    try {
      console.log('Touched post request on /:category');
      /*
              we have no information here until we accept and process the request,
              but we need to close the request loop anyway.
              So we send an empty array.
             */
      res.json({ data: [] });
    } catch (err) {
      console.log(err);
      res.json({ message: 'Something went wrong', error: err });
    }
  });

export default router;
