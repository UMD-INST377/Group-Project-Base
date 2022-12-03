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