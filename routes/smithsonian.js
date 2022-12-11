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
router.route('/smithsonian') // actually localhost:3000/api/foodServicesPG
  .get(async (req, res) => {
    try {
      const url = 'https://api.si.edu/openaccess/api/v1.0/stats?api_key=bDy3ONUljbeF9nhGIgWGL3G0EMCOcOgLgPGqXpDq';
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
      res.json({message: 'put Smitsonain endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post Smithsonain endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete Smithsonain endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

router.route('/smithsonian/:category') // actually localhost:3000/api/foodServicesPG/20782
  .get(async (req, res) => {
    try {
      const url = 'https://api.si.edu/openaccess/api/v1.0/category/:cat/search?api_key=bDy3ONUljbeF9nhGIgWGL3G0EMCOcOgLgPGqXpDq';
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