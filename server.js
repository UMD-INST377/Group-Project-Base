/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import danielRoutes from './routes/danielRoutes.js';
import faithRoutes from './routes/faithRoutes.js';
import joshuaRoutes from './routes/joshuaRoutes.js';
import kamranRoutes from './routes/kamranRoutes.js';
import nickRoutes from './routes/nickroutes.js';
import thirdPartyRoutes from './routes/thirdPartyRoutes.js';
import udayRoutes from './routes/udayroutes.js';
import top100Routes from './routes/top100Routes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/api', danielRoutes);
app.use('/api', faithRoutes);
app.use('/api', joshuaRoutes);
app.use('/api', kamranRoutes);
app.use('/api', nickRoutes);
app.use('/api', thirdPartyRoutes);
app.use('/api', udayRoutes);
app.use('/api', top100Routes);

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
