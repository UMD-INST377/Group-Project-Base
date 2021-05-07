/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import reload from 'livereload';
import connectReload from 'connect-livereload';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'public';

const liveReloadServer = reload.createServer();
liveReloadServer.watch(path.join(__dirname, staticFolder));

app.use(connectReload());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(staticFolder));

app.use('/api', apiRoutes);

async function bootServer() {
  try {
    app.listen(PORT, async () => {
      console.log(`Listening on: http//localhost:${PORT}`);
      const mysql = await db.sequelizeDB;
      await mysql.sync();
    });
  } catch (err) {
    console.error(err);
  }
  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });
}

bootServer();
