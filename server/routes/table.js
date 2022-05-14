import express from 'express';
import connection from '../config.js'

var tableRouter = express.Router();

// GET ALL PREVIOUS QUERIES
tableRouter.get('/', async (req, res, next) => {
  console.log(`Retrieving from /${req.query.family}....`)
  const input = `SELECT * FROM ${req.query.family};`
  let getAll = connection.promise().query(input)
  .then((result) => {
    if (result[0]['0'] === undefined) {
      throw new Error('UNDEFINED')
    }
    return result[0]
  })
  .then((result) => {
    res.status(200).send(result) 
  })
  .catch((error) => {
    if (error.message === 'UNDEFINED') {
      res.status(400).send('Could not retrieve table. Try again.')
      }
  })
})

// DELETE ROW FROM TABLE
tableRouter.delete('/', async (req, res, next) => {
    const input = `DELETE FROM ${req.body.family} WHERE GBIF="${req.body.gbif}" AND common_names="${req.body.common_name}";`  
    console.log(input)
    console.log(`=> /${req.body.family}....`)
    let deleteQuery = connection.promise().query(input)
    .then(([rows, fields]) => {
      console.log('Numer of records deleted: ' + rows.affectedRows)
      if (rows.affectedRows === 1) {
        res.status(200).send('Successfully deleted row.')
      } else {
        throw new Error('DELETE_FAILED')
      }
    })
    .catch((error) => {
        console.log(error.message)
        res.status(400).send(error.message)
      })
})

export default tableRouter;