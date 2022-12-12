import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const apiUrl = 'https://api.si.edu/openaccess/api/v1.0'

router.route('/smithsonian')
  .get(async (req, res) => {
    try {
      const data = await fetch(`${apiUrl}/stats?api_key=bDy3ONUljbeF9nhGIgWGL3G0EMCOcOgLgPGqXpDq`);
      const json = await data.json();
      console.log(json);

      res.json({data: json});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })

router.route('/smithsonian/:search')
  .get(async (req, res) => {
    try {
      const request = await fetch(`${apiUrl}/search?q=${textBox}&api_key=bDy3ONUljbeF9nhGIgWGL3G0EMCOcOgLgPGqXpDq`);
      const json = await request.json();
      console.log(json);

      const filteredList = json.filter((item, index) => {
        const {dataSource} = req.params;
        return item.zip === dataSource;
      });

      res.json({data: filteredList});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })

export default router;