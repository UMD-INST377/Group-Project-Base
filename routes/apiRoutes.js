/* eslint-disable no-empty */
/* eslint-disable no-console */
import express from 'express';
import sequelize, { Sequelize } from 'sequelize';
import db from '../database/initializeDB.js';
import User from '../models/User.js';

// const { body, validationResult } = require('express-validator');

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
    const user = await db.sequelizeDB.models.users.findAll();
    const reply = user.length > 0 ? { data: user } : { message: 'no results found' };
    res.json(reply);
    res.end();
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


router.get('/users/:username', async (req, res) => {
  try {
    console.log(`* Using router.get('/users/:username') to query (USER INPUT): ${req.body.gbif}\n`);
    const user = await db.sequelizeDB.models.users.findAll({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    });
    res.json(user);
    res.end();
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
    res.end();
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/canidae/:gbif', async (req, res) => {
  try {
    console.log(`* Using router.get('/canidae/:gbif') to query (USER INPUT): ${req.body.gbif}\n`);
    const canidae = await db.sequelizeDB.models.canidae.findAll({
      where: {
        gbif: req.body.gbif
      }
    });
    res.json(canidae);
    res.end();
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
    res.end();
  } catch (err) {
    console.error(err);
    res.error('Error during GET all request.');
  }
});
router.get('/felinae/:gbif', async (req, res) => {
  try {
    console.log("Using router.get('/felinae/:gbif')...");
    const felinae = await db.sequelizeDB.models.felinae.findAll({
      where: {
        gbif: req.body.gbif
      }
    });
    res.json(felinae);
    res.end();
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
    res.end();
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
        gbif: req.body.gbif
      }
    });
    res.json(hominidae);
    res.end();
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
    res.end();
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
        query_id: req.body.query_id
      }
    });
    res.json(query);
    res.end();
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

// GET Assignment
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

router.get('/hominidae/:scientific_name', async (req, res) => {
  try {
    console.log("Using router.get('/hominidae/:scientific_name')...");
    const hominidae = await db.sequelizeDB.models.hominidae.findAll({
      where: {
        scientific_name: req.params.scientific_name
      }
    });
    res.json(hominidae);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/users', async (req, res) => {
  try {
    console.log('PUT to router.route("/user")..');
    const newUser = await db.sequelizeDB.models.users.upsert({
      username: req.body.username,
      password: req.body.password
    },
    {
      where: {
        userid: req.body.userid
      }
    })
    res.status(200).send(`SUCCESS: New user: ${req.body.username} updated.`);
    res.end();
  } catch (e) {
    res.send(`ERROR: ${e.name}`);
  }
});
// router.put('/user', async (req, res) => {
//   try {
//     console.log('Putting user');
//     const user = await db.sequelizeDB.models.users.upsert({
//       where: {
//         userid: req.body.userid,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         create_time
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

router.post('/hominidae', async (req, res) => {
  try {
    console.log('Posting hominidae animal');
    const user = await sequelizeDB.models.hominidae.data({
      where: {
        item: 'random_items',
        GBIF: 'gbif',
        scientific_name: 'random animal',
        parent_taxon: 'unknown',
        common_names: 'random animal'
      }
    });
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/hominidae', async (req, res) => {
  try {
    console.log('Deleting hominidae animal');
    const user = await sequelizeDB.models.hominidae.findAll({
      where: {
        item: 'random_items'
      }
    });
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// NEW ROUTES for '/felinae'
router.route('/felinae')
  .post(async (req, res) => {
    try {
      console.log('POST to route.route("/felinae")..');
      const felinae = await db.sequelizeDB.models.felinae.create({
        item: req.body.item,
        GBIF: req.body.gbif,
        scientific_name: req.body.scientific_name,
        parent_taxon: req.body.parent_taxon,
        common_name: req.body.common_name
      }).then((result) => res.json(result));
      res.end();
    } catch (e) {
      console.error(e);
      res.send(`ERROR: ${e.name}`);
    }
  })
  .put(async (req, res) => {
    try {
      console.log('PUT to router.route("/felinae")..');
      const felinae = await db.sequelizeDB.models.felinae.upsert({
        item: req.body.item,
        GBIF: req.body.GBIF,
        scientific_name: req.body.scientific_name,
        parent_taxon: req.body.parent_taxon
      },
      {
        where: {
          GBIF: req.body.GBIF
        }
      })
      res.status(200).send(`SUCCESS: Item(s) with GBIF ID: ${req.body.gbif} updated.`);
      res.end();
    } catch (e) {
      res.send(`ERROR: ${e.name}`);
    }
  })
  .delete(async (req, res) => {
    try {
      console.log('DELETE to router.route("/felinae")..');
      const felinae = await db.sequelizeDB.models.felinae.destroy({
        where: {
          GBIF: req.body.gbif
        }
      });
      res.status(200).send(`SUCCESS: Item(s) with GBIF ID: ${req.body.gbif} deleted.`);
      res.end();
    } catch (e) {
      console.error(e);
      res.send(`ERROR: ${e.name}`);
    }
  });

export default router;

