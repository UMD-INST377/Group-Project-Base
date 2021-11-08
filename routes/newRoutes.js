/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';
import getVinyls from '../server/controllers/getVinyls.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('You touched the default route');
  res.json({ message: 'Welcome to the Vinyl Database'});
});

// suhail's routes to the artists endpoint which would map to the "singers" table of our SQL DB
router.route('/artists')
  .get((req, res) => {
    try {
      console.log('touched /artists with GET');
      res.json({ artist: 'Nirvana'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /artists with PUT'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /artists with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /artists with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  });

// Diego's routes to the songs endpoint which would map to the "songs" table of our SQL DB
router.route('/vinyl')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(getVinyls, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })

  .post(async(req, res) => {
    try {
      const insertVinylSQL = `INSERT INTO vinyl (singer_id, album_name, genre, track_amount, producer_id, runtime, first_available, weight, is_explicit)
      VALUES (${req.body.singer_id}, "${req.body.album_name}", "${req.body.genre}", ${req.body.track_amount}, ${req.body.producer_id}, "${req.body.runtime}", "${req.body.first_available}", "${req.body.weight}", ${req.body.is_explicit});`;

      await db.sequelizeDB.query(insertVinylSQL, {type: sequelize.QueryTypes.INSERT});

      res.send(`Successfully Inserted ${req.body.album_name}`);
    } catch (error) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .put(async(req, res) => {
    try {
      const updateVinylSQL = `UPDATE vinyl SET album_name = "${req.body.ablum_name}" WHERE album_name = "${req.body.ablum_name}"`;

      await db.sequelizeDB.query(updateVinylSQL, {type: sequelize.QueryTypes.UPDATE});

      res.send(`Successfully Updated ${req.body.album_name}`);
    } catch (error) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })

  .delete(async(req, res) => {
    try {
      const vinyl = `SELECT * FROM vinyl WHERE album_name = "${req.body.album_name}"`;
      const vinylSelected = await db.sequelizeDB.query(vinyl, {type: sequelize.QueryTypes.SELECT});
      const vinylID = vinylSelected.map((vinID) => vinID.vinyl_id)[0];
      const deleteVinylSQL = `DELETE FROM vinyl WHERE vinyl_id = "${vinylID}"`;

      await db.sequelizeDB.query(deleteVinylSQL, {type: sequelize.QueryTypes.DELETE});

      res.send(`Successfully Deleted ${req.body.album_name}`);
    } catch (error) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  });

// Minghao's routes to the prices endpoint which would map to the "prices" table of our SQL DB
router.route('/prices')
  .get((req, res) => {
    try {
      console.log('touched /prices with GET');
      res.json({ prices: '10'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /prices with PUT'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /prices with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /prices with DELETE'});
    } catch (error) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  });

export default router;
