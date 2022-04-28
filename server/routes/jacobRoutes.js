/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import db from '../../database/initializeDB.js';

const router = express.Router();

const allParks = 'SELECT * FROM park_name.park_admission;';

router.route('/jacob/')
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (req, res) => {
    try {
      console.log('touched jacobs endpoint');
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
      const parkState = await db.Parks.create({
        park_id: currentId,
        park_name: req.body.park_name,
        trails: req.body.trails,
        park_state: req.body.park_state 

      });
      res.json(parkState);
    } catch (err) {
      console.error(err);
      res.json('Server error');
    }
  });
router.put('/jacob/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    await db.Parks.update(
      {
        park_name: req.body.park_name,
        trails: req.body.trails,
        park_state: req.body.park_state 
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
router.delete('/jacob/:id', async (req, res) => {
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

export default router;
