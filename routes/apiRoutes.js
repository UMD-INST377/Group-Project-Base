import express from 'express';
import fetch from 'node-fetch';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Here is TV shows API!');
});


// fetch TV shows API 
router.route('/shows') // actually localhost:3000/api/shows
  .get(async (req, res) => {
    try {
      const url = 'https://api.tvmaze.com/shows';
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
      res.json({message: 'put TV shows endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post TV shows endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete TV shows endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });
  export default router; 