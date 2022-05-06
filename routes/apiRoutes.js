/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
// // eslint-disable-next-line import/no-unresolved
// import fetch from 'node-fetch';
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
});
router.put('/artists', async (req, res) => {
  try {
    await db.artists.update(
      {
        artist_id: req.body.artist_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country_id: req.body.country_id
      },
      {
        where: {
          artist_id: req.body.artist_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.post('/artists', async (req, res) => {
  try {
    const createQuery = `INSERT INTO artists (artist_id, first_name, last_name, country_id)
      VALUES('${req.body.artist_id}','${req.body.first_name}','${req.body.last_name}','${req.body.country_id}')`;
    const addArtist = await db.sequelizeDB.query(createQuery, {
      type: sequelize.QueryTypes.INSERT
    });
    res.send({message: 'Artist Added'});
  } catch (err) {
    console.error(err);
    res.send({message: 'Something went wrong on the SQL request'});
  }
});
router.delete('/artists/:artist_id', async (req, res) => {
  try {
    await db.artists.destroy({
      where: {
        artist_id: req.params.artist_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
});
router.put('/artwork', async (req, res) => {
  try {
    await db.artwork.update(
      {
        artwork_id: req.body.artwork_id,
        artwork_title: req.body.artwork_title,
        year_created: req.body.year_created,
        serial_number: req.body.serial_number,
        price: req.body.price,
        discount_price: req.body.discount_price
      },
      {
        where: {
          artwork_id: req.body.artwork_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.post('/artwork', async (req, res) => {
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
});
router.delete('/artwork/:artwork_id', async (req, res) => {
  try {
    await db.artwork.destroy({
      where: {
        artwork_id: req.params.artwork_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
});
router.put('/country', async (req, res) => {
  try {
    await db.artists.update(
      {
        country_id: req.body.country_id,
        country_name: req.body.country_name,
        country_nationality: req.body.country_nationality
      },
      {
        where: {
          country_id: req.body.country_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
})

  .post('/country', async (req, res) => {
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
  });
router.delete('/country/:country_id', async (req, res) => {
  try {
    await db.country.destroy({
      where: {
        country_id: req.params.country_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
});
router.put('/customer', async (req, res) => {
  try {
    await db.customer.update(
      {
        customer_id: req.body.customer_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        credit_info: req.body.credit_info,
        email: req.body.email,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        zip_code: req.body.zip_code,
        payment_date: req.body.payment_date
      },
      {
        where: {
          customer_id: req.body.customer_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
  });
router.delete('/artwork/:artwork_id', async (req, res) => {
  try {
    await db.artwork.destroy({
      where: {
        artwork_id: req.params.artwork_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
});
router.put('/galleries', async (req, res) => {
  try {
    await db.galleries.update(
      {
        gallery_id: req.body.gallery_id,
        capacity: req.body.capacity,
        gallery_name: req.body.gallery_name,
        email: req.body.email,
        street_address: req.body.street_address,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code
      },
      {
        where: {
          gallery_id: req.body.gallery_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
});
router.put('/genres', async (req, res) => {
  try {
    await db.genres.update(
      {
        genre_id: req.body.genre_id,
        genre_name: req.body.genre_name
      },
      {
        where: {
          genre_id: req.body.genre_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
});
router.put('/reservation', async (req, res) => {
  try {
    await db.reservation.update(
      {
        reservation_id: req.body.reservation_id,
        reservation_date: req.body.reservation_date,
        customer_id: req.body.customer_id,
        gallery_id: req.body.gallery_id
      },
      {
        where: {
          reservation_id: req.body.reservation_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
  });
// router.delete('/reservation', async(req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(resController.resDelete, {
//       replacements: {
//         reservation_id: req.body.reservation_id
//       },
//       type: sequelize.QueryTypes.DELETE
//     });
//     res.json({data: result});
//     console.log('Deleted successfully');
//   } catch (err) {
//     res.json({error: 'Server error'});
//   }
// });
router.delete('/reservation/:reservation_id', async (req, res) => {
  try {
    await db.reservation.destroy({
      where: {
        reservation_id: req.params.reservation_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;
