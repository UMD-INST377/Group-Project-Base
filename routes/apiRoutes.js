/* eslint-disable no-shadow */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import artistsController from '../controller/artistsController.js';
import artworkController from '../controller/artworkController.js';
import countryController from '../controller/countryController.js';
import customerController from '../controller/customerController.js';
import galleriesController from '../controller/galleriesController.js';
import genresController from '../controller/genresController.js';
import resController from '../controller/resController.js';

const router = express.Router();

/* artist endpoint */
router.route('/artists')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(artistsController.artistGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/artists/:artist_id', async (req, res) => {
  try {
    const artists = await db.artists.findOne({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.json({data: artists});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* artwork endpoint */
router.route('/artwork')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(artworkController.artworkGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/artwork/:artwork_id', async (req, res) => {
  try {
    const artwork = await db.artwork.findOne({
      where: {
        artwork_id: req.params.artwork_id
      }
    });
    res.json({data: artwork});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* country endpoint */
router.route('/country')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(countryController.countryGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/country/:country_id', async (req, res) => {
  try {
    const country = await db.country.findOne({
      where: {
        country_id: req.params.country_id
      }
    });
    res.json({data: country});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
      console.log('Successfully Updated');
    } catch (err) {
      res.send({ error: 'Server error'});
    }
  })

  .post(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(countryController.countryPost, {
        replacements: {art: req.body.art},
        type: sequelize.QueryTypes.INSERT
      });
      res.json({data: result});
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
      res.json({data: result});
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* customer endpoint */
router.route('/customer')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(customerController.custGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/customer/:customer_id', async (req, res) => {
  try {
    const customer = await db.customer.findOne({
      where: {
        customer_id: req.params.customer_id
      }
    });
    res.json({data: customer});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* galleries endpoint */
router.route('/galleries')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(galleriesController.galGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/galleries/:gallery_id', async (req, res) => {
  try {
    const galleries = await db.galleries.findOne({
      where: {
        gallery_id: req.params.gallery_id
      }
    });
    res.json({data: galleries});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/genres/:genre_id', async (req, res) => {
  try {
    const genres = await db.genres.findOne({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json({data: genres});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

/* reservation endpoint */
router.route('/reservation')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(resController.resGet,
        {
          type: sequelize.QueryTypes.SELECT
        });
      console.log('This is the route');
      res.json({data: result});
    } catch (err) {
      res.send({ error: err});
    }
  });

router.get('/reservation/:reservation_id', async (req, res) => {
  try {
    const reservation = await db.reservation.findOne({
      where: {
        reservation_id: req.params.reservation_id
      }
    });
    res.json({data: reservation});
  } catch (err) {
    console.error(err);
    res.send('Server error');
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
      res.json({data: result});
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
      res.json({data: result});
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
      res.json({data: result});
      console.log('Deleted successfully');
    } catch (err) {
      res.json({error: 'Server error'});
    }
  });

export default router;