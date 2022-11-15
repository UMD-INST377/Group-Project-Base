/* eslint-disable no-console */
import express from 'express';
import apiRoutes from './routes/apiRoutes.js';

// API Link -- https://rapidapi.com/api-sports/api/api-nba 

const app = express();

const PORT = process.env.PORT || 3030;
const staticFolder = 'client';


// api call to NBA data -> route -> apiRoutes -> foodService.js 
// food services will be changed to our API


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);

async function bootServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
