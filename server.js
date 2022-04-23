/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

import sherifatRoutes from './routes/sherifatRoutes.js';
import luisRoutes from './routes/luisRoutes.js';
import danielRoutes from './routes/daniel_routes.js';
import chrisRoutes from './routes/chris_routes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
app.use('/api', sherifatRoutes)
app.use('/api', luisRoutes);
app.use('/api', danielRoutes);
app.use('/api', chrisRoutes);

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