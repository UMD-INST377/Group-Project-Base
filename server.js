/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import artistRoutes from './routes/artistRoutes.js';
import AlbumsRoutes from './routes/AlbumsRoutes.js';
import genreRoutes from './routes/genreRoutes.js';
import labelRoutes from './routes/labelRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/api', artistRoutes);
app.use('/api', AlbumsRoutes);
app.use('/api', genreRoutes);
app.use('/api', labelRoutes);

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
