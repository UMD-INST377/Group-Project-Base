/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import apiRoutesJessica from './routes/apiRoutesJessica.js';
import apiRoutesEthan from './routes/apiRoutesEthan.js';
import apiRoutesMelody from './routes/apiRoutesMelody.js';
import apiRoutesNick from './routes/apiRoutesNick.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/jess', apiRoutesJessica);
app.use('/ethan', apiRoutesEthan);
app.use('/melody', apiRoutesMelody);

async function bootServer() {
  try {
    // const mysql = await db.sequelizeDB;
    // await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
