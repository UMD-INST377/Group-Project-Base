/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
// import apiRoutes from './routes/apiRoutes.js';
import judeRoutes from './routes/judeRoutes.js';
import isaacRoutes from './routes/isaacRoutes.js';
import agyaRoutes from './routes/agyaRoutes.js';
import stefRoutes from './routes/stefRoutes.js';
import owenRoutes from './routes/owenRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
// app.use('/api', apiRoutes);
app.use('/jude', judeRoutes);
app.use('/isaac', isaacRoutes);
app.use('/agya', agyaRoutes);
app.use('/stef', stefRoutes);
app.use('/owen', owenRoutes);


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
