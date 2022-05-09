import express from 'express'
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

import danielRoutes from './danielRoutes'
import db from '../database/initializeDB';

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Touched danielRoutes')
    res.json({message:'Welcome to the Group 18 API!'})
});

router.route('/artist')
.get(async (req, res) => {
    try {
        const artistList = await db.artist.findAll()
        res.json({data: artistList});
    } catch (err) {
        console.error(err);
        res.send({message: 'Error!'})
    }
})

router.route('/artist/:id')
.get(async (req, res) => {
    try {
        const {id} = req.params;
        const artistList = await db.artist.findAll();
        res.json({data: artistList[id]});
    } catch (err) {
        console.error(err);
        res.json({message: 'Error!'})
    }
})

// artist POST/PUT/DELETE
// POST
router.route('/artist')
.post(async (req, res) => {
    const artistList = await db.artist.findAll();
    const currentId = (await artistList.length) + 1;
    try {
      const newArtist = await db.artist.create({
        artist_id: currentId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      });
      res.json(newArtist);
    } catch (err) {
      console.error(err);
      res.error('Servor error')
    }
});

// PUT
router.route('/artist/:id')
.put(async (req, res) => {
    try {
      const {id} =  req.params;
      await db.aritst.update(
        {
          first_name: req.body.first_name
        },
        {
          last_name: req.body.last_name
        },
        {
          where: {
            artist_id: id
          }
        }
      );
      res.send('Artist Successfully Updated')
    } catch (err) {
      console.error(err);
      res.json({message: 'Servor error'})
    }
});

// DELETE
router.route('/artist/:id')
.delete(async (req, res) => {
    try {
      await db.artist.destroy({
        where: {
          artist_id: req.params.artist_id
        }
      });
      res.send("Sucessfully Deleted")
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});

///********//
// RATINGS //
///********//

router.route('/ratings')
.get(async (req, res) => {
    try {
        const ratingsList = await db.ratings.findAll()
        res.json({data: ratingsList});
    } catch (err) {
        console.error(err);
        res.send({message: 'Error!'})
    }
})

router.route('/rating/:id')
.get(async (req, res) => {
    try {
        const {id} = req.params;
        const ratingsList = await db.ratings.findAll();
        res.json({data: artistList[id]});
    } catch (err) {
        console.error(err);
        res.json({message: 'Error!'})
    }
})
// ratings POST/PUT/DELETE
// POST
router.route('/ratings')
.post(async (req, res) => {
    const ratingsList = await db.ratings.findAll();
    const currentId = (await ratingsList.length) + 1;
    try {
      const newRating = await db.ratings.create({
        rating_id: currentId,
        ratings: req.body.ratings,
        description: req.body.description,
        song_id: req.body.song_id,
        chart_id: req.body.chart_id,
      });
      res.json(newRating);
    } catch (err) {
      console.error(err);
      res.error('Servor error')
    }
});

// PUT
router.route('/rating/:id')
.put(async (req, res) => {
    try {
      const {id} =  req.params;
      await db.ratings.update(
        {
          ratings: req.body.ratings
        },
        {
          description: req.body.description
        },
        {
          song_id: req.body.song_id
        },
        {
          chart_id: req.body.chart_id
        },
        {
          where: {
            rating_id: id
          }
        }
      );
      res.send('Rating Successfully Updated')
    } catch (err) {
      console.error(err);
      res.json({message: 'Servor error'})
    }
});

// DELETE
router.route('/ratings/:id')
.delete(async (req, res) => {
    try {
      await db.ratings.destroy({
        where: {
          rating_id: req.params.rating_id
        }
      });
      res.send("Sucessfully Deleted")
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});

export default router;