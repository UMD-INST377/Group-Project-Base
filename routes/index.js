import express from 'express';
import connection from '../config.js'

var indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  try {
    res.render('index', { title: 'Express' });
  } catch (e) {
    console.error(`${e}`);
  }
});
/*
const acct = retrieveAcct(req.body.user, req.body.pass)
.then((row) => {
  console.log(Object.keys(row));
  //res.setHeader('Content-Type', 'application/json');
  //res.send(row);
})
*/
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

// SIGN UP
indexRouter.post('/', async (req, res, next) => {
  console.log('POST to indexRouter.post("/")..');
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
indexRouter.post('/login', async (req, res, next) => {
  console.log('POST to indexRouter.post("/login")..');
  let userData = [req.body.user, req.body.pass]
  try {
  // fetch their encrypted user data and store it locally
  connection.query(`SELECT username, email, password FROM users WHERE username = SHA2("${userData[0]}", 256) and password = SHA2("${userData[1]}", 256);`, async (error, results) => {
    if (error) {
        console.log(error);
      }
      if (typeof results[0] === 'undefined') {
          res.status(400);
          console.log('\nError 400: Problem signing in.')
          return;
        }
      console.log('Signing in...')
      res.send(JSON.stringify({ plainUser: userData[0], username: results[0].username, email: results[0].email, password: results[0].password }))
      })
  } catch (e) {
    console.log(`ERROR: ${e.message}\n`);
    res.sendStatus(400);
  }
})
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