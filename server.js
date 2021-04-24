/* eslint-disable no-console */
import express from 'express';
import path from 'path';

import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import es6Renderer from 'express-es6-template-engine'




const app = express();

const staticFolder = 'public';


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(staticFolder));
app.engine('html', es6Renderer);
app.set('views', 'public');

app.set('view engine', 'html');


app.use('/api', apiRoutes);


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/genre', (req, res) => {
  res.render('genre');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/insert', (req, res) => {
  res.render('insert');
});

async function bootServer() {
  try {
    
    app.listen(PORT, async () => {
      const mysql = await db.sequelizeDB;
      await mysql.sync();
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
