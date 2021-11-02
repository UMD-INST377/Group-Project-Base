/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/api.js';
import collegeRoutes from './routes/colleges.js';

// Initialize express application
const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

// Set default options
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure Endpoints
app.use(express.static(staticFolder));
app.use("/api", apiRoutes);
app.use("/college", collegeRoutes);

// HTTP server function
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
