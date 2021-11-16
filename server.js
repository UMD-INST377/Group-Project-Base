/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
// import apiRoutes from './routes/apiRoutes.js';
// import labelsRoutes from './routes/labelsRoutes.js'
import musical_infoRoutes from './routes/musical_infoRoutes.js'
import placementsRoutes from './routes/placementsRoutes.js'
import certificationRoutes from './routes/certificationsRoutes.js'
import pricesRoutes from './routes/pricesRoutes.js'
import producersRoutes from './routes/producersRoutes.js'
import singersRoutes from './routes/singersRoutes.js'
import songsRoutes from './routes/songsRoutes.js'
// import vinyllabelRoutes from './routes/vinyllabelRoutes.js'
import vinylRoutes from './routes/vinylRoutes.js'

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
// app.use('/api', apiRoutes);

// app.use('/api', labelsRoutes);
app.use('/api', musical_infoRoutes);
app.use('/api', placementsRoutes);
app.use('/api', certificationRoutes)
app.use('/api', pricesRoutes);
app.use('/api', producersRoutes);
app.use('/api', singersRoutes);
app.use('/api', songsRoutes);
// app.use('/api', vinylLabelRoutes);
app.use('/api', vinylRoutes);

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