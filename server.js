const express  = require('express');
const db  = require('./database/initializeDB.js');
const apiRoutes = require('./routes/apiRoutes.js');

const staticFolder = "public";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require('cors')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); 
app.use(cors())

app.use(express.static(staticFolder));

app.use('/api', apiRoutes);

async function bootServer() {
  try {
    app.listen(PORT, async () => {
      const mysql = await db.sequelizeDB;
      await mysql.sync();
      console.log(`Listening on: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();