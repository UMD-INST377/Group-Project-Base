import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const staticFolder = "public";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));

app.use('/api', apiRoutes);

async function bootServer() {
  try {
<<<<<<< HEAD
    app.listen(PORT, async () => {
      const mysql = await db.sequelizeDB;
      await mysql.sync();
=======
    app.listen(PORT, async () => {  
    const mysql = await db.sequelizeDB;
    await mysql.sync();
>>>>>>> b9aa52ddccef2fb625d8b4192c8fbf41f6e384c2
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();