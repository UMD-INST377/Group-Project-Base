import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.route('/smithsonian')
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

router.route('/smithsonian/:category')
  .get(async (req, res) => {
    try {
      const url = 'https://api.si.edu/openaccess/api/v1.0/search?q=statue&api_key=bDy3ONUljbeF9nhGIgWGL3G0EMCOcOgLgPGqXpDq';
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

export default router;