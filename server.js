const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db  = require('./database/initializeDB.js');
const apiRoutes = require('./routes/apiRoutes.js');

const staticFolder = 'public';

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); 
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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