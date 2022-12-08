/* eslint-disable no-console */
import express from 'express';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

const PORT = process.env.PORT || 3030;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let liveReloadServer;
if (process.env.CONTEXT === 'development') {
  app.use(connectLivereload({hostname: 'localhost'})); // adding a port breaks the script injection that makes reload work
  liveReloadServer = livereload.createServer();
  const folder = path.join(__dirname, staticFolder);
  liveReloadServer.watch(folder);
}

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
