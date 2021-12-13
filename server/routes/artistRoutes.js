/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import artists from '../server/controllers/Artists.js';

const router = express.Router();

router.get('/artists/:artist_id', async (req, res) => {
  try {
    const artistId = req.params.artist_id;
    const sqlStatement = `SELECT * from artist WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.put('/artists/:artist_id/:artist_name', async (req, res) => {
  try {
    // add id for endpoint
    const artistId = req.params.artist_id;
    const artistName = req.params.artist_name;
    const sqlStatement = `UPDATE artist SET artist_name = '${artistName}' WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.UPDATE
    });
    res.json(result);
  } catch (err) {
    res.json({ error: 'Server error, try again!' });
  }
});

router.post('/artists', async (req, res) => {
  try {
    // eslint-disable-next-line quotes
    const sqlStatement = `INSERT INTO artist (artist_name, verified) VALUES ('${req.body.artist}', '${req.body.verified}');`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.INSERT
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

router.delete('/artists/:artist_id', async (req, res) => {
  try {
    const artistId = req.params.artist_id;
    const sqlStatement = `DELETE from artist WHERE artist_id = ${artistId};`;
    const result = await db.sequelizeDB.query(sqlStatement, {
      type: sequelize.QueryTypes.DELETE
    });
    console.log('deleted artist');
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
