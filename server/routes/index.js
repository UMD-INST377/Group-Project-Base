import express from 'express';
import connection from '../config.js'

var indexRouter = express.Router();

// SAVE QUERY
indexRouter.post('/', (req, res) => {
  console.log('Saving query...')
  const input = `INSERT INTO queries (\`username\`, \`query_string\`, \`timestamp\`) VALUES("${req.body.username}", HEX(AES_ENCRYPT("${encodeURIComponent(req.body.query)}", UNHEX(SHA2("${req.body.password}", 512)))), now());`
  let createAcct = connection.promise().query(input)
  .then(([rows, fields]) => {
    console.log('affectedRows: ' + rows.affectedRows)
    console.log('\Query saved. No issues detected.')
    res.status(200).send('Successfully saved search.')
  })
  .catch((error) => {
      console.log(error.message)
      res.status(400).send(error.message)
    })
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
indexRouter.post('/user', async (req, res, next) => {
  console.log('Retrieving user queries....')
  const input = `SELECT username, CONVERT(AES_DECRYPT(UNHEX(query_string), UNHEX(SHA2("${req.query.password}", 512))) USING utf8) as query, timestamp FROM queries WHERE username = "${req.query.username}"`
  let getAll = connection.promise().query(input)
  .then((result) => {
    if (result[0]['0'] === undefined) {
      throw new Error('UNDEFINED')
    }
    return result
  })
  .then((res) => bundleSearches(res[0]))
  .then((result) => {

    res.status(200).send(result) 
  })
  .catch((error) => {
    if (error.message === 'UNDEFINED') {
      res.status(400).send('Could not retrieve saved queries. Try again.')
      }
  })
})

// DELETE PREVIOUS QUERY
indexRouter.delete('/', async (req, res) => {
  const input = `DELETE FROM queries
  WHERE query_id IN (
    SELECT * FROM (
      SELECT query_id FROM queries WHERE username=SHA2("${req.body.user}", 256)
      AND EXTRACT(MINUTE_SECOND FROM timestamp) = EXTRACT( MINUTE_SECOND FROM CAST("${req.body.timestamp}" AS DATETIME))) AS our_query
      );`
  let deleteQuery = connection.promise().query(input)
  .then(([rows, fields]) => {
    console.log('Numer of records deleted: ' + rows.affectedRows)
    if (rows.affectedRows === 1) {
      res.status(200).send('Successfully deleted search.')
    } else {
      throw new Error('DELETE_FAILED')
    }
  })
  .catch((error) => {
      console.log(error.message)
      res.status(400).send(error.message)
    })
})
export default indexRouter;