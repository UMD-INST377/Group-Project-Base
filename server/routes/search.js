import express from 'express';
import connection from '../config.js'
import { userSearch, toD3 } from '../../helpers/wikidata.js'

var searchRouter = express.Router();

// app.use(/search) in server.js turns post('/') into post('/search')
searchRouter.post('/', async (req, res, next) => {
    console.log('POST to searchRouter..');
  try {
    console.log(`route('/search') => QUERY: ${req.body.species_a} + ${req.body.species_b}`);
    const query = await userSearch(req.body.species_a, req.body.species_b);
    if (typeof query === 'undefined') {
        console.log('Error fetching trees from Wikidata.')
        return res.status(401).send('Bad query.')
    }
    const data = await toD3(query.query1, query.query2, query.match);
    res.status(200).send(JSON.stringify(data));
    res.end();
    return data;
  } catch (e) {
    console.error(e);
    res.send(`ERROR: ${e.name}`);
    res.end();
  }
});
export default searchRouter;