/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import es6Renderer from 'express-es6-template-engine'

const app = express();
app.engine('html', es6Renderer);
app.set('views', 'public');
const staticFolder = 'public';

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));

app.use('/api', apiRoutes);

app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
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
