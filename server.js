/* eslint-disable no-console */
import express from 'express';
import db from './server_files/database/initializeDB.js';
import apiRoutes from './server_files/routes/api.js';
import universityRoutes from './server_files/routes/university.js';

// Initialize express application
const app = express();
const PORT = process.env.PORT || 3000;

// Set default options
app.set('view engine', 'ejs');
app.set('views', './server_files/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure Endpoints
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/university", universityRoutes);

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
