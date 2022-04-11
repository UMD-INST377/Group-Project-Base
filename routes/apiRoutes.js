/* eslint-disable no-shadow */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import res from 'express/lib/response';
import db from '../database/initializeDB.js';
import artistsController from '../controller/artistsController.js';
import artworkController from '../controller/artworkController.js';
import countryController from '../controller/countryController.js';
import galleriesController from '../controller/galleriesController.js';
import resController from '../controller/resController.js';

const router = express.Router();

/* artist endpoint */
router.route('/designer')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(artistsController.artistGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(gallery);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(artistsController.artPut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(artistsController.artPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(artistsController.artDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* artwork endpoint */
router.route('/design')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(artworkController.artworkGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(gallery);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(artworkController.artworkPut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(artworkController.artworkPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(artworkController.artworkDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* country endpoint */
router.route('/province')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(countryController.countryGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(gallery);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(countryController.countryPut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(countryController.countryPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(countryController.countryDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* customer endpoint */
router.route('/customers')
  .get(async (req, res) => {
    try {
      const gallery = await db.sequelizeDB.query(customerController.custGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(gallery);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(customerController.custPut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(customerController.custPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(customerController.custDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* gallery endpoint */
router.route('/gallery')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(galleriesController.galGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(gallery);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(galleriesController.galPut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(galleriesController.galPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(galleriesController.galDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* genre endpoint */
router.route('/genres')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(genresController.genreGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(gallery);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(genresController.genrePut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(genresController.genrePost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(genresController.genreDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* reservation endpoint */
router.route('/reserved')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(resController.resGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json(result);
    } catch (err) {
      res.json({ error: err});
    }
  })

  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(resController.resPut,
        {
          replacements: {
            artist_id: req.body.artist_id,
            art: req.body.art
          },
          type: sequelize.QueryTypes.UPDATE
        });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(resController.resPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json(result);
      console.log('Successfully Updated');
    } catch (err) {
      res.json({ error: 'Server error'});
    }
  })

  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(resController.resDelete, {
        replacements: {
          artist_id: req.body.artist_id
        },
        type: sequelize.QueryTypes.DELETE
      });
      res.json(result);
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

export default router;
