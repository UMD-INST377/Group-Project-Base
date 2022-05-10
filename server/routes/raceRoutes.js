/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/race/')
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (req, res) => {
    try {
      console.log('touched races endpoint');
      const parks = await db.Parks.findAll();
      const reply = parks.length > 0 ? { parks } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.log('err');
      res.json({message: 'Server error'});
    }
  })
  .post(async (req, res) => {
    const parks = await db.Parks.findAll();
    const currentId = (await parks.length) + 1;
    try {
      const newPark = await db.Parks.create({
        park_id: currentId,
        park_name: req.body.park_name,
        trails: req.body.trails,
        park_lat: req.body.lat,
        park_long: req.body.long,

      });
      res.json(newPark);
    } catch (err) {
      console.error(err);
      res.json('Server error');
    }
  });
router.put('/race/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    await db.Parks.update(
      {
        park_name: req.body.park_name,
        trails: req.body.trails
      },
      {
        where: {
          park_id: req.params.id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.delete('/race/:id', async (req, res) => {
  try {
    await db.Parks.destroy({
      where: {
        park_id: req.params.id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.route('/race/reviews')
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (req, res) => {
    try {
      console.log('touched reviews endpoint');
      const reviews = await db.Reviews.findAll();
      const reply = reviews.length > 0 ? { reviews } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.log('err');
      res.json({message: 'Server error'});
    }
  })
  .post(async (req, res) => {
    const reviews = await db.Reviews.findAll();
    const currentId = (await reviews.length) + 1;
    try {
      const newReview = await db.Reviews.create({
        review_id: currentId,
        park_id: req.body.park_id,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
      });
      res.json(newReview);
    } catch (err) {
      console.error(err);
      res.json('Server error');
    }
  });
router.get('/race/reviews/:park_id', async (req, res) => {
  try {
    const reviews = await db.Reviews.findAll({
      where: {
        park_id: req.params.park_id
      }
    });

    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
// races work
// const dbQuery = 'SELECT * FROM mydb1.parks;';
// router.route('/race/parks').get(async (req, res) => {
//   let result;
//   try {
//     result = await db.sequelizeDB.query(dbQuery, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.log(err);
//   }
// });
// router.get('/parks/:id', async (req, res) => {
//   let result;
//   try {
//     result = await db.sequelizeDB.query(dbQuery, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     console.log(req.params.id);
//     const filt = result.filter((obj) => {
//       console.log(obj.park_id);
//       obj.park_id == req.params.id;
//     });

//     res.send(filt);
//   } catch (err) {
//     console.log(err);
//   }
// });

export default router;
