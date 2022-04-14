/* eslint-disable no-empty */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log('router.use() active..');
  console.log('Time: %d', Date.now());
  next();
});

router.get('/', async (req, res) => {
  res.send('Welcome to Animals db');
});

router.get('/users', async (req, res) => {
  try {
    console.log("Using router.get('/users')...");
    const user = await db.sequelizeDB.models.user.findAll();
    const reply = user.length > 0 ? { data: user } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/users/:uid', async (req, res) => {
  try {
    console.log("Using router.get('/users/:uid')...");
    const user = await db.user.findAll({
      where: {
        uid: req.params.uid
      }
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/canidae', async (req, res) => {
  try {
    console.log("Using router.get('/canidae')...");
    const canidae = await db.sequelizeDB.models.canidae.findAll();
    res.json(canidae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/canidae/:gbif', async (req, res) => {
  try {
    console.log(`* Using router.get('/canidae/:gbif') to query (USER INPUT): ${req.params.gbif}\n`);
    const canidae = await db.sequelizeDB.models.canidae.findAll({
      where: {
        gbif: req.params.gbif
      }
    });
    res.json(canidae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/felinae', async (req, res) => {
  try {
    console.log("Using router.get('/felinae')...");
    const felinae = await db.sequelizeDB.models.felinae.findAll();
    res.json(felinae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/felinae/:gbif', async (req, res) => {
  try {
    console.log("Using router.get('/felinae/:gbif')...");
    const felinae = await db.sequelizeDB.models.felinae.findAll({
      where: {
        gbif: req.params.gbif
      }
    });
    res.json(felinae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/hominidae', async (req, res) => {
  try {
    console.log("Using router.get('/hominidae')...");
    const hominidae = await db.sequelizeDB.models.hominidae.findAll();
    res.json(hominidae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/hominidae/:gbif', async (req, res) => {
  try {
    console.log("Using router.get('/hominidae/:gbif')...");
    const hominidae = await db.sequelizeDB.models.hominidae.findAll({
      where: {
        gbif: req.params.gbif
      }
    });
    res.json(hominidae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/queries', async (req, res) => {
  try {
    console.log("Using router.get('/queries')...");
    const queries = await db.sequelizeDB.models.queries.findAll();
    res.json(queries);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/queries/:query_id', async (req, res) => {
  try {
    console.log("Using router.get('/queries/:query_id')...");
    const query = await db.sequelizeDB.models.queries.findAll({
      where: {
        query_id: req.params.query_id
      }
    });
    res.json(query);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/hominidae/:gbif', async (req, res) => {
  try {
    console.log("Using router.get('/hominidae/:gbif')...");
    const hominidae = await db.sequelizeDB.models.hominidae.findAll({
      where: {
        gbif: req.params.gbif
      }
    });
    res.json(hominidae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;