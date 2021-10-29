import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import db from '../database/initializeDB.js';

const expressRouter = express.Router();

/// /////////////////////////////////
/// ////Movie Images Endpoints////////
/// /////////////////////////////////

// Specifically for our third party API we will be using for movie image info

// only need it to get movie information via the title, so only used .post

expressRouter.route('/movieImages')
  .post(async (req, res) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b8e74277443e1aeb8f158e41a802b173&query=${req.body.query}`;
      const data = await fetch(url);
      const movieInfo = await data.json();
      console.log('touched /movieImages with POST');
      res.json({data: movieInfo});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default expressRouter;