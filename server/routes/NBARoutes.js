/* eslint-disable max-len */
/* eslint-disable no-console */
import express from 'express';

import { loadNBAData } from '../middleware/loadNBAData.js';
import NBAControllers from '../controllers/NBAControllers.js';

const router = express.Router();

router.use(loadNBAData);

router
    .route('/')
    .get(async (req, res) => {
        try {
            console.log('You touched the NBA Route!')
            console.log('req.NBAData results in NBA GET', req.NBAData.length);

            let reply;
            if (req.query?resto) {
                console.log('query parameters if any', req.query);
                reply = req.NBAData.filter((item) => {
                    const lowerCaseName = item.name.toLowerCase();
                    const lowerCaseQuery = req.query?.players.toLowerCase();

                    return lowerCaseName.includes(lowerCaseQuery);
                });
                console.log('how many players match the query?', reply.length)
            } else {
                reply = req.NBAData;
            }
            res.json({ data: relpy });
        }  catch (err) {
            console.log(err);

            res.json({
                message: 'Something went wrong in our NBA GET request',
                error: err
            });
        }
    })
    .post((req, res) => NBAControllers.handlePostRequest(req,res))
    .put((req, res) => NBAControllers.handlePutRequest(req, res))
    .delete((req, res) => NBAControllers.handleDeleteRequest(req, res));

    router.route('/:category')
  .get(async (req, res) => {
    try {
      console.log('Touched NBA /:category');
      // + req.params.category
      // TODO: if category does not exist, return

      const { NBAData: data } = req;
      const {category} = req.params;

      const filteredData = data.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );

      // console.log(filteredData);

      // this response "closes" our request to the ID route, and sends back an object with the key of .data set
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
      res.json({data: []});
    } catch (err) {
      console.log(err);
      res.json({ message: 'Something went wrong', error: err });
    }
  });

export default router;