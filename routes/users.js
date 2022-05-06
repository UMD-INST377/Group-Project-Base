import express from 'express';
import connection from '../config.js'

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

usersRouter.post('/update/:id', (req, res, next) => {
  const formParams = JSON.parse(req.body.form)
  // needed for second query
  const user = req.body.username
  console.log('usersRouter.post("/")...')
  try {
    // check for null values
    for (let i in formParams) {
      let child = formParams[i]
      if (child === null) {
        res.status(403).send('Missing value. Try again.')
      }
    }
    // check for incorrect match
    if (formParams.new_pw !== formParams.confirm_pw) {
      res.status(403).send('Passwords do NOT match. Try again.')
    } else {
      
      const query = `UPDATE users SET password = SHA2("${formParams.new_pw}", 256) WHERE username = SHA2("${req.body.username}", 256);`
      connection.query(query, async (error, response) => {
        if (error === null) {
          console.log('\nUser data updated. No errors detected.')
      } else {
      if (!error.errno === "") {
        console.log('connection.query() Error:', error.errno);
        res.sendStatus(404);
      }
      }})

      // now, fetch new hash
      connection.query(`SELECT password FROM users WHERE username = SHA2("${user}", 256) and password = SHA2("${formParams.new_pw}", 256);`, async (error, response) => {
        if (error === null) {
          console.log('\nUser data updated. No errors detected.')
          res.status(200).send(JSON.stringify({ password: response[0].password}))
      } else {
      if (!error.errno === "") {
        console.log('connection.query() Error:', error.errno);
        res.sendStatus(404);
      }
    }})
    }
    } catch (e) {
      console.log(`ERROR: ${e.message}\n`);
      res.sendStatus(400);
    }
  })

export default usersRouter;