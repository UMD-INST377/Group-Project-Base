/* eslint-disable no-console */
import express from 'express';
import reload from 'livereload';
import dotenv from 'dotenv';
import path from 'path';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';
const envConfig = 'development';
let liveReloadServer;

// console.log(a);
// auto reloading
if (process.env.NODE_ENV === 'development') {
  liveReloadServer = reload.createServer();
  liveReloadServer.watch(path.join(__dirname, staticFolder));
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// handles params passed by HTML
app.use(express.urlencoded({ extended: true }));
// handles JSON recieved by API
app.use(express.json());

//  serves static files to express
app.use(express.static(staticFolder));
app.use('/', apiRoutes); // hooks app to all of our routes

async function bootServer() {
  try {
    // const mysql = await db.sequelizeDB;
    // await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
      console.log('Environment:', process.env.NODE_ENV);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
if (envConfig === 'development') {
  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });
}
