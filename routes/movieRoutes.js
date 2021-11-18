/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
// works if replace verbs with actorController
import actor from '../controllers/actorController.js';
import genre from '../controllers/genreController.js';
import film from  '../controllers/filmController.js';
const router = express.Router();

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

router.route('/film')
  .get(async (req, res) => {
    try {
      res.json({message: 'Touched the /film with GET'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'Touched the /film with PUT'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'Touched the /film with POST'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'Touched the /film with DELETE'});
      console.log(message);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  });


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
      const movieGenres = await db.sequelizeDB.query(genre.postActor, {
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
      const movieGenres = await db.sequelizeDB.query(genre.postActor, {
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
      const movieGenres = await db.sequelizeDB.query(genre.postActor, {
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

router.route('/film')
  .get(async (req, res) => {
    try {
      const films = await db.sequelizeDB.query(film.getFilm, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(films);
      console.log(req);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .put(async (req, res) => {
    try {
      const films = await db.sequelizeDB.query(film.putFilm, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      res.json(films);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .post(async (req, res) => {
    try {
      const films = await db.sequelizeDB.query(film.postFilm, {
        replacements: {
          name: req.body.name, id: req.body.id
        },
        type: sequelize.QueryTypes.INSERT
      });
      res.json(films);
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong'});
    }
  })
  .delete(async (req, res) => {
    try {
      const films = await db.sequelizeDB.query(film.deleteFilm, {
        replacements: {
          id: req.body.id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(films);
    } catch (error) {
      console.log(error);
      res.json({error: 'Can\'t be deleted'});
    }
  });

export default router;
