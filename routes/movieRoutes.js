/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import actor from '../controllers/actorController.js';
import genre from '../controllers/genreController.js';
import film from '../controllers/filmController.js';



const router = express.Router();

router.get('/', (req,res) => {
  res.send("Welcome to Movies!");
});

/**
 * Films
 */
router.route('/film')
  .get(async (req, res) => {
    try {
      const movieData = await db.sequelizeDB.query(film.getFilm, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(movieData);
      console.log(req);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put(async (req, res) => {
    try {
      const movieData = await db.sequelizeDB.query(film.putFilm, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      console.log(movieData);
      res.json(movieData);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post(async (req, res) => {
    try {
      const movieData = await db.sequelizeDB.query(film.postFilm, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(movieData);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete(async (req, res) => {
    try {
      const movieData = await db.sequelizeDB.query(film.deleteFilm, {
        replacements: {
          id: req.body.id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(movieData);
    } catch (error) {
      console.log(error);
      res.json({error: 'Can\'t be deleted'});
    }
  });

/**
 * Genres
 */

router.route('/genre')
  .get(async (req, res) => {
    try {
      const movieGenres = await db.sequelizeDB.query(genre.getGenre, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(movieGenres);
      console.log(req);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put(async (req, res) => {
    try {
      const movieGenres = await db.sequelizeDB.query(genre.putGenre, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(movieGenres);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post(async (req, res) => {
    try {
      const movieGenres = await db.sequelizeDB.query(genre.postGenre, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(movieGenres);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete(async (req, res) => {
    try {
      const movieGenres = await db.sequelizeDB.query(genre.deleteGenre, {
        replacements: {
          id: req.body.id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(movieGenres);
    } catch (error) {
      console.log(error);
      res.json({error: 'Can\'t be deleted'});
    }
  });

/**
 * Actor
 */

router.route('/actor')
  .get(async (req, res) => {
    try {
      const movieActors = await db.sequelizeDB.query(actor.getActor, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(movieActors);
      console.log(req);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put(async (req, res) => {
    try {
      const movieActors = await db.sequelizeDB.query(actor.putActor, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(movieActors);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post(async (req, res) => {
    try {
      const movieActors = await db.sequelizeDB.query(actor.postActor, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(movieActors);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete(async (req, res) => {
    try {
      const movieActors = await db.sequelizeDB.query(actor.deleteActor, {
        replacements: {
          id: req.body.id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(movieActors);
    } catch (error) {
      console.log(error);
      res.json({error: 'Can\'t be deleted'});
    }
  });

router.get('/search/:id', async(req,res) => {
  try {
    console.log('touched search/:id GET');

    const movieByName = await db.sequelizeDB.query(film.getByID,{
      replacements: {
        id : req.params.id
      }
    });

    res.json(movieByName);
  } catch (err) {
    console.error(err);
    res.json({
      status: 'Something went wrong',
      data: null,
      message: 'Failed, error.'
    });
  }
});

export default router;
