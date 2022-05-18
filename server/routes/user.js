import express from 'express';
import connection from '../config.js'

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.send('Pinged userRouter');
});

// CREATE ACCOUNT
userRouter.post('/signup', (req, res) => {
  console.log('POST to usersRouter.post("/signup")..');
  let userData = [req.body.user, req.body.pass]
  
  // check for null values
  for (let i in userData) {
    if (i === '') {
      res.status(403).send('Missing value. Try again.')
      return
    }
  }
  // first we insert our account data
  const input = `INSERT INTO users (\`username\`, \`password\`) VALUES(SHA2("${req.body.user}", 256), SHA2("${req.body.pass}", 256));`
  let createAcct = connection.promise().query(input)
  .then(([rows, fields]) => {
    console.log('affectedRows: ' + rows.affectedRows);
    console.log('\nAccount created. No issues detected.')
  })
  .catch((error) => {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(405).send('Username is taken.')
      throw new Error('ER_DUP_ENTRY')
    }
  }).then(() => { // pass successful insert into select query to get account data
    let getData = `SELECT username, password FROM users WHERE username = SHA2("${userData[0]}", 256) and password = SHA2("${userData[1]}", 256);`
    return connection.promise().query(getData)
  })
  .then((result) => {
    res.status(200).send(JSON.stringify({
        plainUser: userData[0],
        username: result[0].username,
        password: result[0].password
      }))
    }).catch((err) => {
      if (err.name === 'ER_DUP_ENTRY') {
        console.log('INSERT failed. Ended promise chain.')
      }
    })
})

// SIGN IN
userRouter.post('/login', async (req, res) => {
  console.log('POST to usersRouter.post("/login")..\n');
  let userData = [req.body.user, req.body.pass]
  
  const input = `SELECT username, password FROM users WHERE username = SHA2("${userData[0]}", 256) and password = SHA2("${userData[1]}", 256);`
  let update = connection.promise().query(input)
  .then((result) => {
   if (result[0]['0'] === undefined) {
     res.status(401).send('Incorrect Username or Password.')
     return
   }
    res.status(200).send(JSON.stringify({
        plainUser: userData[0],
        username: result[0]['0'].username,
        password: result[0]['0'].password
      }))
    }).catch(console.log)
})

// UPDATE USERNAME
userRouter.put('/username', (req, res) => {
  console.log(req.body)
  const formParams = JSON.parse(req.body.form)
  // needed for second query
  const old_username = req.body.username
  console.log(formParams)
  console.log('usersRouter.put("/username")...\n')

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

// UPDATE PASSWORD
userRouter.put('/pw', (req, res) => {
  const formParams = JSON.parse(req.body.form)
  // needed for second query
  const user = req.body.username
  console.log('usersRouter.put("/password")...\n')
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