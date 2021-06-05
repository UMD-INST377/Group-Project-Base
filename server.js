/* eslint-disable no-console */
import express from "express";
import db from "./database/initializeDB.js";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const staticFolder = "public";
// app.use(express.static(staticFolder));
app.use(express.static('public'));
app.use('/api', apiRoutes);

async function bootServer() {
  try { // make sure that the port is on before the db is const
    app.listen(PORT, async () => {
      try {
        const database = await db.sequelizeDB.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
