import express from 'express';
import fetch from 'node-fetch';
//import { loadServiceData } from '../middleware/loadfinServicesData.js';

const router = express.Router();

//router.use(loadServiceData);

function callyear(year) {
  const url = {
    2022: 'https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json?$limit=100000',
    2021: 'https://data.princegeorgescountymd.gov/resource/rh7w-bmhm.json?$limit=100000',
    2020: 'https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json?$limit=100000',
    2019: 'https://data.princegeorgescountymd.gov/resource/p32t-azw8.json?$limit=100000',
    2018: 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json?$limit=100000',
    2017: 'https://data.princegeorgescountymd.gov/resource/364y-gm2b.json?$limit=100000',
    2016: 'https://data.princegeorgescountymd.gov/resource/csi4-9jzc.json?$limit=100000',
    2015: 'https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json?$limit=100000',
    2014: 'https://data.princegeorgescountymd.gov/resource/p9kn-7u2k.json?$limit=100000',
    2013: 'https://data.princegeorgescountymd.gov/resource/aqt8-5ri2.json?$limit=100000',
    2012: 'https://data.princegeorgescountymd.gov/resource/9i62-gki4.json?$limit=100000'
  }
  return url[year] != undefined ? url[year] : url[2022];
}


// main route
// referenced soql
// localhost:3000/api/finServices
router.route('/:year') 
  .get(async (req, res) => {
    try {
      const {year} = req.params;
      const url = callyear(year);
      const data = await fetch(url);
      const json = await data.json();
      console.log('length',json.length);

      res.json({data: json});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put Services endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post Services endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete Services endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

router.route('/finServices/:zipCode') // actually localhost:3000/api/foodServicesPG/20782
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
      res.json({message: 'put Services ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post Services ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete Services ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;