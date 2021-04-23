/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const staticFolder = 'public';

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));

app.use('/api', apiRoutes);
app.get('/', () => {
  res.send('index.html');
});

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  res.render('about');
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
