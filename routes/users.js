import express from 'express';
import connection from '../config.js'

const usersRouter = express.Router();

// meant to split the fetch off from the main route
async function retrieveAcct(username, password) {
  try {
    const query = connection.query(`SELECT username, email, password FROM users WHERE username = "${username}" and password = SHA2("${password}", 256);`, (error, results) => {
      return results[0]
    })
    console.log(Object.keys(query))
    return query;
  } catch (e) {
    console.log(`retrieveAcct ERROR: ${e.message}\n`);
  }
}

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// SIGN UP
usersRouter.post('/', async (req, res, next) => {
  console.log('POST to usersRouter.post("/")..');
  let userData = [req.body.user, req.body.pass]
  try {
    // first we post the account data
    let acctExists = false;
    connection.query(`INSERT INTO users (\`username\`, \`email\`, \`password\`) VALUES(SHA2("${req.body.user}", 256), SHA2("${req.body.email}", 256), SHA2("${req.body.pass}", 256));`, async (error, results) => {
      if (error === null) {
          console.log('\nAccount created. No issues detected.')
      } else {
      if (error.errno === 1062) {
        acctExists = true;
        console.log('\nAcct exists?', acctExists)
        console.log('ERROR 405: Account already exists.')
        res.sendStatus(405);
        }
      if (!error.errno === "") {
        console.log('connection.query() Error:', error.errno);
        res.sendStatus(404);
      }
    }
  })
  // then we fetch the encrypted data and store it locally
  connection.query(`SELECT username, email, password FROM users WHERE username = SHA2("${userData[0]}", 256) and password = SHA2("${userData[1]}", 256);`, async (error, results) => {
    if (error) {
        console.log(error);
      }
      if (typeof results[0] === 'undefined') {
          res.status(400);
          console.log('\nError 400: Problem storing account info.')
          return;
        }
      if (!acctExists) {
        console.log('Sending stringified data..')
        res.send(JSON.stringify({ plainUser: userData[0], username: results[0].username, email: results[0].email, password: results[0].password }))
      }
      })
  } catch (e) {
    console.log(`ERROR: ${e.message}\n`);
    res.sendStatus(400);
  }
})

// SIGN IN
usersRouter.post('/login', async (req, res, next) => {
  console.log('POST to usersRouter.post("/login")..');
  let userData = [req.body.user, req.body.pass]
  try {
  // fetch their encrypted user data and store it locally
  connection.query(`SELECT username, email, password FROM users WHERE username = SHA2("${userData[0]}", 256) and password = SHA2("${userData[1]}", 256);`, async (error, response) => {
    console.log(response)
    if (error) {
        console.log(error);
      }
      if (typeof response[0] === 'undefined') {
          res.status(400);
          console.log('\nError 400: Problem signing in.')
          return;
        }
      console.log('Signing in...')
      res.send(JSON.stringify({ plainUser: userData[0], username: response[0].username, email: response[0].email, password: response[0].password }))
      })
  } catch (e) {
    console.log(`ERROR: ${e.message}\n`);
    res.sendStatus(400);
  }
})

// UPDATE PASSWORD
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