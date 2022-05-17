/* eslint-disable no-console */

//TODO: import all routes, can be simple names like nameRoute
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import route from './chandraRoute/route.js';
import routes from './spencerRoute/routes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//TODO: first should be /API
app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/chandra', route);
app.use('/amy', route);
app.use('/casie', route);
app.use('/spencer', routes);

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
