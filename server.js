/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import kamranRoutes from './routes/kamranRoutes.js';
import faithRoutes from './routes/faithRoutes.js';
import joshuaRoutes from './routes/joshuaRoutes.js';
import nickRoutes from './routes/nickroutes.js';
import thirdPartyRoutes from './routes/thirdPartyRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/api', kamranRoutes);
app.use('/api', faithRoutes);
app.use('/api', joshuaRoutes);
app.use('/api', nickRoutes);
app.use('/api', thirdPartyRoutes);

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
