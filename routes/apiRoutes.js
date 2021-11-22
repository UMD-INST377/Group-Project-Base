/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
// import { UPSERT } from "sequelize/types/lib/query-types";

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('default route');
});

// db.Actor and db.Film work
router.route('/movies')
  .get(async (req, res) => {
    try {
      const filmlist = await db.Film.findAll();
      res.json({data: filmlist});
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  })
  .post(async (req, res) => {
    try {
      console.log(req.body.name);
      res.send('d');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  });

router.route('/movies/:filmId')
  .get(async (req, res) => {
    try {
      const {filmId} = req.params;
      const filmlist = await db.Film.findOne({where: {film_id: `${filmId}`}});

      if (filmlist !== null) { res.send(filmlist); }
    } catch (error) {
      console.error(error);
      res.send("Something went wrong on /movies end or the film_id isn't valid");
    }
  })
  .post(async (req, res) => {
    try {
      const {filmId} = req.params;
      const filmlist = await db.Film.create({
        film_id: `${filmId}`, name: 'Test Film', director_id: 69, writer_id: 69, genre_id: 16, country: 'USA', runtime: 420, year: 1969, studio_id: 1, score: 6.9, votes: 69, budget: 69696969, released: '1969-12-12', actor_id: 69, rating: 'R'
      });
      res.send('Very Immature Film added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  })
  .delete(async (req, res) => {
    try {
      const {filmId} = req.params;
      await db.Film.destroy({where: {film_id: `${filmId}`}});
      res.send('Film deleted');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on /movies end');
    }
  });

// This is Jacky's SQL Controllers
router.route('/genres/:genreId')
  .get(async (req, res) => {
    try {
      const {genreId} = req.params;
      const genrelist = await db.Genre.findOne({where: {genre_id: `${genreId}`}});

      if (genrelist !== null) {
        res.send(genrelist);
      }
    } catch (error) {
      console.error(error);
      res.send("Something went wrong on the /genres end or the genre_id isn't valid");
    }
  })
  .post(async(req, res) => {
    try {
      const {genreId} = req.params;
      const genrelist = await db.Genre.create({genre_id: `${genreId}`, genre: 'Suspense'});
      res.send('Genre added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /genres end and unable to update genre_id');
    }
  })
  .put((req, res) => {
    try {
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /genres end');
    }
  })
  .delete(async(req, res) => {
    try {
      const {genreId} = req.params;
      const genrelist = await db.Genre.destroy({where: {genre_id: `${genreId}`}});
      res.send('Genre deleted');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /genres end and unable to delete from genre_id');
    }
  });
router.route('/actor/')
  .get(async (req, res) => {
    res.send('hello');
  })
  .post(async(req, res) => {
    try {
      const actor = req.body.name;
      const actorAdd = await db.Actor.create({actor: `${actor}`});
      res.send('Actor added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /actor end and unable to update genre_id');
    }
  });
router.route('/genre/')
  .get(async (req, res) => {
    res.send('hello');
  })
  .post(async(req, res) => {
    try {
      const test = req.body.name;
      const genrelist = await db.Genre.create({genre: `${test}`});
      res.send('Genre added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /genres end and unable to update genre_id');
    }
  })
  .delete(async(req, res) => {
    try {
      const {name} = req.body;
      const genrelist = await db.Genre.destroy({where: {genre: `${name}`}});
      res.send('Genre deleted');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /genres end and unable to delete from genre_id');
    }
  });

// Henry's SQL routes Post, Del, Get
router
  .route('/writers/:writerId')
  .get(async (req, res) => {
    try {
      const {writerId} = req.params;
      const writerlist = await db.Writer.findOne({where: {writer_id: `${writerId}`}});

      if (writerlist !== null) {
        res.send(writerlist);
      }
    } catch (error) {
      console.error(error);
      res.send("Something went wrong on the /writer end or the writer_id isn't valid");
    }
  })
  .post(async(req, res) => {
    try {
      const {writerId} = req.params;
      const writerlist = await db.Writer.create({writer_id: `${writerId}`, writer: 'testwriter'});
      res.send('Writer added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /writers end and unable to update writer_id');
    }
  })
  .delete(async(req, res) => {
    try {
      const {writerId} = req.params;
      const writerlist = await db.Writer.destroy({where: {writer_id: `${writerId}`}});
      res.send('Writer delete');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /writers end and unable to delete writer_id');
    }
  })
  .put((req, res) => {
    try {
      res.send('This request was put in blob!');
      console.log('put something inside blob');
    } catch (error) {
      console.log(error);
    }
  });

router.route('/writer/')
  .get(async (req, res) => {
    res.send('hello');
  })
  .post(async(req, res) => {
    try {
      const test = req.body.name;
      const writerlist = await db.Writer.create({writer: `${test}`});
      res.send('Writer added');
    } catch (error) {
      console.error(error);
      res.send('Something went wrong on the /writer end and unable to update writer_id');
    }
  });

router
  .route('/boop')
  .get((req, res) => {
    try {
      console.log('The get default route is reached');
      res.send('You have gotten something from boop');
    } catch (err) {
      console.log(error);
    }
  })
  .post((req, res) => {
    try {
      console.log('post from boop');
      res.send('You have posted something from boop');
    } catch (error) {
      console.log(error);
    }
  })
  .delete((req, res) => {
    try {
      console.log('delete from boop');
      res.send('You have deleted something from boop');
    } catch (error) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      res.send('This request was put in boop!');
      console.log('You have put something from boop');
    } catch (error) {
      console.log(error);
    }
  });

// Testing earlier for postman ignore wink
router
  .route('/stuff')
  .get((req, res) => {
    try {
      console.log('stuff default route reached');
      res.json({ id: 123 });
    } catch (err) {
      console.log(error);
    }
  })
  .post((req, res) => {
    try {
      console.log('post from stuff');
      res.send('you have posted something cool');
    } catch (error) {
      console.log(error);
    }
  })
  .delete((req, res) => {
    try {
      console.log('delete from stuff');
      res.send('<h1>deleting</h1>');
    } catch (error) {
      console.log(error);
    }
  })
  .put((req, res) => {
    try {
      res.send('putting stuff');
      console.log('put from stuff');
    } catch (error) {
      console.log(error);
    }
  });

export default router;