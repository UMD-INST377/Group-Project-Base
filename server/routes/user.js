import express from 'express';
import connection from '../config.js'

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
userRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// SIGN UP
userRouter.post('/', async (req, res, next) => {
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
userRouter.post('/login', async (req, res, next) => {
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
/*
// UPDATE PASSWORD
userRouter.post('/password', (req, res, next) => {
  const formParams = JSON.parse(req.body.form)
  // needed for second query
  const user = req.body.username
  console.log('usersRouter.post("/password")...')
  try {
    // check for null values
    for (let i in formParams) {
      let child = formParams[i]
      if (child === "") {
        res.status(403).send('Missing value. Try again.')
        return
      }
    }
    // check for incorrect match
    if (formParams.new_pw !== formParams.confirm_pw) {
      res.status(403).send('Passwords do NOT match. Try again.')
      return
    } else {
      
      const query = `UPDATE users as u, (SELECT * FROM users WHERE username = SHA2("${user}", 256) AND password = SHA2("${formParams.old_pw}", 256)) as temp SET u.password = SHA2("${formParams.new_pw}", 256) WHERE temp.id = u.id;`
      connection.query(query, async (error, response) => {
        if (error === null) {
          console.log('\nPassword updated. No errors detected.')
      } else {
      if (!error.errno === "") {
        console.log('connection.query() Error:', error.errno);
        res.sendStatus(404);
        return
      }
      }})

      // now, fetch password hash
      connection.query(`SELECT password FROM users WHERE username = SHA2("${user}", 256) and password = SHA2("${formParams.new_pw}", 256);`, async (error, response) => {
        if (error === null) {
          console.log('\nFetching user data. No errors detected.')
          res.status(200).send(JSON.stringify({ password: response[0].password}))
      } else {
      if (!error.errno === "") {
        console.log('connection.query() Error:', error.errno);
        res.sendStatus(404);
        return
      }
    }})
    }
    } catch (e) {
      console.log(`ERROR: ${e.message}\n`);
      res.sendStatus(400);
    }
  })
*/

// UPDATE USERNAME
userRouter.post('/username', (req, res) => {
  const formParams = JSON.parse(req.body.form)
  console.log(formParams)
  // needed for second query
  const old_username = req.body.username
  console.log('usersRouter.post("/username")...')

  // check for null values
  for (let i in formParams) {
    let child = formParams[i]
    if (child === '') {
      res.status(403).send('Missing value. Try again.')
      return
    }
  }
  // check for incorrect match
  if (formParams.pw !== formParams.confirm_pw) {
    res.status(403).send('Passwords do NOT match. Try again.')
    return
  }
    
  const input = `UPDATE users as u, (SELECT * FROM users WHERE username = SHA2("${old_username}", 256) AND password = SHA2("${formParams.pw}", 256)) as temp SET u.username = SHA2("${formParams.new_username}", 256) WHERE temp.id = u.id;`
  let update = connection.promise().query(input)
  .then(([rows, fields]) => {
    console.log('affectedRows: ' + rows.affectedRows);
  })
  .catch(console.log)
  .then(() => { // pass successful update into select query
    let getData = `SELECT username FROM users WHERE username = SHA2("${formParams.new_username}", 256) and password = SHA2("${formParams.pw}", 256);`
    return connection.promise().query(getData)
  })
  .then((result) => {
    res.status(200).send(JSON.stringify({
      username: result[0]['0'].username,
      plainUser: formParams.new_username}))
  }).catch(console.log)
})

userRouter.post('/pw', (req, res) => {
  const formParams = JSON.parse(req.body.form)
  // needed for second query
  const user = req.body.username
  console.log('usersRouter.post("/password")...')
  for (let i in formParams) {
    let child = formParams[i]
    if (child === "") {
      res.status(403).send('Missing value. Try again.')
      return
    }
  }
  // check for incorrect match
  if (formParams.new_pw !== formParams.confirm_pw) {
    res.status(403).send('Passwords do NOT match. Try again.')
    return
  }
  // create update string
  const input = `UPDATE users as u, (SELECT * FROM users WHERE username = SHA2("${user}", 256) AND password = SHA2("${formParams.old_pw}", 256)) as temp SET u.password = SHA2("${formParams.new_pw}", 256) WHERE temp.id = u.id;`
  let update = connection.promise().query(input)
  .then(([rows, fields]) => {
    console.log('affectedRows: ' + rows.affectedRows);
  })
  .catch(console.log)
  .then(() => { // pass successful update into select query
    let getData = `SELECT password FROM users WHERE username = SHA2("${user}", 256) and password = SHA2("${formParams.new_pw}", 256);`
    return connection.promise().query(getData)
  })
  .then((result) => {
    res.status(200).send(JSON.stringify({ password: result[0]['0'].password}))
  }).catch(console.log)
})

export default userRouter;