import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

//
// This is a demo of how to structure your final project API
// One route file is expected per student, with appropriate HTTP methods on each endpoint
//

// /////////////////////////////////
// Food Inspection Set Demos
// /////////////////////////////////





//dont know if the route is the correct one
router.route('/PgSpendings') // actually localhost:3000/api/foodServicesPG
  .get(async (req, res) => {
    try {
      const url = 'https://data.princegeorgescountymd.gov/api/views/INLINE/rows.json?accessType=DOWNLOAD';
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      res.json({data: json});
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

router.route('/foodServicesPG/:zipCode') // actually localhost:3000/api/foodServicesPG/20782
  .get(async (req, res) => {
    try {
      const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
      const request = await fetch(url);
      const json = await request.json();
      console.log(json);

      const filteredList = json.filter((item, index) => {
        const {zipCode} = req.params;
        return item.zip === zipCode;
      });

      res.json({data: filteredList});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put FoodServices ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post FoodServices ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete FoodServices ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;