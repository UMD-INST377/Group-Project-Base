import express from 'express';
// import fetch from 'node-fetch';
import { loadFoodServiceData } from './crime.js';

const router = express.Router();

router.use(loadFoodServiceData);

router.route('/crimeData') // actually localhost:3000/api/foodServicesPG
  .get(async (req, res) => {
    try {
      console.log(req.crimeData);
      console.log('You touched the foodService Route!');
      console.log('req.foodServiceData results in foodServicePG GET', req.crimeData.length); // this information comes in through the middleware above
      let reply;
      if (req.query?.resto) {
        console.log('query parameters if any', req.query);

        // A `.filter` function will return the all elements in an array that match a truth check.
        // Here, our truth check is: 'does any element contain our form query'
        // so... 'is there a restaurant with pizza (or steak or so on) in the name in this data set'
        reply = req.foodServiceData.filter((item) => {
          // This function has been split to be easier to read, although in practice it could be one line
          const lowerCaseName = item.name.toLowerCase(); // these need to be in the same case for easier comparison
          const lowerCaseQuery = req.query?.resto.toLowerCase(); // capital letters and lowercase letters are different characters to a computer

          // Once both our functions are in lower case
          // we can check if the current item's name includes the query
          // And we return the _first_ item that is "true" from that check
          return lowerCaseName.includes(lowerCaseQuery);

          // If we were writing a "find," this would return the first single object that matched the test
          // If we were writing a "map," the function we applied would change every element and return a new array of those elements
          // If we write a "forEach," the function changes the original array, which tends to be less good - unexpected errors can seep in
        });

        console.log('how many restaurants match the query?', reply.length);
      } else {
        reply = req.foodServiceData;
      }

      /*
        Here we're closing the request to the route by passing back our "reply":
        All array items if we have no query
        Only the matches if we have a query - which means nothing if the query did not match anything
      */
      res.json({ data: reply });
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put FoodServices endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post FoodServices endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete FoodServices endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

// router.route('/foodServicesPG/:zipCode') // actually localhost:3000/api/foodServicesPG/20782
//   .get(async (req, res) => {
//     try {
//       const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
//       const request = await fetch(url);
//       const json = await request.json();
//       console.log(json);

//       const filteredList = json.filter((item, index) => {
//         const {zipCode} = req.params;
//         return item.zip === zipCode;
//       });

//       res.json({data: filteredList});
//     } catch (error) {
//       console.log(error);
//       res.json({error: error});
//     }
//   })
//   .put((req, res) => {
//     try {
//       res.json({message: 'put FoodServices ID endpoint'});
//     } catch (error) {
//       console.log(error);
//       res.json({error: 'Something went wrong on the server'});
//     }
//   })
//   .post((req, res) => {
//     try {
//       res.json({message: 'post FoodServices ID endpoint'});
//     } catch (error) {
//       console.log(error);
//       res.json({error: 'Something went wrong on the server'});
//     }
//   })
//   .delete((req, res) => {
//     try {
//       res.json({message: 'delete FoodServices ID endpoint'});
//     } catch (error) {
//       console.log(error);
//       res.json({error: 'Something went wrong on the server'});
//     }
//   });

export default router;