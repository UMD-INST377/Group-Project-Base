import express from 'express';
import connection from '../config.js'

var indexRouter = express.Router();

// SAVE QUERY
indexRouter.post('/queries', async (req, res, next) => {
  const queryString = `INSERT INTO queries (\`username\`, \`query_string\`, \`timestamp\`) VALUES("${req.body.username}", HEX(AES_ENCRYPT("${encodeURIComponent(req.body.query)}", UNHEX(SHA2("${req.body.password}", 512)))), now());`
  try {
    connection.query(queryString, async (error, results) => {
      if (error === null) {
            console.log('\nQuery saved. No issues detected.')
            res.status(200).send('Successfully saved search.')
        } 
        else {
          if (!error.errno === "") {
            console.log('SQL Error:', error.errno);
            res.sendStatus(404);
          }
        }
      })
  } catch (e) {
      console.log(`ERROR: ${e.message}\n`);
      res.sendStatus(400);
    }
})

async function bundleSearches(results) {
  let length = Object.keys(results).length;
  let response = []
  for (let i = 0; i < length; i += 1) {
    response.push(JSON.stringify({
      search: JSON.parse(decodeURIComponent(results[i].query)),
      timestamp: results[i].timestamp
    }))
  }
  return response
}

// GET ALL PREVIOUS QUERIES
indexRouter.post('/queries/user', async (req, res, next) => {
  const queryString = `SELECT username, CONVERT(AES_DECRYPT(UNHEX(query_string), UNHEX(SHA2("${req.body.password}", 512))) USING utf8) as query, timestamp FROM queries WHERE username = "${req.body.username}"`
  try {
    connection.query(queryString, async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (typeof results[0] === 'undefined') {
          res.status(400);
          console.log('\nError 400: Problem storing account info.')
          return;
        }
      console.log('Retrieving history data..')
      const response = await bundleSearches(results)
      res.status(200).send(response);
      })
  } catch (e) {
    console.log(`ERROR: ${e.message}\n`);
    res.sendStatus(400);
  }
})

export default indexRouter;